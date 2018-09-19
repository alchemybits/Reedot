import React    from "react";
import template from "./Products.jsx";
import { connect } from 'react-redux';
import { getProductos,getThumbnails,getFeaturedProductos } from '../Actions/Actions';



function mapStateToProps(state) {
  //console.log("state in props from PRODUCTS =>",state);
  return {
    productos: state.productos
  };
}

class Products extends React.Component {
	constructor(){
    super();
    
    this.state = {
      productos: ["0"],
      collection: [],
      loading: true,
      stripeLoading: true,
    };
    // onStripeUpdate must be bound or else clicking on button will produce error.
    this.onStripeUpdate = this.onStripeUpdate.bind(this);
    // binding loadStripe as a best practice, not doing so does not seem to cause error.
    this.loadStripe = this.loadStripe.bind(this);
    this.searchQuery = this.searchQuery.bind(this);
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

  
  
  getThumbnail(s){

		let arre = [];
		let tbs = Object.values(this.props.thumbnails);
		let tbn = ""
		s = s.substring(0, s.indexOf('?'));
		var n = s.lastIndexOf('/');
		s = s.substring(n + 1);

		tbs.map(tb =>{
			if(tb.path.includes(s)){
				tbn = tb.thumbnail;
			}
			

		})

		return tbn;


  }  

  componentDidMount(){
    this.searchQuery();
    this.loadStripe(() => {
            this.stripeHandler = window.StripeCheckout.configure({
                key: 'pk_test_XZD3wdNUWOcVHzs0euLM3eNm',
                image: 'https://stripe.com/img/documentation/checkout/marketplace.png',
                locale: 'auto',
                token: (token) => {
                    // this.setState({ loading: true });
                    // use fetch or some other AJAX library here if you dont want to use axios
                    // axios.post('/your-server-side-code', {
                    console.log("stripeToken:", token.id);
                    // });

                }
            });

            this.setState({
                stripeLoading: false,
                // loading needs to be explicitly set false so component will render in 'loaded' state.
                loading: false,
            });
        });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ productos: nextProps.productos });  
  }

  componentWillMount() {
    this.props.getProductos();

  }

  componentWillUnmount() {
        if(this.stripeHandler) {
            this.stripeHandler.close();
        }
    }

  onStripeUpdate(e) {
        this.stripeHandler.open({
            name: e.nombre,
            description: e.desc,            
            allowRememberMe: true,
            amount: (Number(e.precio) * 100)
        });
        
  }

  searchQuery(e){
  	if(e)
    	e.preventDefault();
    //console.log('[][][][][][][][][][[||||||||||||||',this.props.match.params.cat);
    if(this.props.match.params.cat === undefined)
	    if(this.props.location.search){
	    	let arr,cat,loc,q;
	    	arr = this.props.location.search.split("&");

	    	arr.forEach((item,index) => {
	    		let type,str ;
	    		type = item.split("=")[0];
	    		str = item.split("=")[1];
	    		switch(type){
	    			case "?cat" : {cat = str; break;}
	    			case "loc" : {loc = str; break;}
	    			case "q" : {q = str; break;}
	    		}
	    	})
	    	//console.log("SEARCH ######################",{cat,loc,q});
	    	this.props.getProductos(cat,loc,q);
	    }
	    
    else{
    	const cat = this.props.match.params.cat;
	    const subcat = this.props.match.params.location;
	    this.props.getProductos(cat,subcat,"");

    }

    
  }
  render() {
    return template.call(this);
  }
}

export default connect(mapStateToProps,{ getProductos })(Products);
