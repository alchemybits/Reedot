/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for t`he specific language governing permissions and
 * limitations under the License.
 */
'use strict';

const functions = require('firebase-functions');
const mkdirp = require('mkdirp-promise');
// Include a Service Account Key to use a Signed URL
const gcs = require('@google-cloud/storage')({
  projectId: "reedot-ae90a",
  keyFilename: 'service-account-credentials.json'});

const admin = require('firebase-admin');
var config = {
    apiKey: "AIzaSyDZY05NIXF9QOrIVwcjILZWmJwXSPYPxH4",
    authDomain: "reedot-ae90a.firebaseapp.com",
    databaseURL: "https://reedot-ae90a.firebaseio.com",
    projectId: "reedot-ae90a",
    storageBucket: "reedot-ae90a.appspot.com",
    messagingSenderId: "893942789831"
  };
admin.initializeApp(config);
const spawn = require('child-process-promise').spawn;
const path = require('path');
const os = require('os');
const fs = require('fs');

// Max height and width of the thumbnail in pixels.
const THUMB_MAX_HEIGHT = 200;
const THUMB_MAX_WIDTH = 200;
// Thumbnail prefix added to file names.
const THUMB_PREFIX = 'thumb_';

// const stripe = require('stripe')(functions.config().stripe.testkey)

// exports.stripecharge = functions.database.ref('Payments/{userId}/{paymentId}').onWrite( (event,context) => {
//   const payment = event.after.val();
//   const userId = context.params.userId;
//   const paymentId = context.params.paymentId;

//   if(!payment || payment.charge) return;

//   const amount = payment.amount;
//   const idempotency_key = paymentId;
//   const source = payment.token.id;
//   const currency = 'usd';
//   const charge = {amount,currency,source};

//   return admin.database()
//   .ref(`/Payments/${userId}/${paymentId}/charge`)
//   .set(stripe.charges.create(charge,{idempotency_key}));





//   // return admin.database()
//   //               .ref(`/users/${userId}`)
//   //               .once('value')
//   //               .then( snapshot => {
//   //                 return snapshot.val();
//   //               })
//   //                 .then(customer => {
//   //                     const amount = payment.amount;
//   //                     const idempotency_key = paymentId;
//   //                     const source = payment.token.id;
//   //                     const currency = 'usd';
//   //                     const charge = {amount,currency,source};

//   //                     return stripe.charges.create(charge,{idempotency_key});
//   //                 })

//   //                 .then(charge => {
//   //                   admin.database()
//   //                     .ref(`/Payments/${userId}/${paymentId}/charge`)
//   //                     .set(charge);

//   //                     return true;
//   //                 })


// })

/**
 * When an image is uploaded in the Storage bucket We generate a thumbnail automatically using
 * ImageMagick.
 * After the thumbnail has been generated and uploaded to Cloud Storage,
 * we write the public URL to the Firebase Realtime Database.
 */
exports.gThumbnail = functions.storage.object().onFinalize((object) => {
  // File and directory paths.
  const filePath = object.name;
  const contentType = object.contentType; // This is the image MIME type
  const fileDir = path.dirname(filePath);
  const fileName = path.basename(filePath);
  const thumbFilePath = path.normalize(path.join(fileDir, `${THUMB_PREFIX}${fileName}`));
  const tempLocalFile = path.join(os.tmpdir(), filePath);
  const tempLocalDir = path.dirname(tempLocalFile);
  const tempLocalThumbFile = path.join(os.tmpdir(), thumbFilePath);

  // Exit if this is triggered on a file that is not an image.
  if (!contentType.startsWith('image/')) {
    console.log('This is not an image.');
    return null;
  }

  // Exit if the image is already a thumbnail.
  if (fileName.startsWith(THUMB_PREFIX)) {
    console.log('Already a Thumbnail.');
    return null;
  }

  // Cloud Storage files.
  const bucket = gcs.bucket(object.bucket);
  const file = bucket.file(filePath);
  const thumbFile = bucket.file(thumbFilePath);
  const metadata = {
    contentType: contentType,
    // To enable Client-side caching you can set the Cache-Control headers here. Uncomment below.
    // 'Cache-Control': 'public,max-age=3600',
  };
  
  // Create the temp directory where the storage file will be downloaded.
  return mkdirp(tempLocalDir).then(() => {
    // Download file from bucket.
    return file.download({destination: tempLocalFile});
  }).then(() => {
    console.log('The file has been downloaded to', tempLocalFile);
    // Generate a thumbnail using ImageMagick.
    return spawn('convert', [tempLocalFile, '-thumbnail', `${THUMB_MAX_WIDTH}x${THUMB_MAX_HEIGHT}>`, tempLocalThumbFile], {capture: ['stdout', 'stderr']});
  }).then(() => {
    console.log('Thumbnail created at', tempLocalThumbFile);
    // Uploading the Thumbnail.
    return bucket.upload(tempLocalThumbFile, {destination: thumbFilePath, metadata: metadata});
  }).then(() => {
    console.log('Thumbnail uploaded to Storage at', thumbFilePath);
    // Once the image has been uploaded delete the local files to free up disk space.
    fs.unlinkSync(tempLocalFile);
    fs.unlinkSync(tempLocalThumbFile);
    // Get the Signed URLs for the thumbnail and original image.
    const config = {
      action: 'read',
      expires: '03-01-2500',
    };
    return Promise.all([
      thumbFile.getSignedUrl(config),
      file.getSignedUrl(config),
    ]);
  }).then((results) => {
    console.log('Got Signed URLs.');
    const thumbResult = results[0];
    const originalResult = results[1];
    const thumbFileUrl = thumbResult[0];
    const fileUrl = originalResult[0];
    // Add the URLs to the Database
    return admin.database().ref('images').push({path: fileUrl, thumbnail: thumbFileUrl});
  }).then(() => console.log('Thumbnail URLs saved to database.'));
});
