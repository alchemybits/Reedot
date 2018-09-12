import "./Products.css";
import React from "react";
import _ from 'lodash';
import LazyImage from "../LazyImage/LazyImage";
import {  BrowserRouter as Router, Route, Switch, Redirect, Link } from 'react-router-dom';

function template() {
  console.log("THIS IS THE STATE",this.state.productos);
  return (
    
 <div className="main-container section-padding">
      <div className="container">
        <div className="row">
        
          <div className="col-lg-3 col-md-12 col-xs-12 page-sidebar">
            <aside>
              
              
              {/* <!-- Categories Widget --> */}
              <div className="widget categories">
                <h4 className="widget-title">All Categories</h4>
                <ul className="categories-list">
                  <li>
                    <a href="#">
                      <i className="lni-dinner"></i>
                      Hotel & Travels <span className="category-counter">(5)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="lni-control-panel"></i>
                      Services <span className="category-counter">(8)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="lni-github"></i>
                      Pets <span className="category-counter">(2)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="lni-coffee-cup"></i>
                      Restaurants <span className="category-counter">(3)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="lni-home"></i>
                      Real Estate <span className="category-counter">(4)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="lni-pencil"></i>
                      Jobs <span className="category-counter">(5)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="lni-display"></i>
                      Electronics <span className="category-counter">(9)</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="widget">
                <h4 className="widget-title">Advertisement</h4>
                <div className="add-box">
                  <img className="img-fluid" src="assets/img/img1.jpg" alt="" />
                </div>
              </div>
            </aside>
          </div>
          <div className="col-lg-9 col-md-12 col-xs-12 page-content">
            {/* <!-- Product filter Start --> */}
            <div className="product-filter">
              <div className="short-name">
                <span>Showing (1 - 12 products of 7371 products)</span>
              </div>
              <div className="Show-item">
                <span>Show Items</span>
                <form className="woocommerce-ordering" method="post">
                  <label>
                    <select name="order" className="orderby">
                      <option selected="selected" value="menu-order">49 items</option>
                      <option value="popularity">popularity</option>
                      <option value="popularity">Average ration</option>
                      <option value="popularity">newness</option>
                      <option value="popularity">price</option>
                    </select>
                  </label>
                </form>
              </div>
              <ul className="nav nav-tabs">
                <li className="nav-item">
                  <a className="nav-link" data-toggle="tab" href="#grid-view"><i className="lni-grid"></i></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" data-toggle="tab" href="#list-view"><i className="lni-list"></i></a>
                </li>
              </ul>
            </div>
            {/*  <!-- Product filter End --> */}

            {/*  <!-- Adds wrapper Start --> */}
            <div className="adds-wrapper">
              <div className="tab-content">
                <div id="grid-view" className="tab-pane fade">
                  <div className="row">
                    
                    { _.map(this.props.productos, (producto, key) => {
			        
                  if(producto.sorry)
                    return (<h1>{producto.sorry}</h1>);
                  else
			      		 return (
			      			<div className="col-xs-12 col-sm-12 col-md-6 col-lg-6" key={key}>
			                      <div className="featured-box">
			                        <figure>
			                          <div className="icon">
			                            <i className="lni-heart"></i>
			                          </div>
			                          <a href="#"><LazyImage className="img-fluid" unloadedSrc="../assets/images/clear.png" src={producto.url} ></ LazyImage></a>
			                        </figure>
			                        <div className="feature-content">
			                          <div className="tg-product">
			                            <a href="#">{producto.categoria}-{producto.subcategoria}</a>
			                          </div>
			                          <h4><a href="ads-details.html">{producto.nombre}</a></h4>
			                          {/* <span>Last Updated: 4 hours ago</span> */}
			                          <ul className="address">
			                            <li>
			                              <a href="#"><i className="lni-map-marker"></i>{producto.city},{producto.country}</a>
			                            </li>
			                            <li>
			                              <a href="#"><i className="lni-alarm-clock"></i> 7 Jan, 10:10 pm</a>
			                            </li>
			                            <li>
			                              <a href="#"><i className="lni-user"></i> {producto.firstname} {producto.lastname}</a>
			                            </li>
			                            <li>
			                              <a href="#"><i className="lni-tag"></i> {producto.categoria}</a>
			                            </li>
			                          </ul>
			                          <div className="btn-list">
			                            <span className="btn-price" href="#">$ {producto.precio} / Per Hour</span>
			                            <Link to={"/AddDetails/"+key} className="btn btn-common" >
			                              <i className="lni-list"></i>
			                              View Details
			                            </Link>
			                          </div>
			                        </div>
			                      </div>
			                    </div>
			            
			      			
			      		);

			        })
			      }
                  </div>
                </div>
                <div id="list-view" className="tab-pane fade active show">
                  <div className="row">
                  { _.map(this.props.productos, (producto, key) => {
			        if(producto.sorry)
                    return (<h1>{producto.sorry}</h1>);
                  else
			      		return (
			      			<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" key={key}>
			                      <div className="featured-box">
			                        <figure>
			                          <div className="icon">
			                            <i className="lni-heart"></i>
			                          </div>
			                          <a href="#"><LazyImage className="img-fluid" unloadedSrc="../assets/images/loading.gif" src={producto.url} ></ LazyImage></a>
			                        </figure>
			                        <div className="feature-content">
			                          <div className="tg-product">
			                            <a href="#">{producto.categoria}-{producto.subcategoria}</a>
			                          </div>
			                          <h4><a href="ads-details.html">{producto.nombre}</a></h4>
			                          {/* <span>Last Updated: 4 hours ago</span> */}
			                          <ul className="address">
			                            <li>
			                              <a href="#"><i className="lni-map-marker"></i>{producto.city},{producto.country}</a>
			                            </li>
			                            <li>
			                              <a href="#"><i className="lni-alarm-clock"></i> 7 Jan, 10:10 pm</a>
			                            </li>
			                            <li>
			                              <a href="#"><i className="lni-user"></i> {producto.firstname} {producto.lastname}</a>
			                            </li>
			                            <li>
			                              <a href="#"><i className="lni-tag"></i> {producto.categoria}</a>
			                            </li>
			                          </ul>
			                          <div className="btn-list">
			                            <a className="btn-price" href="#">$ {producto.precio} / Per Hour</a>
			                            <Link to={"/AddDetails/"+producto.key} className="btn btn-common" >
			                              <i className="lni-list"></i>
			                              View Details
			                            </Link>
			                          </div>
			                        </div>
			                      </div>
			                    </div>
			            
			      			
			      		);

			        })
			      } 
                    
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Adds wrapper End --> */}
      
            {/* <!-- Start Pagination -->
            <div className="pagination-bar">
               <nav>
                <ul className="pagination">
                  <li className="page-item"><a className="page-link active" href="#">1</a></li>
                  <li className="page-item"><a className="page-link" href="#">2</a></li>
                  <li className="page-item"><a className="page-link" href="#">3</a></li>
                  <li className="page-item"><a className="page-link" href="#">Next</a></li>
                </ul>
              </nav>
            </div> */}
            
            
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default template;

