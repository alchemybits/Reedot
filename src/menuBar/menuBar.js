import React    from "react";
import M    from "materialize-css";
import template from "./menuBar.jsx";
import * as firebase from 'firebase';
import swal from 'sweetalert2';


class menuBar extends React.Component {
	state = {
		login: '',
		name: "Roque"
	};

	constructor(props) {
		super(props);
		

	     this.toast = swal.mixin({
	      toast: true,
	      position: 'center',
	      showConfirmButton: false,
	      timer: 3000
	    });
	 }


	signOut(e) {
	    e.preventDefault();
	    firebase.auth().signOut().then(function() {
	      // Sign-out successful.
	      swal({title:'Have a nice day!',toast: true,position:"center",showConfirmButton: false,timer: 2000,});
	    }).catch(function(error) {
	      // An error happened.
	      swal("Yikes somethng HAPPEND","error");
	    });
	  }

	componentDidMount(){
		var elem = document.querySelector('.dropdown-trigger');
			var instance = M.Dropdown.init(elem);
			
  			
	}

  render() {
    return template.call(this);
  }
}

export default menuBar;
