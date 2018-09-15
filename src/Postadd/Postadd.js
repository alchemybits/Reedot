import React    from "react";
import template from "./Postadd.jsx";
import * as firebase from 'firebase';
import { connect } from 'react-redux';
import { productos,Users } from '../Firebase';
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
      this.checkInputs = this.checkInputs.bind(this);
	}

	componentDidMount(){
		
	}

	change(e){
    

    this.file = e.target.files[0];
    //document.getElementById('my-input-id').disabled = false;
    //console.log("====change===",this.file);

   
    
  }
  checkInputs(e){
    e.preventDefault();    
    let ans;
    const toast = swal.mixin({
      toast: true,
      position: 'center',
      showConfirmButton: false,
      timer: 3000
    });



    

    

    if(
         this.nombre.value 
      && this.precio.value
      && this.description.value
      && this.cat.value
      && this.firstname.value
      && this.lastname.value
      && this.phone.value
      && this.addressa.value
      && this.addressb.value
      && this.country.value
      && this.statep.value
      && this.city.value
      && this.file

      ){  
      console.log(this.nombre.value);
        ans=true;
      }else{
        ans=false;        
        
        toast({
              type: 'error',
              title: 'all inputs must be filled! including a picture!',
              position:'center',
              timer:2000
            })
      }
      

      if(ans)
        this.newProduct(e);




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

    let negotiable = false;
    if(this.negotiable){
      negotiable = this.negotiable.checked;
    }
    

		const vfirstname = this.firstname.value;
		const vlastname = this.lastname.value;
		const vphone = this.phone.value;
		const vaddressa = this.addressa.value;
		const vaddressb = this.addressb.value;
		const vcountry = this.country.value;
		const vstate = this.statep.value;
    const vcity = this.city.value;
    
    var currentdate = new Date(); 
    var datetime = currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();



    
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
        const test = productos.push({
          nombre: NAME,
          precio: PRICE,
          desc: DESC,
          url: task.snapshot.downloadURL,
          categoria: CAT,          
          firstname :  vfirstname,
          lastname : vlastname,
          phone : vphone,
          addressa : vaddressa,
          addressb : vaddressb,
          country : vcountry,
          state : vstate,
          city: vcity,
          negotiable: negotiable,
          dateAdded: datetime
          
        });

        var user = firebase.auth().currentUser;

        Users.child(user.uid).update({
          name: vfirstname

        })

        Users.child(user.uid).child('posts').child(test.ref.key).update({
          name: NAME
        })

        

        // Users.push({
        //   user: this.props.user
        // })


        
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
