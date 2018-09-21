import React    from "react";
import template from "./AddDetails.jsx";
import { Route, Redirect } from 'react-router';
import { connect } from 'react-redux';
import { getThumbnails,getProductosById } from '../Actions/Actions';
import { productos,database } from '../Firebase';
import * as firebase from 'firebase';

function mapStateToProps(state) {
  //console.log("state in props from PRODUCTS =>",state);
  return {
    productoDetail: state.productoDetail
  };
}

class AddDetails extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      productos: ["0"],
      collection: [],
      loading: true,
      stripeLoading: true,
    };

    this.amount = 0;
    // onStripeUpdate must be bound or else clicking on button will produce error.
    this.onStripeUpdate = this.onStripeUpdate.bind(this);
    // binding loadStripe as a best practice, not doing so does not seem to cause error.
    this.loadStripe = this.loadStripe.bind(this);

    this.loadAdd = this.loadAdd.bind(this);

  }

  loadStripe(onload) {
        if(! window.StripeCheckout) {
            const script = document.createElement('script');
            script.onload = function () {
                console.info("Stripe script loaded");
                onload();
            };
            script.src = 'https://checkout.stripe.com/checkout.js';
            document.head.appendChild(script);
        } else {
            onload();
        }
    }

  loadAdd(e){
    this.props.getProductosById(e);
  }

  addView(e){
    let nviews = 0;
    nviews = this.props.productoDetail.views;
    
    nviews = nviews === undefined?0:nviews + 1;
    
    if(this.props.productoDetail)
      productos.child(e).update({
        views: nviews
      });
  }

  componentDidMount(){
    //this.props.getProductosById(this.props.match.params.add);
    
    if(this.props.match.params.add){
        
      this.loadAdd(this.props.match.params.add);
    }
    else{
      return <Redirect to="/Products" />;
    }

    this.loadStripe(() => {
            this.stripeHandler = window.StripeCheckout.configure({
                key: 'pk_test_XZD3wdNUWOcVHzs0euLM3eNm',
                image: 'https://stripe.com/img/documentation/checkout/marketplace.png',
                locale: 'auto',
                zipCode:false,
                billingAddress:true,
                shippingAddress:true,
                token: (token,billandAdd) => {
                    // this.setState({ loading: true });
                    // use fetch or some other AJAX library here if you dont want to use axios
                    // axios.post('/your-server-side-code', {

                    var user = firebase.auth().currentUser;
                    database.child('Payments').child(user.uid).push({token,billandAdd,"amount":this.amount});
                    console.log("stripeToken:", token);
                    // });

                }
            });

            this.amount = 0;

            this.setState({
                stripeLoading: false,
                // loading needs to be explicitly set false so component will render in 'loaded' state.
                loading: false,
            });
        });
      
      
      
  }

  componentWillUnmount() {
    this.addView(this.props.match.params.add);
    if(this.stripeHandler) {
            this.stripeHandler.close();
        }
  }

  onStripeUpdate(e) {
    this.amount = Number(e.precio);
        this.stripeHandler.open({
            name: e.nombre,
            description: e.desc,            
            allowRememberMe: true,
            amount: (Number(e.precio) * 100)
        });
        
  }

  componentWillReceiveProps(nprops){
    console.log('COMPONENT RECEVIED A NPROP',nprops.match.params.add);
    console.log('COMPONENT RECEVIED A PROP',this.props.match.params.add);
    // if(nprops.match.params.add)
      // 
  }
  
  render() {
    if(this.props.productoDetail.sorry)
    return <h1>{this.props.productoDetail.sorry}</h1>
    else{      
      return template.call(this);
    }
    
  }
}

export default connect(mapStateToProps,{ getProductosById })(AddDetails);
