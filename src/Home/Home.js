import React    from "react";
import * as firebase from 'firebase';
import {} from '../Firebase.js';
import _ from 'lodash';
import swal from 'sweetalert2';



import "./Home.css";

import { connect } from 'react-redux';

import { getPartidos } from '../Actions/torneoActions';
import { Field, reduxForm, reset } from 'redux-form';
import MenuBar from "../menuBar/menuBar";

function mapStateToProps(state) {
  return {
    torneos: state.torneos
  };
}


class Home extends React.Component {
	constructor(){
		super();

		this.increment = this.increment.bind(this);
	}

	increment() {
		this.props.dispatch({ type: 'INCREMENT' });
	}

	signOut(e) {
	    e.preventDefault();
	    firebase.auth().signOut().then(function() {
	      // Sign-out successful.
	      swal({title:'Have a nice day!',toast: true,position:"bottom-end",showConfirmButton: false,timer: 2000,});
	    }).catch(function(error) {
	      // An error happened.
	      swal("Yikes somethng HAPPEND","error");
	    });
	  }

	componentDidMount(){
		var user = firebase.auth().currentUser;
		if (user != null) {
		  user.providerData.forEach(function (profile) {
		    console.log(user);
		  });
		}
	}

	componentWillMount() {
		this.props.getPartidos();
	}

