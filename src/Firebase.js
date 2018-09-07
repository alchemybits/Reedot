 import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyDZY05NIXF9QOrIVwcjILZWmJwXSPYPxH4",
    authDomain: "reedot-ae90a.firebaseapp.com",
    databaseURL: "https://reedot-ae90a.firebaseio.com",
    projectId: "reedot-ae90a",
    storageBucket: "reedot-ae90a.appspot.com",
    messagingSenderId: "893942789831"
  };
  firebase.initializeApp(config);

  export const database = firebase.database().ref('/');
  export const productos = firebase.database().ref('Productos/');
  export const Users = firebase.database().ref('usuarios/');

