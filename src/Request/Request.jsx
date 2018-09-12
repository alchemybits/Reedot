import "./Request.css";
import React from "react";
import _ from 'lodash';
import PlaceholderComponent from "../PlaceholderComponent/PlaceholderComponent";
import LazyLoad from 'react-lazyload';

import {  BrowserRouter as Router, Route, Switch, Redirect, Link } from 'react-router-dom';

function template() {
  
  return (
    
 <div class="main-container section-padding">

      <div class="container">
      <h1>REQUESTS</h1>
        <div class="row">
        
          <div class="col-lg-3 col-md-12 col-xs-12 page-sidebar">
            <aside>
              
              
              {/* <!-- Categories Widget --> */}
              <div class="widget categories">
                <h4 class="widget-title">All Categories</h4>
                <ul class="categories-list">
                  <li>
                    <a href="#">
                      <i class="lni-dinner"></i>
                      Hotel & Travels <span class="category-counter">(5)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="lni-control-panel"></i>
                      Services <span class="category-counter">(8)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="lni-github"></i>
                      Pets <span class="category-counter">(2)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="lni-coffee-cup"></i>
                      Restaurants <span class="category-counter">(3)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="lni-home"></i>
                      Real Estate <span class="category-counter">(4)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="lni-pencil"></i>
                      Jobs <span class="category-counter">(5)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="lni-display"></i>
                      Electronics <span class="category-counter">(9)</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="widget">
                <h4 class="widget-title">Advertisement</h4>
                <div class="add-box">
                  <img class="img-fluid" src="assets/img/img1.jpg" alt="" />
                </div>
              </div>
            </aside>
          </div>
          <div class="col-lg-9 col-md-12 col-xs-12 page-content">
            {/* <!-- Product filter Start --> */}
            <div class="product-filter">
              <div class="short-name">
                <span>Showing (1 - 12 products of 7371 products)</span>
              </div>
              <div class="Show-item">
                <span>Show Items</span>
                <form class="woocommerce-ordering" method="post">
                  <label>
                    <select name="order" class="orderby">
                      <option selected="selected" value="menu-order">49 items</option>
                      <option value="popularity">popularity</option>
                      <option value="popularity">Average ration</option>
                      <option value="popularity">newness</option>
                      <option value="popularity">price</option>
                    </select>
                  </label>
                </form>
              </div>
              <ul class="nav nav-tabs">
                <li class="nav-item">
                  <a class="nav-link" data-toggle="tab" href="#grid-view"><i class="lni-grid"></i></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" data-toggle="tab" href="#list-view"><i class="lni-list"></i></a>
                </li>
              </ul>
            </div>
            {/*  <!-- Product filter End --> */}

            {/*  <!-- Adds wrapper Start --> */}
            <div class="adds-wrapper">
              <div class="tab-content">
                <div id="grid-view" class="tab-pane fade">
                  <div class="row">
                    
                    { _.map(this.props.requests, (producto, key) => {
			        
                  if(producto.sorry)
                    return (<h1>{producto.sorry}</h1>);
                  else
			      		 return (
			      			<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6" key={key}>
			                      <div class="featured-box">
			                        <figure>
			                          <div class="icon">
			                            <i class="lni-heart"></i>
			                          </div>
			                          <a href="#">
                                    <LazyLoad height={200} offset={100} placeholder={<PlaceholderComponent />}>
                                      <img className="img-fluid"  src={producto.url} />
                                    </LazyLoad>   
                                </a>
			                        </figure>
			                        <div class="feature-content">
			                          <div class="tg-product">
			                            <a href="#">{producto.categoria}-{producto.subcategoria}</a>
			                          </div>
			                          <h4><a href="ads-details.html">{producto.nombre}</a></h4>
			                          {/* <span>Last Updated: 4 hours ago</span> */}
			                          <ul class="address">
			                            <li>
			                              <a href="#"><i class="lni-map-marker"></i>{producto.city},{producto.country}</a>
			                            </li>
			                            <li>
			                              <a href="#"><i class="lni-alarm-clock"></i> 7 Jan, 10:10 pm</a>
			                            </li>
			                            <li>
			                              <a href="#"><i class="lni-user"></i> {producto.firstname} {producto.lastname}</a>
			                            </li>
			                            <li>
			                              <a href="#"><i class="lni-tag"></i> {producto.categoria}</a>
			                            </li>
			                          </ul>
			                          <div class="btn-list">
			                            <a class="btn-price" href="#">$ {producto.precio} / Per Hour</a>
			                            <Link to={"/RequestDetail/"+producto.key} className="btn btn-common" >
			                              <i class="lni-list"></i>
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
                <div id="list-view" class="tab-pane fade active show">
                  <div class="row">
                  { _.map(this.props.requests, (producto, key) => {
			        if(producto.sorry)
                    return (<h1>{producto.sorry}</h1>);
                  else
			      		return (
			      			<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" key={key}>
			                      <div class="featured-box">
			                        <figure>
			                          <div class="icon">
			                            <i class="lni-heart"></i>
			                          </div>
			                          <a href="#">
                                  <LazyLoad height={200} offset={100} placeholder={<PlaceholderComponent />}>                                  
                                    <img className="img-fluid"  src={producto.url} />
                                  </LazyLoad>   
                                </a>
			                        </figure>
			                        <div class="feature-content">
			                          <div class="tg-product">
			                            <a href="#">{producto.categoria}-{producto.subcategoria}</a>
			                          </div>
			                          <h4><a href="ads-details.html">{producto.nombre}</a></h4>
			                          {/* <span>Last Updated: 4 hours ago</span> */}
			                          <ul class="address">
			                            <li>
			                              <a href="#"><i class="lni-map-marker"></i>{producto.city},{producto.country}</a>
			                            </li>
			                            <li>
			                              <a href="#"><i class="lni-alarm-clock"></i> 7 Jan, 10:10 pm</a>
			                            </li>
			                            <li>
			                              <a href="#"><i class="lni-user"></i> {producto.firstname} {producto.lastname}</a>
			                            </li>
			                            <li>
			                              <a href="#"><i class="lni-tag"></i> {producto.categoria}</a>
			                            </li>
			                          </ul>
			                          <div class="btn-list">
			                            <a class="btn-price" href="#">$ {producto.precio} / Per Hour</a>
			                            <Link to={"/RequestDetail/"+producto.key} className="btn btn-common" >
			                              <i class="lni-list"></i>
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
            <div class="pagination-bar">
               <nav>
                <ul class="pagination">
                  <li class="page-item"><a class="page-link active" href="#">1</a></li>
                  <li class="page-item"><a class="page-link" href="#">2</a></li>
                  <li class="page-item"><a class="page-link" href="#">3</a></li>
                  <li class="page-item"><a class="page-link" href="#">Next</a></li>
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