  render() {
    return (
  	
    <div className="home">
		
    {/* <!-- Trending Categories Section Start --> */}
    <section class="trending-cat section-padding">
      <div id="root"></div>
      <div class="container">
        <h1 class="section-title">Product Categories</h1>
        <div class="row">
          <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">
            <a href="/category">
              <div class="box">
                <div class="icon">
                  <img class="img-fluid" src="assets/img/category/img-1.png" alt="" />
                </div>
                <h4>Vehicle</h4>
                <strong>189 Ads</strong>
              </div>
            </a>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">
            <a href="/category">
              <div class="box">
                <div class="icon">
                  <img class="img-fluid" src="assets/img/category/img-2.png" alt="" />
                </div>
                <h4>Laptops</h4>
                <strong>255 Ads</strong>
              </div>
            </a>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">
            <a href="/category">
              <div class="box">
                <div class="icon">
                  <img class="img-fluid" src="assets/img/category/img-3.png" alt="" />
                </div>
                <h4>Mobiles</h4>
                <strong>127 Ads</strong>
              </div>
            </a>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">
            <a href="/category">
              <div class="box">
                <div class="icon">
                  <img class="img-fluid" src="assets/img/category/img-4.png" alt="" />
                </div>
                <h4>Electronics</h4>
                <strong>69 Ads</strong>
              </div>
            </a>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">
            <a href="/category">
              <div class="box">
                <div class="icon">
                  <img class="img-fluid" src="assets/img/category/img-5.png" alt="" />
                </div>
                <h4>Computer</h4>
                <strong>172 Ads</strong>
              </div>
            </a>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">
            <a href="/category">
              <div class="box">
                <div class="icon">
                  <img class="img-fluid" src="assets/img/category/img-6.png" alt="" />
                </div>
                <h4>Real Estate</h4>
                <strong>150 Ads</strong>
              </div>
            </a>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">
            <a href="/category">
              <div class="box">
                <div class="icon">
                  <img class="img-fluid" src="assets/img/category/img-7.png" alt="" />
                </div>
                <h4>Home Appliances</h4>
                <strong>249 Ads</strong>
              </div>
            </a>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">
            <a href="/category">
              <div class="box">
                <div class="icon">
                  <img class="img-fluid" src="assets/img/category/img-8.png" alt="" />
                </div>
                <h4>Jobs</h4>
                <strong>14 9Ads</strong>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
    {/* <!-- Trending Categories Section End --> */}

    {/* <!-- Featured Section Start --> */}
    <section class="featured section-padding">
      <div class="container">
        <h1 class="section-title">Latest Products</h1>
        <div class="row">
          <div class="col-xs-6 col-sm-6 col-md-6 col-lg-4">
            <div class="featured-box">
              <figure>
                <div class="icon">
                  <i class="lni-heart"></i>
                </div>
                <a href="#"><img class="img-fluid" src="assets/img/featured/img-12.jpg" alt="" /></a>
              </figure>
              <div class="feature-content">
                <div class="tg-product">
                  <a href="#">Furnitures > Office</a>
                </div>
                <h4><a href="ads-details.html">Office Furnitures</a></h4>
                <span>Last Updated: 5 hours ago</span>
                <ul class="address">
                  <li>
                    <a href="#"><i class="lni-map-marker"></i> New York</a>
                  </li>
                  <li>
                    <a href="#"><i class="lni-alarm-clock"></i> 17 Mar, 8:30 pm</a>
                  </li>
                  <li>
                    <a href="#"><i class="lni-user"></i> David Givens</a>
                  </li>
                  <li>
                    <a href="#"><i class="lni-package"></i> Used</a>
                  </li>
                </ul>
                <div class="btn-list">
                  <a class="btn-price" href="#">$ 1280</a>
                  <a class="btn btn-common" href="ads-details.html">
                    <i class="lni-list"></i>
                    View Details
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xs-6 col-sm-6 col-md-6 col-lg-4">
            <div class="featured-box">
              <figure>
                <div class="icon">
                  <i class="lni-heart"></i>
                </div>
                <a href="#"><img class="img-fluid" src="assets/img/featured/img2.jpg" alt="" /></a>
              </figure>
              <div class="feature-content">
                <div class="tg-product">
                  <a href="#">Loptop > Accessories</a>
                </div>
                <h4><a href="ads-details.html">Fresh Macbook Pro 2017</a></h4>
                <span>Last Updated: 8 hours ago</span>
                <ul class="address">
                  <li>
                    <a href="#"><i class="lni-map-marker"></i> New York</a>
                  </li>
                  <li>
                    <a href="#"><i class="lni-alarm-clock"></i> 7 Mar, 10:10 pm</a>
                  </li>
                  <li>
                    <a href="#"><i class="lni-user"></i> John Smith</a>
                  </li>
                  <li>
                    <a href="#"><i class="lni-package"></i> Used</a>
                  </li>
                </ul>
                <div class="btn-list">
                  <a class="btn-price" href="#">$ 1100</a>
                  <a class="btn btn-common" href="ads-details.html">
                    <i class="lni-list"></i>
                    View Details
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xs-6 col-sm-6 col-md-6 col-lg-4">
            <div class="featured-box">
              <figure>
                <div class="icon">
                  <i class="lni-heart"></i>
                </div>
                <a href="#"><img class="img-fluid" src="assets/img/featured/img-11.jpg" alt="" /></a>
              </figure>
              <div class="feature-content">
                <div class="tg-product">
                  <a href="#">Electronics > Naturial</a>
                </div>
                <h4><a href="ads-details.html">Canon Photography Camera</a></h4>
                <span>Last Updated: 4 hours ago</span>
                <ul class="address">
                  <li>
                    <a href="#"><i class="lni-map-marker"></i> Delaware</a>
                  </li>
                  <li>
                    <a href="#"><i class="lni-alarm-clock"></i> 7 Feb, 6:10 pm</a>
                  </li>
                  <li>
                    <a href="#"><i class="lni-user"></i> Justyna M.</a>
                  </li>
                  <li>
                    <a href="#"><i class="lni-package"></i> Used</a>
                  </li>
                </ul>
                <div class="btn-list">
                  <a class="btn-price" href="#">$ 205</a>
                  <a class="btn btn-common" href="ads-details.html">
                    <i class="lni-list"></i>
                    View Details
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xs-6 col-sm-6 col-md-6 col-lg-4">
            <div class="featured-box">
              <figure>
                <div class="icon">
                  <i class="lni-heart"></i>
                </div>
                <a href="#"><img class="img-fluid" src="assets/img/featured/img1.jpg" alt="" /></a>
              </figure>
              <div class="feature-content">
                <div class="tg-product">
                  <a href="#">Mobiles > Accessories</a>
                </div>
                <h4><a href="ads-details.html">Apple iPhone X</a></h4>
                <span>Last Updated: 13 hours ago</span>
                <ul class="address">
                  <li>
                    <a href="#"><i class="lni-map-marker"></i> Albama</a>
                  </li>
                  <li>
                    <a href="#"><i class="lni-alarm-clock"></i> 3 Jan, 9:05 pm</a>
                  </li>
                  <li>
                    <a href="#"><i class="lni-user"></i> Mh Arman</a>
                  </li>
                  <li>
                    <a href="#"><i class="lni-package"></i> Brand New</a>
                  </li>
                </ul>
                <div class="btn-list">
                  <a class="btn-price" href="#">$ 799</a>
                  <a class="btn btn-common" href="ads-details.html">
                    <i class="lni-list"></i>
                    View Details
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xs-6 col-sm-6 col-md-6 col-lg-4">
            <div class="featured-box">
              <figure>
                <div class="icon">
                  <i class="lni-heart"></i>
                </div>
                <a href="#"><img class="img-fluid" src="assets/img/featured/img-09.jpg" alt="" /></a>
              </figure>
              <div class="feature-content">
                <div class="tg-product">
                  <a href="#">Loptop > Accessories</a>
                </div>
                <h4><a href="ads-details.html">Amazing Room for Rent</a></h4>
                <span>Last Updated: 4 hours ago</span>
                <ul class="address">
                  <li>
                    <a href="#"><i class="lni-map-marker"></i> Chicago</a>
                  </li>
                  <li>
                    <a href="#"><i class="lni-alarm-clock"></i> 1 Jan, 7:00 pm</a>
                  </li>
                  <li>
                    <a href="#"><i class="lni-user"></i> Elon Musk</a>
                  </li>
                  <li>
                    <a href="#"><i class="lni-package"></i> N/A</a>
                  </li>
                </ul>
                <div class="btn-list">
                  <a class="btn-price" href="#">$ 250</a>
                  <a class="btn btn-common" href="ads-details.html">
                    <i class="lni-list"></i>
                    View Details
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xs-6 col-sm-6 col-md-6 col-lg-4">
            <div class="featured-box">
              <figure>
                <div class="icon">
                  <i class="lni-heart"></i>
                </div>
                <a href="#"><img class="img-fluid" src="assets/img/featured/img-10.jpg" alt="" /></a>
              </figure>
              <div class="feature-content">
                <div class="tg-product">
                  <a href="#">Office > Stationary</a>
                </div>
                <h4><a href="ads-details.html">Custom Notebooks</a></h4>
                <span>Last Updated: 12 hours ago</span>
                <ul class="address">
                  <li>
                    <a href="#"><i class="lni-map-marker"></i> Washington</a>
                  </li>
                  <li>
                    <a href="#"><i class="lni-alarm-clock"></i> 12 Dec, 10:10 pm</a>
                  </li>
                  <li>
                    <a href="#"><i class="lni-user"></i> John Smith</a>
                  </li>
                  <li>
                    <a href="#"><i class="lni-package"></i> Brand New</a>
                  </li>
                </ul>
                <div class="btn-list">
                  <a class="btn-price" href="#">$ 25</a>
                  <a class="btn btn-common" href="ads-details.html">
                    <i class="lni-list"></i>
                    View Details
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* <!-- Featured Section End --> */}

    {/* <!-- Featured Listings Start --> */}
    <section class="featured-lis section-padding" >
      <div class="container">
        <div class="row">
          <div class="col-md-12 wow fadeIn" data-wow-delay="0.5s">
            <h3 class="section-title">Featured Products</h3>
            <div id="new-products" class="owl-carousel">
              <div class="item">
                <div class="product-item">
                  <div class="carousel-thumb">
                    <img class="img-fluid" src="assets/img/product/img1.jpg" alt="" />  
                    <div class="overlay">
                    </div> 
                    <span class="price">$ 89.00</span>
                  </div>    
                  <div class="product-content">
                    <h3 class="product-title"><a href="ads-details.html">Laptop</a></h3>
                    <a href="#"><i class="lni-bookmark"></i> New York</a>
                    <a href="#"><i class="lni-map-marker"></i> California</a>
                    <div class="icon">
                      <i class="lni-heart"></i>
                    </div> 
                    <div class="card-text">
                      <div class="meta">
                        <div class="float-left">
                          <span class="icon-wrap">
                            <i class="lni-star-filled"></i>
                            <i class="lni-star-filled"></i>
                            <i class="lni-star"></i>
                            <i class="lni-star"></i>
                          </span>
                          <span class="count-review">
                            <span>1</span> Reviews
                          </span>
                        </div>
                        <div class="float-right">
                          <span class="btn-product bg-red"><a href="#">New</a></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="product-item">
                  <div class="carousel-thumb">
                    <img class="img-fluid" src="assets/img/product/img2.jpg" alt="" /> 
                    <div class="overlay">
                    </div> 
                    <span class="price">$ 89.00</span>
                  </div>    
                  <div class="product-content">
                    <h3 class="product-title"><a href="ads-details.html">Headphones</a></h3>
                    <a href="#"><i class="lni-bookmark"></i> New York</a>
                    <a href="#"><i class="lni-map-marker"></i> California</a>
                    <div class="icon">
                      <i class="lni-heart"></i>
                    </div> 
                    <div class="card-text">
                      <div class="meta">
                        <div class="float-left">
                          <span class="icon-wrap">
                            <i class="lni-star-filled"></i>
                            <i class="lni-star-filled"></i>
                            <i class="lni-star-filled"></i>
                            <i class="lni-star"></i>
                          </span>
                          <span class="count-review">
                            <span>1</span> Reviews
                          </span>
                        </div>
                        <div class="float-right">
                          <span class="btn-product bg-yellow"><a href="#">Sale</a></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="product-item">
                  <div class="carousel-thumb">
                    <img class="img-fluid" src="assets/img/product/img3.jpg" alt="" /> 
                    <div class="overlay">
                    </div> 
                    <span class="price">$ 49.00</span>
                  </div>    
                  <div class="product-content">
                    <h3 class="product-title"><a href="ads-details.html">Furniture</a></h3>
                    <a href="#"><i class="lni-bookmark"></i> New York</a>
                    <a href="#"><i class="lni-map-marker"></i> California</a>
                    <div class="icon">
                      <i class="lni-heart"></i>
                    </div> 
                    <div class="card-text">
                      <div class="meta">
                        <div class="float-left">
                          <span class="icon-wrap">
                            <i class="lni-star-filled"></i>
                            <i class="lni-star-filled"></i>
                            <i class="lni-star"></i>
                            <i class="lni-star"></i>
                          </span>
                          <span class="count-review">
                            <span>1</span> Reviews
                          </span>
                        </div>
                        <div class="float-right">
                          <span class="btn-product bg-red"><a href="#">New</a></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="product-item">
                  <div class="carousel-thumb">
                    <img class="img-fluid" src="assets/img/product/img4.jpg" alt="" /> 
                    <div class="overlay">
                    </div> 
                    <span class="price">$ 11.99</span>
                  </div>    
                  <div class="product-content">
                    <h3 class="product-title"><a href="ads-details.html">Apple IPhone</a></h3>
                    <a href="#"><i class="lni-bookmark"></i> New York</a>
                    <a href="#"><i class="lni-map-marker"></i> California</a>
                    <div class="icon">
                      <i class="lni-heart"></i>
                    </div> 
                    <div class="card-text">
                      <div class="meta">
                        <div class="float-left">
                          <span class="icon-wrap">
                            <i class="lni-star-filled"></i>
                            <i class="lni-star-filled"></i>
                            <i class="lni-star-filled"></i>
                            <i class="lni-star"></i>
                          </span>
                          <span class="count-review">
                            <span>1</span> Reviews
                          </span>
                        </div>
                        <div class="float-right">
                          <span class="btn-product bg-yellow"><a href="#">Sele</a></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="product-item">
                  <div class="carousel-thumb">
                    <img class="img-fluid" src="assets/img/product/img5.jpg" alt="" /> 
                    <div class="overlay">
                    </div> 
                    <span class="price">$ 99.00</span>
                  </div>    
                  <div class="product-content">
                    <h3 class="product-title"><a href="ads-details.html">MacBook Pro</a></h3>
                    <a href="#"><i class="lni-bookmark"></i> New York</a>
                    <a href="#"><i class="lni-map-marker"></i> California</a>
                    <div class="icon">
                      <i class="lni-heart"></i>
                    </div> 
                    <div class="card-text">
                      <div class="meta">
                        <div class="float-left">
                          <span class="icon-wrap">
                            <i class="lni-star-filled"></i>
                            <i class="lni-star-filled"></i>
                            <i class="lni-star"></i>
                            <i class="lni-star"></i>
                          </span>
                          <span class="count-review">
                            <span>1</span> Reviews
                          </span>
                        </div>
                        <div class="float-right">
                          <span class="btn-product bg-red"><a href="#">New</a></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="product-item">
                  <div class="carousel-thumb">
                    <img class="img-fluid" src="assets/img/product/img6.jpg" alt="" /> 
                    <div class="overlay">
                    </div> 
                    <span class="price">$ 89.00</span>
                  </div>    
                  <div class="product-content">
                    <h3 class="product-title"><a href="ads-details.html">iPad Pro</a></h3>
                    <a href="#"><i class="lni-bookmark"></i> New York</a>
                    <a href="#"><i class="lni-map-marker"></i> California</a>
                    <div class="icon">
                      <i class="lni-heart"></i>
                    </div> 
                    <div class="card-text">
                      <div class="meta">
                        <div class="float-left">
                          <span class="icon-wrap">
                            <i class="lni-star-filled"></i>
                            <i class="lni-star-filled"></i>
                            <i class="lni-star-filled"></i>
                            <i class="lni-star"></i>
                          </span>
                          <span class="count-review">
                            <span>1</span> Reviews
                          </span>
                        </div>
                        <div class="float-right">
                          <span class="btn-product bg-yellow"><a href="#">Sale</a></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="product-item">
                  <div class="carousel-thumb">
                    <img class="img-fluid" src="assets/img/product/img7.jpg" alt="" /> 
                    <div class="overlay">
                    </div> 
                    <span class="price">$ 19.00</span>
                  </div>    
                  <div class="product-content">
                    <h3 class="product-title"><a href="ads-details.html">Mobiles</a></h3>
                    <a href="#"><i class="lni-bookmark"></i> New York</a>
                    <a href="#"><i class="lni-map-marker"></i> California</a>
                    <div class="icon">
                      <i class="lni-heart"></i>
                    </div> 
                    <div class="card-text">
                      <div class="meta">
                        <div class="float-left">
                          <span class="icon-wrap">
                            <i class="lni-star-filled"></i>
                            <i class="lni-star-filled"></i>
                            <i class="lni-star"></i>
                            <i class="lni-star"></i>
                          </span>
                          <span class="count-review">
                            <span>1</span> Reviews
                          </span>
                        </div>
                        <div class="float-right">
                          <span class="btn-product bg-red"><a href="#">New</a></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="product-item">
                  <div class="carousel-thumb">
                    <img class="img-fluid" src="assets/img/product/img8.jpg" alt="" /> 
                    <div class="overlay">
                    </div> 
                    <span class="price">$ 123.00</span>
                  </div>    
                  <div class="product-content">
                    <h3 class="product-title"><a href="ads-details.html">Nexus Phone</a></h3>
                    <a href="#"><i class="lni-bookmark"></i> New York</a>
                    <a href="#"><i class="lni-map-marker"></i> California</a>
                    <div class="icon">
                      <i class="lni-heart"></i>
                    </div> 
                    <div class="card-text">
                      <div class="meta">
                        <div class="float-left">
                          <span class="icon-wrap">
                            <i class="lni-star-filled"></i>
                            <i class="lni-star-filled"></i>
                            <i class="lni-star-filled"></i>
                            <i class="lni-star-filled"></i>
                          </span>
                          <span class="count-review">
                            <span>1</span> Reviews
                          </span>
                        </div>
                        <div class="float-right">
                          <span class="btn-product bg-yellow"><a href="#">Sale</a></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> 
        </div>
      </div>
    </section>
    {/* <!-- Featured Listings End --> */}

    {/* <!-- Services Section Start --> */}
    <section class="services section-padding">
      <div class="container">
        <div class="row">
          {/* <!-- Services item --> */}
          <div class="col-md-6 col-lg-4 col-xs-12">
            <div class="services-item wow fadeInRight" data-wow-delay="0.2s">
              <div class="icon">
                <i class="lni-book"></i>
              </div>
              <div class="services-content">
                <h3><a href="#">Full Documented</a></h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo aut magni perferendis repellat rerum assumenda facere.</p>
              </div>
            </div>
          </div>
          {/* <!-- Services item --> */}
          <div class="col-md-6 col-lg-4 col-xs-12">
            <div class="services-item wow fadeInRight" data-wow-delay="0.4s">
              <div class="icon">
                <i class="lni-leaf"></i>
              </div>
              <div class="services-content">
                <h3><a href="#">Clean & Modern Design</a></h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo aut magni perferendis repellat rerum assumenda facere.</p>
              </div>
            </div>
          </div>
          {/* <!-- Services item --> */}
          <div class="col-md-6 col-lg-4 col-xs-12">
            <div class="services-item wow fadeInRight" data-wow-delay="0.6s">
              <div class="icon">
                <i class="lni-cog"></i>
              </div>
              <div class="services-content">
                <h3><a href="#">Great Features</a></h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo aut magni perferendis repellat rerum assumenda facere.</p>
              </div>
            </div>
          </div>
          {/* <!-- Services item --> */}
          <div class="col-md-6 col-lg-4 col-xs-12">
            <div class="services-item wow fadeInRight" data-wow-delay="0.8s">
              <div class="icon">
                <i class="lni-spray"></i>
              </div>
              <div class="services-content">
                <h3><a href="#">Completely Customizable</a></h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo aut magni perferendis repellat rerum assumenda facere.</p>
              </div>
            </div>
          </div>
           {/* <!-- Services item --> */}
          <div class="col-md-6 col-lg-4 col-xs-12">
            <div class="services-item wow fadeInRight" data-wow-delay="1s">
              <div class="icon">
                <i class="lni-emoji-smile"></i>
              </div>
              <div class="services-content">
                <h3><a href="#">User Friendly</a></h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo aut magni perferendis repellat rerum assumenda facere.</p>
              </div>
            </div>
          </div>
           {/* <!-- Services item --> */}
          <div class="col-md-6 col-lg-4 col-xs-12">
            <div class="services-item wow fadeInRight" data-wow-delay="1.2s">
              <div class="icon">
                <i class="lni-layout"></i>
              </div>
              <div class="services-content">
                <h3><a href="#">Awesome Layout</a></h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo aut magni perferendis repellat rerum assumenda facere.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* <!-- Services Section End --> */}

