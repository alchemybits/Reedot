import React    from "react";
import template from "./Herosection.jsx";
import { withRouter } from 'react-router';

class Herosection extends React.Component {
  render() {
    const { match, location, history } = this.props;
    
    this.mainTitle = () =>{
      if(location.pathname.toLowerCase() == '/requests' || location.pathname.toLowerCase() == '/products')
        return (
          <div className="contentBlock">
            <div className="search-bar">
              <fieldset>
                <form className="search-form">
                  <div className="form-group tg-inputwithicon">
                    <i className="lni-tag"></i>
                    <input type="text" name="customword" className="form-control" placeholder="What are you looking for" />
                  </div>
                  <div className="form-group tg-inputwithicon">
                    <i className="lni-map-marker"></i>
                    <div className="tg-select">
                      <select>
                        <option value="none">All Locations</option>
                        <option value="none">New York</option>
                        <option value="none">California</option>
                        <option value="none">Washington</option>
                        <option value="none">Birmingham</option>
                        <option value="none">Chicago</option>
                        <option value="none">Phoenix</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group tg-inputwithicon">
                    <i className="lni-layers"></i>
                    <div className="tg-select">
                      <select>
                        <option value="none">Select Categories</option>
                        <option value="none">Mobiles</option>
                        <option value="none">Electronics</option>
                        <option value="none">Training</option>
                        <option value="none">Real Estate</option>
                        <option value="none">Services</option>
                        <option value="none">Training</option>
                        <option value="none">Vehicles</option>
                      </select>
                    </div>
                  </div>
                  <button className="btn btn-common" type="button"><i className="lni-search"></i></button>
                </form>
              </fieldset>
            </div>
          </div>
        )
      else
        return (<div className="contents">
        <h1 className="head-title">Welcome to <span className="year">Reedot</span></h1>
        <p>Buy And Sell Everything From Used Cars To Mobile Phones And Computers, <br /> Or Search For Property, Jobs And More</p>
        <div className="search-bar">
          <fieldset>
            <form className="search-form">
              <div className="form-group tg-inputwithicon">
                <i className="lni-tag"></i>
                <input type="text" name="customword" className="form-control" placeholder="What are you looking for" />
              </div>
              <div className="form-group tg-inputwithicon">
                <i className="lni-map-marker"></i>
                <div className="tg-select">
                  <select>
                    <option value="none">All Locations</option>
                    <option value="none">New York</option>
                    <option value="none">California</option>
                    <option value="none">Washington</option>
                    <option value="none">Birmingham</option>
                    <option value="none">Chicago</option>
                    <option value="none">Phoenix</option>
                  </select>
                </div>
              </div>
              <div className="form-group tg-inputwithicon">
                <i className="lni-layers"></i>
                <div className="tg-select">
                  <select>
                    <option value="none">Select Categories</option>
                    <option value="none">Mobiles</option>
                    <option value="none">Electronics</option>
                    <option value="none">Training</option>
                    <option value="none">Real Estate</option>
                    <option value="none">Services</option>
                    <option value="none">Training</option>
                    <option value="none">Vehicles</option>
                  </select>
                </div>
              </div>
              <button className="btn btn-common" type="button"><i className="lni-search"></i></button>
            </form>
          </fieldset>
        </div>
      </div>)


    }

    if( location.pathname.toLowerCase() == '/Home'.toLowerCase() || location.pathname.toLowerCase() == '/Requests'.toLowerCase() || location.pathname.toLowerCase() == '/products'.toLowerCase() || location.pathname.toLowerCase() == '/App'.toLowerCase() )
      return template.call(this);
    else
      return (
        <div class="page-header" style={{background:'url(assets/img/banner1.jpg)'}}>
      <div class="container">
        <div class="row">         
          <div class="col-md-12">
            <div class="breadcrumb-wrapper">
              <h2 class="product-title"> {location.pathname}</h2>
              <ol class="breadcrumb">
                <li><a href="index.html">Home </a></li>
                <li class="current">{location.pathname}</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
      )
  }
}

export default withRouter(Herosection);
