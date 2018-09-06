import React    from "react";
import template from "./Herosection.jsx";
import { withRouter } from 'react-router';

class Herosection extends React.Component {
  render() {
    const { match, location, history } = this.props;

    if( location.pathname.toLowerCase() == '/Home'.toLowerCase() || location.pathname.toLowerCase() == '/App'.toLowerCase() )
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