    {/* <!-- Counter Area Start--> */}
    <section class="counter-section section-padding">
      <div class="container">
        <div class="row">
          {/* <!-- Counter Item --> */}
          <div class="col-md-3 col-sm-6 work-counter-widget text-center">
            <div class="counter">
              <div class="icon"><i class="lni-layers"></i></div>
              <div class="counterUp">12090</div>
              <p>Regular Ads</p>
            </div>
          </div>
          {/* <!-- Counter Item --> */}
          <div class="col-md-3 col-sm-6 work-counter-widget text-center">
            <div class="counter">
              <div class="icon"><i class="lni-map"></i></div>
              <div class="counterUp">350</div>
              <p>Locations</p>
            </div>
          </div>
          {/* <!-- Counter Item --> */}
          <div class="col-md-3 col-sm-6 work-counter-widget text-center">
            <div class="counter">
              <div class="icon"><i class="lni-user"></i></div>
              <div class="counterUp">23453</div>
              <p>Reguler Members</p>
            </div>
          </div>
          {/* <!-- Counter Item --> */}
          <div class="col-md-3 col-sm-6 work-counter-widget text-center">
            <div class="counter">
              <div class="icon"><i class="lni-briefcase"></i></div>
              <div class="counterUp">250</div>
              <p>Premium Ads</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* <!-- Counter Area End--> */}

    {/* <!-- Special Ooffer Section Start --> */}
    <section class="special-offer section-padding">
      <div class="container">
        <h1 class="section-title">Daily Deals</h1>
        <div class="row">
          <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12">
            <a href="ads-details.html"><div class="special-product">
              <img src="assets/img/gallery/img-1.jpg" alt="" />
              <div class="product-text">
                <h3>Special Offer</h3>
                <div class="offer-details">
                  <h5 class="price">$ 1400</h5>
                  <h4>Buy IphoneX</h4>
                  <p>with special gift</p>
                </div>
                <div class="icon-footer">
                  <a href="#"><i class="icon-arrow-right-circle"></i></a>
                </div>
              </div>
            </div></a>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12">
            <a href="ads-details.html"><div class="special-product">
              <img src="assets/img/gallery/img-2.jpg" alt="" />
              <div class="product-text">
                <h3>Special Offer</h3>
                <div class="offer-details">
                  <h5 class="price">$ 850</h5>
                  <h4>Buy Galaxy Note 8</h4>
                  <p>with special gift</p>
                </div>
                <div class="icon-footer">
                  <a href="#"><i class="icon-arrow-right-circle"></i></a>
                </div>
              </div>
            </div></a>
          </div>
          <div class="col-lg-4 col-md-12 col-sm-12 col-xs-12">
            <div class="row">
              <div class="col-lg-12 col-md-6 col-sm-12">
                <a href="ads-details.html"><div class="special-product mb-30">
                  <img class="img-fluid" src="assets/img/gallery/img-3.jpg" alt="" />
                  <div class="product-text">
                    <p class="text">Colorful Outdoor <br /> Mattresses That Connect to Each Other</p>
                    <div class="icon-footer">
                      <h5 class="price">$ 76</h5>
                    </div>
                  </div>
                </div></a>
              </div>
              <div class="col-lg-12 col-md-6 col-sm-12">
                <a href="ads-details.html"><div class="special-product">
                  <img class="img-fluid" src="assets/img/gallery/img-5.jpg" alt="" />
                  <div class="product-text">
                    <p class="text">Handmade Hardwood & <br /> Rope Toys from Monroe Workshop</p>
                    <div class="icon-footer">
                      <h5 class="price">$ 50</h5>
                    </div>
                  </div>
                </div></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* <!-- Special Ooffer Section End --> */}

    {/* <!-- Testimonial Section Start --> */}
    <section class="testimonial section-padding">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div id="testimonials" class="owl-carousel">
              <div class="item">
                <div class="testimonial-item">
                  <div class="img-thumb">
                    <img src="assets/img/testimonial/img1.png" alt="" />
                  </div>
                  <div class="content">
                    <h2><a href="#">John Doe</a></h2>
                    <p class="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo quidem, excepturi facere magnam illum, at accusantium doloremque odio.</p>
                    <h3>Developer at of <a href="#">xyz company</a></h3>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="testimonial-item">
                  <div class="img-thumb">
                    <img src="assets/img/testimonial/img2.png" alt="" />
                  </div>
                  <div class="content">
                    <h2><a href="#">Jessica</a></h2>
                    <p class="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo quidem, excepturi facere magnam illum, at accusantium doloremque odio.</p>
                    <h3>Developer at of <a href="#">xyz company</a></h3>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="testimonial-item">
                  <div class="img-thumb">
                    <img src="assets/img/testimonial/img3.png" alt="" />
                  </div>
                  <div class="content">
                    <h2><a href="#">Johnny Zeigler</a></h2>
                    <p class="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo quidem, excepturi facere magnam illum, at accusantium doloremque odio.</p>
                    <h3>Developer at of <a href="#">xyz company</a></h3>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="testimonial-item">
                  <div class="img-thumb">
                    <img src="assets/img/testimonial/img1.png" alt="" />
                  </div>
                  <div class="content">
                    <h2><a href="#">John Doe</a></h2>
                    <p class="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo quidem, excepturi facere magnam illum, at accusantium doloremque odio.</p>
                    <h3>Developer at of <a href="#">xyz company</a></h3>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="testimonial-item">
                  <div class="img-thumb">
                    <img src="assets/img/testimonial/img2.png" alt="" />
                  </div>
                  <div class="content">
                    <h2><a href="#">Jessica</a></h2>
                    <p class="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo quidem, excepturi facere magnam illum, at accusantium doloremque odio.</p>
                    <h3>Developer at of <a href="#">xyz company</a></h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* <!-- Testimonial Section End --> */}

    {/* <!-- Subscribe Section Start --> */}
    <section class="subscribes section-padding">
      <div class="container">
        <div class="row wrapper-sub">
          <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
            <p>Join our 10,000+ subscribers and get access to the latest templates, freebies, announcements and resources!</p>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
            <form>
              <div class="subscribe">
                <input class="form-control" name="email" placeholder="Your email here" required="" type="email" /> 
                <button class="btn btn-common" type="submit">Subscribe</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    {/* <!-- Subscribe Section End --> */}

    {/* <!-- Footer Section Start --> */}
    <footer>
      {/* <!-- Footer Area Start --> */}
      <section class="footer-Content">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-md-6 col-sm-6 col-xs-6 col-mb-12">
              <div class="widget">
                <h3 class="block-title">About Us</h3>
                <div class="textwidget">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lobortis tincidunt est, et euismod purus suscipit quis. Etiam euismod ornare elementum. Sed ex est, consectetur eget facilisis sed, auctor ut purus.</p>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6 col-xs-6 col-mb-12">
              <div class="widget">
                <h3 class="block-title">Useful Links</h3>
                <ul class="menu">
                  <li><a href="#">How to Sell Faster</a></li>
                  <li><a href="#">Membership Details</a></li>
                  <li><a href="#">Why Choose</a></li>
                  <li><a href="#">Job Opennings</a></li>
                  <li><a href="#">Using This Platform</a></li>
                </ul>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6 col-xs-6 col-mb-12">
              <div class="widget">
                <h3 class="block-title">Help & Support</h3>
                <ul class="menu">
                  <li><a href="#">Live Chat</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                  <li><a href="#">Purchase Protection</a></li>
                  <li><a href="#">Support</a></li>
                  <li><a href="#">Contact us</a></li>
                </ul>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6 col-xs-6 col-mb-12">
              <div class="widget">
                <h3 class="block-title">Contact Information</h3>
                <ul class="contact-footer">
                  <li>
                    <strong>Address :</strong><span>1900 Pico Blvd, New York</span>
                  </li>
                  <li>
                    <strong>Phone :</strong><span>+48 123 456 789</span>
                  </li>
                  <li>
                    <strong>E-mail :</strong><span><a href="#">info@example.com</a></span>
                  </li>
                </ul>  
                <ul class="footer-social">
                  <li><a class="facebook" href="#"><i class="lni-facebook-filled"></i></a></li>
                  <li><a class="twitter" href="#"><i class="lni-twitter-filled"></i></a></li>
                  <li><a class="linkedin" href="#"><i class="lni-linkedin-fill"></i></a></li>
                  <li><a class="google-plus" href="#"><i class="lni-google-plus"></i></a></li>
                </ul>          
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Footer area End --> */}
      
      {/* <!-- Copyright Start  --> */}
      <div id="copyright">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="site-info float-left">
                <p>All copyrights reserved &copy; 2018 - Designed by <a href="https://uideck.com" rel="nofollow">UIdeck</a></p>
              </div>              
              <div class="float-right">  
                <ul class="bottom-card">
                  <li>
                      <a href="#"><img src="assets/img/footer/card1.jpg" alt="card" /></a>
                  </li>
                  <li>
                      <a href="#"><img src="assets/img/footer/card2.jpg" alt="card" /></a>
                  </li>
                  <li>
                      <a href="#"><img src="assets/img/footer/card3.jpg" alt="card" /></a>
                  </li>
                  <li>
                      <a href="#"><img src="assets/img/footer/card4.jpg" alt="card" /></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Copyright End --> */}

    </footer>
    {/* <!-- Footer Section End -->  */}

    {/* <!-- Go to Top Link --> */}
    <a href="#" class="back-to-top">
    	<i class="lni-chevron-up"></i>
    </a>

    {/* <!-- Preloader --> 
    */}
    
    	
    	{/* <h1>Welocme, {this.props.name}</h1>
      	<p>Renderizar SASS file de materialize para tener colores primarios y secundarios acorde al color pallete</p>
      	{ _.map(this.props.torneos, (torneo, key) => {
      		return (
      			<div key={key}>
	      			<h1>{key}</h1>
	      			<div>{torneo.equipo1}</div>
	      			<div>{torneo.equipo2}</div>
      			</div>
      		);

      	} )}
      	<button onClick={this.increment}>Change Name</button> */}
    </div>
    
  );
  }
}

let form = reduxForm({
	form: 'NewPost'
})(Home);

form = connect(mapStateToProps,{ getPartidos })(form);

export default connect(mapStateToProps,{ getPartidos })(Home);;
