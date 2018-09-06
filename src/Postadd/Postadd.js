import React    from "react";
import template from "./Postadd.jsx";
import * as firebase from 'firebase';
import { connect } from 'react-redux';
import { productos } from '../Firebase';
import swal from "sweetalert2";

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

class Postadd extends React.Component {


	constructor(props)
	{
		super();

		this.State = {
			user: ""
		}

		this.change = this.change.bind(this);
    	this.newProduct = this.newProduct.bind(this);
	}

	componentDidMount(){
		
	}

	change(e){
    

    this.file = e.target.files[0];
    //document.getElementById('my-input-id').disabled = false;
    //console.log("====change===",this.file);

   
    
  }

	newProduct(event){
    event.preventDefault();
    //console.log(this.file );
    const NAME = this.nombre.value;
    const PRICE = this.precio.value;
    const DESC = this.description.value;
    const CAT = this.cat.value;
    const SUBCAT = "this.subcat.value";

    const pCon = document.querySelector(".progressContainer");
    pCon.style.display = "block";
    
    const pbar = document.querySelector("#progressBar");
    const size = document.querySelector("#size");
    const toast = document.querySelector(".toast");
    //document.getElementById('my-input-id').disabled = true;
    const name = document.getElementById('name');
    const price = document.getElementById('price');
    const description = document.getElementById('desc');
    const pic = document.getElementById('pic');


    name.value = "";
    price.value = "";
    description.value = "";
    
    



    
    // wrap.setAttribute('data-text',  this.file.name.replace(/.*(\/|\\)/, ''));
    
    let storageRef = firebase.storage().ref('productos/' + this.file.name);

    let task = storageRef.put(this.file);

    function formatBytes(a,b){if(0==a)return"0 Bytes";var c=1024,d=b||2,e=["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"],f=Math.floor(Math.log(a)/Math.log(c));return parseFloat((a/Math.pow(c,f)).toFixed(d))+" "+e[f]}

   

    task.on('state_changed',
      function progress(snapshot) {
        let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        size.innerHTML = formatBytes(snapshot.totalBytes);
        pbar.value = percentage;
      },
      function error(err){
        alert("oops, something happend!",err);
      },
      function complete(pic){
        productos.push({
          nombre: NAME,
          precio: PRICE,
          desc: DESC,
          url: task.snapshot.downloadURL,
          categoria: CAT,
          subcategoria: SUBCAT
        });
        const toast = swal.mixin({
          toast: true,
          position: 'center',
          showConfirmButton: false,
          timer: 3000
        });
        
        toast({
          type: 'success',
          title: 'Product uploaded!'
        })
        pCon.style.display = "none";
        // toast.classList.add("on");

      }
    )

    

  }
	


  render() {
    return template.call(this);
  }
}

export default Postadd;
