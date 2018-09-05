import React    from "react";
import M    from "materialize-css";
import template from "./menuBar.jsx";
import * as firebase from 'firebase';
import swal from 'sweetalert2';


class menuBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			logged: firebase.auth(),
			name: "Roque"
		};

	     this.toast = swal.mixin({
	      toast: true,
	      position: 'bottom-end',
	      showConfirmButton: false,
	      timer: 3000
	    });
	 }


	signOut(e) {
	    e.preventDefault();
	    firebase.auth().signOut().then(function() {
	      // Sign-out successful.
	      swal({title:'Have a nice day!',toast: true,position:"bottom-end",showConfirmButton: false,timer: 2000,});
	    }).catch(function(error) {
	      // An error happened.
	      swal("Yikes somethng HAPPEND","error");
	    });
	  }

	componentDidMount(){
		var elem = document.querySelector('.dropdown-trigger');
  		var instance = M.Dropdown.init(elem);
  		console.log(instance);

  		firebase.auth().onAuthStateChanged(function(user) {
		  if (user) {
		    //swal("logged");
		  } else {
		    //swal("NOT logged");
		  }
		});
  			
	}

  render() {
    return template.call(this);
  }
}

export default menuBar;
