import React    from "react";
import template from "./Signup.jsx";
import swal from "sweetalert2";

import * as firebase from "firebase";
import { database } from '../Firebase';

class Signup extends React.Component {



constructor(props) {
    super(props);
    this.state = { 
      name: "",
      password: "",
      email: "",
      auth: firebase.auth(),
      isActive: false

    };

     this.toast = swal.mixin({
      toast: true,
      position: 'center',
      showConfirmButton: false,
      timer: 3000
    });

    this.userLogin = this.userLogin.bind(this);
    this.toggleClass = this.toggleClass.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.register = this.register.bind(this);

  }



  register(e){

    e.preventDefault();
    const toast = this.toast;
    firebase.auth().createUserWithEmailAndPassword(this.state.email.toLowerCase(), this.state.password).then((Luser) => {

      
        
        
        // [END createwithemail]
        // callSomeFunction(); Optional
        var user = firebase.auth().currentUser;
        console.log('UIJEIEJFIW',user);
        user.updateProfile({
            displayName: this.state.name
        }).then(function() {
          
           console.log("YES");
            database.child("usuarios").child(user.uid).update({
              user: user.displayName
  
            })

            toast({
              type: 'success',
              title: 'Signed in successfully'
            })
        }, function(error) {
            
            toast({
              type: 'error',
              title: 'Something bad happened... please report this.',
              html: error
            })
        });
        console.log('USER UID',user.uid);
        

    }, function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // [START_EXCLUDE]
        if (errorCode === 'auth/weak-password') {
            swal(
              'oh OH?',
              'your password is too weak..?',
              'warning'
            );
        } else {
          toast({
            type: 'error',
            //title: 'Something bad happened... please report this.',
            title: error.message
          })
        }
        // [END_EXCLUDE]
    });
  }

  toggleClass(e){
    const container = document.querySelector('.container');

    if(container.classList.contains('active')){
      this.setState({'isActive':false});
      container.classList.remove('active');
    }
    else
    {
      this.setState({'isActive':true});
      container.classList.add('active');
    }
    
    
  }

  userLogin(e){
    e.preventDefault();
    const toast = this.toast;

    firebase.auth().signInAndRetrieveDataWithEmailAndPassword(this.state.email.toLowerCase(), this.state.password.toLowerCase())
    .then(function(user){
      toast({
        type: 'success',
        title: 'Bienvenido '+ user.user.displayName
      })
    })
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      if (errorCode === 'auth/wrong-password') {
        toast({
          type: 'error',
          title: error.message
        })
      } else {
        toast({
          type: 'error',
          title: error.message
        })
      }
      console.log(error);
    });

  }

  handleChange(event) {
    
    this.setState({[event.target.name]: event.target.value});
    //console.log("event",event.target.name);
  }
  render() {
    return template.call(this);
  }
}

export default Signup;
