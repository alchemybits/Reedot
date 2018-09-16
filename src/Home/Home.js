import React    from "react";
import * as firebase from 'firebase';
import {} from '../Firebase.js';
import _ from 'lodash';
import swal from 'sweetalert2';
import $ from 'jquery';




import "./Home.css";

import { connect } from 'react-redux';

import { getFeaturedProductos,getLatestProductos } from '../Actions/Actions';
import { Field, reduxForm, reset } from 'redux-form';
import MenuBar from "../menuBar/menuBar";
import LazyLoad from 'react-lazyload';

import {  BrowserRouter as Router, Route, Switch, Redirect, Link } from 'react-router-dom';

function mapStateToProps(state) {
  return {
    productos: state.productos,
    latest: state.latest
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
	      swal({title:'Have a nice day!',toast: true,position:"center",showConfirmButton: false,timer: 2000,});
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
    this.props.getFeaturedProductos();
    this.props.getLatestProductos();
	}

  render() {
    return (
  	
    <div className="home">
		
    {/* <!-- Trending Categories Section Start --> */}
    <section className="trending-cat section-padding">
      <div id="root"></div>
      <div className="container">
        <h1 className="section-title">Product Categories</h1>
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
            <Link to="/products?cat=Vehicle">
              <div className="box">
                <div className="icon">
                  <img className="img-fluid" src="assets/img/category/img-1.png" alt="" />
                </div>
                <h4>Vehicle</h4>
                <strong>189 Ads</strong>
              </div>
            </Link>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
          <Link to="/products?cat=Laptops">
              <div className="box">
                <div className="icon">
                  <img className="img-fluid" src="assets/img/category/img-2.png" alt="" />
                </div>
                <h4>Laptops</h4>
                <strong>255 Ads</strong>
              </div>
            </Link>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
            <Link to="/products?cat=Mobiles">
              <div className="box">
                <div className="icon">
                  <img className="img-fluid" src="assets/img/category/img-3.png" alt="" />
                </div>
                <h4>Mobiles</h4>
                <strong>127 Ads</strong>
              </div>
            </Link>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
          <Link to="/products?cat=Electronics">
              <div className="box">
                <div className="icon">
                  <img className="img-fluid" src="assets/img/category/img-4.png" alt="" />
                </div>
                <h4>Electronics</h4>
                <strong>69 Ads</strong>
              </div>
            </Link>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
          <Link to="/products?cat=Computer">
              <div className="box">
                <div className="icon">
                  <img className="img-fluid" src="assets/img/category/img-5.png" alt="" />
                </div>
                <h4>Computer</h4>
                <strong>172 Ads</strong>
              </div>
            </Link>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
          <Link to="/products?cat=RealEstate">
              <div className="box">
                <div className="icon">
                  <img className="img-fluid" src="assets/img/category/img-6.png" alt="" />
                </div>
                <h4>Real Estate</h4>
                <strong>150 Ads</strong>
              </div>
            </Link>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
          <Link to="/products?cat=HomeAppliances">
              <div className="box">
                <div className="icon">
                  <img className="img-fluid" src="assets/img/category/img-7.png" alt="" />
                </div>
                <h4>Home Appliances</h4>
                <strong>249 Ads</strong>
              </div>
            </Link>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
          <Link to="/products?cat=Jobs">
              <div className="box">
                <div className="icon">
                  <img className="img-fluid" src="assets/img/category/img-8.png" alt="" />
                </div>
                <h4>Jobs</h4>
                <strong>14 9Ads</strong>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
    {/* <!-- Trending Categories Section End --> */}

    {/* <!-- Featured Section Start --> */}
    <section className="featured section-padding">
      <div className="container">
        <h1 className="section-title">Latest Products</h1>
        <div className="row">
        { 
          
          _.map(this.props.productos, (producto, key) => {
            var today = new Date();
          return (
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-4" key={key}>
          <div className="featured-box">
            <figure>
              <div className="icon">
                <i className="lni-heart"></i>
              </div>
              <a href="#"><img className="img-fluid" src={producto.url} alt="" /></a>
            </figure>
            <div className="feature-content">
              <div className="tg-product">
                <a href="#">{producto.cat}</a>
              </div>
              <h4><a href="ads-details.html">{producto.nombre}</a></h4>
              <span>Last Updated: 5 hours ago</span>
              <ul className="address">
                <li>
                  <a href="#"><i className="lni-map-marker"></i>{producto.city}</a>
                </li>
                <li>
                  <a href="#"><i className="lni-alarm-clock"></i> {producto.dateAdded?producto.dateAdded:today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear()}</a>
                </li>
                <li>
                  <a href="#"><i className="lni-user"></i> {producto.firstname}</a>
                </li>
                <li>
                  <a href="#"><i className="lni-eye"></i> {producto.views?producto.views:0}</a>
                </li>
                
              </ul>
              <div className="btn-list">
                <a className="btn-price" href="#">{producto.precio}</a>
                <Link to={"/AddDetails/"+key} className="btn btn-common" >
                  <i className="lni-list"></i>
			            View Details
                </Link>
              </div>
            </div>
          </div>
        </div>);

        }) }
          
          
         
        </div>
      </div>
    </section>
    {/* <!-- Featured Section End --> */}

    {/* <!-- Featured Listings Start --> */}
    <section className="featured section-padding">
      <div className="container">
        <h1 className="section-title">Featured Products</h1>
        <div className="row">
            { 
              
              _.map(this.props.latest, (producto, key) => {
                console.log("LATEST",producto);
                var today = new Date();
              return (
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-4" key={key}>
          <div className="featured-box">
            <figure>
              <div className="icon">
                <i className="lni-heart"></i>
              </div>
              <a href="#"><img className="img-fluid" src={producto.url} alt="" /></a>
            </figure>
            <div className="feature-content">
              <div className="tg-product">
                <a href="#">{producto.cat}</a>
              </div>
              <h4><a href="ads-details.html">{producto.nombre}</a></h4>
              <span>Last Updated: 5 hours ago</span>
              <ul className="address">
                <li>
                  <a href="#"><i className="lni-map-marker"></i>{producto.city}</a>
                </li>
                <li>
                  <a href="#"><i className="lni-alarm-clock"></i> {producto.dateAdded?producto.dateAdded:today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear()}</a>
                </li>
                <li>
                  <a href="#"><i className="lni-user"></i> {producto.firstname}</a>
                </li>
                <li>
                  <a href="#"><i className="lni-eye"></i> {producto.views?producto.views:0}</a>
                </li>
                
              </ul>
              <div className="btn-list">
                <a className="btn-price" href="#">{producto.precio}</a>
                <Link to={"/AddDetails/"+key} className="btn btn-common" >
                  <i className="lni-list"></i>
			            View Details
                </Link>
              </div>
            </div>
          </div>
        </div>

                )}
              )
            }</div>
            </div>
          </section>
    {/* <!-- Featured Listings End --> */}

    {/* <!-- Services Section Start --> */}
    <section className="services section-padding">
      <div className="container">
        <div className="row">
          {/* <!-- Services item --> */}
          <div className="col-md-6 col-lg-4 col-xs-12">
            <div className="services-item wow fadeInRight" data-wow-delay="0.2s">
              <div className="icon">
                <i className="lni-book"></i>
              </div>
              <div className="services-content">
                <h3><a href="#">Full Documented</a></h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo aut magni perferendis repellat rerum assumenda facere.</p>
              </div>
            </div>
          </div>
          {/* <!-- Services item --> */}
          <div className="col-md-6 col-lg-4 col-xs-12">
            <div className="services-item wow fadeInRight" data-wow-delay="0.4s">
              <div className="icon">
                <i className="lni-leaf"></i>
              </div>
              <div className="services-content">
                <h3><a href="#">Clean & Modern Design</a></h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo aut magni perferendis repellat rerum assumenda facere.</p>
              </div>
            </div>
          </div>
          {/* <!-- Services item --> */}
          <div className="col-md-6 col-lg-4 col-xs-12">
            <div className="services-item wow fadeInRight" data-wow-delay="0.6s">
              <div className="icon">
                <i className="lni-cog"></i>
              </div>
              <div className="services-content">
                <h3><a href="#">Great Features</a></h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo aut magni perferendis repellat rerum assumenda facere.</p>
              </div>
            </div>
          </div>
          {/* <!-- Services item --> */}
          <div className="col-md-6 col-lg-4 col-xs-12">
            <div className="services-item wow fadeInRight" data-wow-delay="0.8s">
              <div className="icon">
                <i className="lni-spray"></i>
              </div>
              <div className="services-content">
                <h3><a href="#">Completely Customizable</a></h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo aut magni perferendis repellat rerum assumenda facere.</p>
              </div>
            </div>
          </div>
           {/* <!-- Services item --> */}
          <div className="col-md-6 col-lg-4 col-xs-12">
            <div className="services-item wow fadeInRight" data-wow-delay="1s">
              <div className="icon">
                <i className="lni-emoji-smile"></i>
              </div>
              <div className="services-content">
                <h3><a href="#">User Friendly</a></h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo aut magni perferendis repellat rerum assumenda facere.</p>
              </div>
            </div>
          </div>
           {/* <!-- Services item --> */}
          <div className="col-md-6 col-lg-4 col-xs-12">
            <div className="services-item wow fadeInRight" data-wow-delay="1.2s">
              <div className="icon">
                <i className="lni-layout"></i>
              </div>
              <div className="services-content">
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
    <section className="counter-section section-padding">
      <div className="container">
        <div className="row">
          {/* <!-- Counter Item --> */}
          <div className="col-md-3 col-sm-6 work-counter-widget text-center">
            <div className="counter">
              <div className="icon"><i className="lni-layers"></i></div>
              <div className="counterUp">12090</div>
              <p>Regular Ads</p>
            </div>
          </div>
          {/* <!-- Counter Item --> */}
          <div className="col-md-3 col-sm-6 work-counter-widget text-center">
            <div className="counter">
              <div className="icon"><i className="lni-map"></i></div>
              <div className="counterUp">350</div>
              <p>Locations</p>
            </div>
          </div>
          {/* <!-- Counter Item --> */}
          <div className="col-md-3 col-sm-6 work-counter-widget text-center">
            <div className="counter">
              <div className="icon"><i className="lni-user"></i></div>
              <div className="counterUp">23453</div>
              <p>Reguler Members</p>
            </div>
          </div>
          {/* <!-- Counter Item --> */}
          <div className="col-md-3 col-sm-6 work-counter-widget text-center">
            <div className="counter">
              <div className="icon"><i className="lni-briefcase"></i></div>
              <div className="counterUp">250</div>
              <p>Premium Ads</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* <!-- Counter Area End--> */}

    {/* <!-- Special Ooffer Section Start --> */}
    <section className="special-offer section-padding">
      <div className="container">
        <h1 className="section-title">Daily Deals</h1>
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
            <span href="ads-details.html"><div className="special-product">
              <img src="assets/img/gallery/img-1.jpg" alt="" />
              <div className="product-text">
                <h3>Special Offer</h3>
                <div className="offer-details">
                  <h5 className="price">$ 1400</h5>
                  <h4>Buy IphoneX</h4>
                  <p>with special gift</p>
                </div>
                <div className="icon-footer">
                  <a href="#"><i className="icon-arrow-right-circle"></i></a>
                </div>
              </div>
            </div></span>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
            <span href="ads-details.html"><div className="special-product">
              <img src="assets/img/gallery/img-2.jpg" alt="" />
              <div className="product-text">
                <h3>Special Offer</h3>
                <div className="offer-details">
                  <h5 className="price">$ 850</h5>
                  <h4>Buy Galaxy Note 8</h4>
                  <p>with special gift</p>
                </div>
                <div className="icon-footer">
                  <a href="#"><i className="icon-arrow-right-circle"></i></a>
                </div>
              </div>
            </div></span>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
            <div className="row">
              <div className="col-lg-12 col-md-6 col-sm-12">
                <a href="ads-details.html"><div className="special-product mb-30">
                  <img className="img-fluid" src="assets/img/gallery/img-3.jpg" alt="" />
                  <div className="product-text">
                    <p className="text">Colorful Outdoor <br /> Mattresses That Connect to Each Other</p>
                    <div className="icon-footer">
                      <h5 className="price">$ 76</h5>
                    </div>
                  </div>
                </div></a>
              </div>
              <div className="col-lg-12 col-md-6 col-sm-12">
                <a href="ads-details.html"><div className="special-product">
                  <img className="img-fluid" src="assets/img/gallery/img-5.jpg" alt="" />
                  <div className="product-text">
                    <p className="text">Handmade Hardwood & <br /> Rope Toys from Monroe Workshop</p>
                    <div className="icon-footer">
                      <h5 className="price">$ 50</h5>
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
    <section className="testimonial section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div id="testimonials" className="owl-carousel">
              <div className="item">
                <div className="testimonial-item">
                  <div className="img-thumb">
                    <img src="assets/img/testimonial/img1.png" alt="" />
                  </div>
                  <div className="content">
                    <h2><a href="#">John Doe</a></h2>
                    <p className="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo quidem, excepturi facere magnam illum, at accusantium doloremque odio.</p>
                    <h3>Developer at of <a href="#">xyz company</a></h3>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="testimonial-item">
                  <div className="img-thumb">
                    <img src="assets/img/testimonial/img2.png" alt="" />
                  </div>
                  <div className="content">
                    <h2><a href="#">Jessica</a></h2>
                    <p className="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo quidem, excepturi facere magnam illum, at accusantium doloremque odio.</p>
                    <h3>Developer at of <a href="#">xyz company</a></h3>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="testimonial-item">
                  <div className="img-thumb">
                    <img src="assets/img/testimonial/img3.png" alt="" />
                  </div>
                  <div className="content">
                    <h2><a href="#">Johnny Zeigler</a></h2>
                    <p className="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo quidem, excepturi facere magnam illum, at accusantium doloremque odio.</p>
                    <h3>Developer at of <a href="#">xyz company</a></h3>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="testimonial-item">
                  <div className="img-thumb">
                    <img src="assets/img/testimonial/img1.png" alt="" />
                  </div>
                  <div className="content">
                    <h2><a href="#">John Doe</a></h2>
                    <p className="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo quidem, excepturi facere magnam illum, at accusantium doloremque odio.</p>
                    <h3>Developer at of <a href="#">xyz company</a></h3>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="testimonial-item">
                  <div className="img-thumb">
                    <img src="assets/img/testimonial/img2.png" alt="" />
                  </div>
                  <div className="content">
                    <h2><a href="#">Jessica</a></h2>
                    <p className="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo quidem, excepturi facere magnam illum, at accusantium doloremque odio.</p>
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
    <section className="subscribes section-padding">
      <div className="container">
        <div className="row wrapper-sub">
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
            <p>Join our 10,000+ subscribers and get access to the latest templates, freebies, announcements and resources!</p>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
            <form>
              <div className="subscribe">
                <input className="form-control" name="email" placeholder="Your email here" required="" type="email" /> 
                <button className="btn btn-common" type="submit">Subscribe</button>
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
      <section className="footer-Content">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 col-mb-12">
              <div className="widget">
                <h3 className="block-title">About Us</h3>
                <div className="textwidget">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lobortis tincidunt est, et euismod purus suscipit quis. Etiam euismod ornare elementum. Sed ex est, consectetur eget facilisis sed, auctor ut purus.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 col-mb-12">
              <div className="widget">
                <h3 className="block-title">Useful Links</h3>
                <ul className="menu">
                  <li><a href="#">How to Sell Faster</a></li>
                  <li><a href="#">Membership Details</a></li>
                  <li><a href="#">Why Choose</a></li>
                  <li><a href="#">Job Opennings</a></li>
                  <li><a href="#">Using This Platform</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 col-mb-12">
              <div className="widget">
                <h3 className="block-title">Help & Support</h3>
                <ul className="menu">
                  <li><a href="#">Live Chat</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                  <li><a href="#">Purchase Protection</a></li>
                  <li><a href="#">Support</a></li>
                  <li><a href="#">Contact us</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 col-mb-12">
              <div className="widget">
                <h3 className="block-title">Contact Information</h3>
                <ul className="contact-footer">
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
                <ul className="footer-social">
                  <li><a className="facebook" href="#"><i className="lni-facebook-filled"></i></a></li>
                  <li><a className="twitter" href="#"><i className="lni-twitter-filled"></i></a></li>
                  <li><a className="linkedin" href="#"><i className="lni-linkedin-fill"></i></a></li>
                  <li><a className="google-plus" href="#"><i className="lni-google-plus"></i></a></li>
                </ul>          
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Footer area End --> */}
      
      {/* <!-- Copyright Start  --> */}
      <div id="copyright">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="site-info float-left">
                <p>All copyrights reserved &copy; 2018 - Designed by <a href="https://uideck.com" rel="nofollow">UIdeck</a></p>
              </div>              
              <div className="float-right">  
                <ul className="bottom-card">
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
    <a href="#" className="back-to-top">
    	<i className="lni-chevron-up"></i>
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


// form = connect(mapStateToProps,{ getPartidos })(form);

export default connect(mapStateToProps,{ getFeaturedProductos,getLatestProductos })(Home);;
