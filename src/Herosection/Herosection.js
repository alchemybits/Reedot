import React    from "react";
import template from "./Herosection.jsx";
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { getProductos,getThumbnails,getFeaturedProductos,getRequests } from '../Actions/Actions';



function mapStateToProps(state) {
  //console.log("state in props from PRODUCTS =>",state);
  return {
    productos: state.productos
  };
}

class Herosection extends React.Component {
  constructor(){
    super();
    
    this.state = {
      productos: ["0"],
      collection: []
    };

    this.searchQuery = this.searchQuery.bind(this);
    this.goto = this.goto.bind(this);
  }

  componentDidMount(){
    
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ productos: nextProps.productos });  
  }

  componentWillMount() {
    this.props.getProductos();
  }

  goto(e){
    e.preventDefault();
    let catval = this.cat.value;
    let locval = this.location.value;
    let query = "";
    if(document.getElementById("the-input").value)
      query = document.getElementById("the-input").value;

    if(this.prod.checked)
      this.props.history.push('/products/?cat='+catval+'&loc='+locval+'&q='+query);
    else
      this.props.history.push('/requests/?cat='+catval+'&loc='+locval+'&q='+query);

      


  }

  searchQuery(e){
    e.preventDefault();
    let catval = this.cat.value;
    let locval = this.location.value;
    

    

    const cat = this.props.match.params.cat;
    const location = this.props.match.params.location;
    this.props.getProductos(this.cat.value,this.location.value,document.getElementById("the-input").value);
    this.props.getRequests(this.cat.value,this.location.value,document.getElementById("the-input").value);
  }

  render() {
    const { match, location, history } = this.props;
    
    
    this.mainTitle = () =>{

      if(location.pathname.split('/')[1].toLowerCase() == 'requests' || location.pathname.split('/')[1].toLowerCase() == 'products')
        return (
          <div className="contentBlock">

            <br />
            <br />


            <div className="search-bar">

              <fieldset>
                <form className="search-form" onSubmit={this.searchQuery.bind(this)}>
                  <div className="form-group tg-inputwithicon">
                    <i className="lni-tag"></i>
                    <input type="text" name="customword" className="form-control" placeholder="What are you looking for" id="the-input" />
                  </div>
                  <div className="form-group tg-inputwithicon">
                    <i className="lni-map-marker"></i>
                    <div className="tg-select">
                      <select ref={el => this.location = el}>
                        <option value="">All Locations</option>
                        <option value="Honduras">Honduras</option>
                        <option value="Canada">Canada</option>
                        <option value="">Washington</option>
                        <option value="">Birmingham</option>
                        <option value="">Chicago</option>
                        <option value="">Phoenix</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group tg-inputwithicon">
                    <i className="lni-layers"></i>
                    <div className="tg-select">
                      <select ref={el => this.cat = el}>
                        <option value="">Select Categories</option>
                        <option value="Mobiles">Mobiles</option>
                        <option value="Electronics">Electronics</option>
                        <option value="Training">Training</option>
                        <option value="RealEstate">Real Estate</option>
                        <option value="Services">Services</option>
                        <option value="Training">Training</option>
                        <option value="Vehicles">Vehicles</option>
                      </select>
                    </div>
                  </div>
                  <button className="btn btn-common" type="submit"><i className="lni-search"></i></button>
                </form>
              </fieldset>
            </div>
          </div>
        )
      else if (location.pathname.split('/')[1].toLowerCase() == 'home' || location.pathname.split('/')[1].toLowerCase() == '' )
        return (<div className="contents">
        <h1 className="head-title">Welcome to <span className="year">Reedot</span></h1>
        <p>Buy And Sell Everything From Used Cars To Mobile Phones And Computers, <br /> Or Search For Property, Jobs And More</p>
        
        <div className="form">
    
          <form>
            <fieldset className="form__options">
              <legend className="form__question">Where to search?
        </legend>
              <p className="form__answer"> 
                <input type="radio" name="match" id="match_1" value="requests" ref={el => this.req = el}  /> 
                <label htmlFor="match_1">
                  
                  Requests
                </label> 
              </p>
              
              <p className="form__answer"> 
                <input type="radio" name="match" id="match_2" value="products" ref={el => this.prod = el} defaultChecked /> 
                <label htmlFor="match_2">
                  
                  Products
                </label> 
              </p>
              
              
              
            </fieldset>
            
          </form>
        </div>
        
        <div className="search-bar">
          <fieldset>
            <form className="search-form" onSubmit={this.goto}>
              <div className="form-group tg-inputwithicon">
                <i className="lni-tag"></i>
                <input type="text" name="customword" className="form-control" placeholder="What are you looking for" id="the-input" />
                  </div>
                  <div className="form-group tg-inputwithicon">
                    <i className="lni-map-marker"></i>
                    <div className="tg-select">
                      <select ref={el => this.location = el}>
                        <option value="">All Locations</option>
                        <option value="Honduras">Honduras</option>
                        <option value="Canada">Canada</option>
                        <option value="">Washington</option>
                        <option value="">Birmingham</option>
                        <option value="">Chicago</option>
                        <option value="">Phoenix</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group tg-inputwithicon">
                    <i className="lni-layers"></i>
                    <div className="tg-select">
                      <select ref={el => this.cat = el}>
                        <option value="">Select Categories</option>
                        <option value="Mobiles">Mobiles</option>
                        <option value="Electronics">Electronics</option>
                        <option value="Training">Training</option>
                        <option value="RealEstate">Real Estate</option>
                        <option value="Services">Services</option>
                        <option value="Training">Training</option>
                        <option value="Vehicles">Vehicles</option>
                      </select>
                </div>
              </div>
              
              <button className="btn btn-common" type="submit"><i className="lni-search"></i></button>
            </form>
          </fieldset>
        </div>
      </div>)


    }

   
      return template.call(this);
    
  }
}

export default withRouter(connect(mapStateToProps,{ getProductos,getRequests })(Herosection));
