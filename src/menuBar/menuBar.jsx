import "./menuBar.css";
import React from "react";
import {  BrowserRouter as Router, Route, Switch, Redirect, Link } from 'react-router-dom';
import Logo from "../logo/logo";

function guest(func){	
	// const add = (path == "/Collection" || path == "/collection" )?"":<span><i className="material-icons" ><Link to="/Collection">search</Link></i></span>;
	return (
		<div className="">
    <div className="dropdown-item"><i className="lni-lock"></i><Link to="login"> Log In</Link></div>
    <div className="dropdown-item"><i className="lni-user"></i><Link to="signup"> Signup</Link></div>
		
			
		</div>
	)
}

function logout(func){
	// const add = (path == "/Collection" || path == "/collection" )?"":<span><i className="material-icons"><Link to="/Collection">search</Link></i></span>;
	return (
		<div className="">
		<div className="dropdown-item" onClick={func}><i className="lni-close" ></i>Log out</div>
		</div>
	)
}



function template() {

  
  return (
		
    <div>
      
      <nav className="navbar navbar-expand-lg fixed-top scrolling-navbar">
        <div className="container">
          
          <div className="navbar-header">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#main-navbar" aria-controls="main-navbar" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
              <span className="lni-menu"></span>
              <span className="lni-menu"></span>
              <span className="lni-menu"></span>
            </button>
            <Link to="Home" className="navbar-brand"><h1>Reedot</h1></Link>
          </div>
          <div className="collapse navbar-collapse" id="main-navbar">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                
                  <Link className="nav-link" to="../Home">Home</Link>
                
              </li>
              <li className="nav-item">
                
                  <Link className="nav-link" to="../Category">Categories</Link>                  
                
              </li>
              <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Request
                </a>
                <div className="dropdown-menu">
                  <Link className="dropdown-item" to="/Requests">See All</Link>
                  <Link className="dropdown-item" to="../post-request">Post a Request</Link>                  
                </div>
                  
                
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Ads and Products
                </a>
                <div className="dropdown-menu">
                  <Link className="dropdown-item" to="../Products">See All</Link>
                  <Link className="dropdown-item" to="../post-ads">Post a Add or Product</Link>                  
                </div>
                  
                
              </li>
              
            </ul>
            <ul className="sign-in">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="lni-user"></i> My Account</a>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="account-profile-setting"><i className="lni-home"></i> Account Home</a>
                  <a className="dropdown-item" href="account-myads"><i className="lni-wallet"></i> My Ads</a>
                  <a className="dropdown-item" href="account-favourite-ads"><i className="lni-heart"></i> Favourite ads</a>
                  <a className="dropdown-item" href="account-archived-ads"><i className="lni-folder"></i> Archived</a>
                  
                  
                  
                  {/* <a className="dropdown-item" href="forgot-password"><i className="lni-reload"></i> Forgot Password</a> */}
                  {this.props.islogged ? logout(this.signOut) : guest()}
                  
                </div>
              </li>
            </ul>
            <Link className="tg-btn" to="../post-ads">
              <i className="lni-pencil-alt"></i> Post An Ad
            </Link>
            <Link className="tg-btn" to="../post-request">
              <i className="lni-pencil-alt"></i> Post A Request
            </Link>
          </div>
        </div>

        
        <ul className="mobile-menu">
          <li>
            <a className="active" href="index">Home</a>
          </li>
          <li>
            <a href="category">Categories</a>
          </li>
          <li>
            <a href="#">
            Listings
            </a>
            <ul className="dropdown">
              <li><a href="adlistinggrid">Ad Grid</a></li>
              <li><a href="adlistinglist">Ad Listing</a></li>
              <li><a href="ads-details">Listing Detail</a></li>
            </ul>
          </li>
          <li>
            <a href="#">Pages</a>
            <ul className="dropdown">
              <li><a href="about">About Us</a></li>
              <li><a href="services">Services</a></li>
              <li><a href="ads-details">Ads Details</a></li>
              <li><a href="post-ads">Ads Post</a></li>
              <li><a href="pricing">Packages</a></li>
              <li><a href="testimonial">Testimonial</a></li>
              <li><a href="faq">FAQ</a></li>
              <li><a href="404">404</a></li>
            </ul>
          </li>
          <li>
            <a href="#">Blog</a>
            <ul className="dropdown">
              <li><a href="blog">Blog - Right Sidebar</a></li>
              <li><a href="blog-left-sidebar">Blog - Left Sidebar</a></li>
              <li><a href="blog-grid-full-width"> Blog full width </a></li>
              <li><a href="single-post">Blog Details</a></li>
            </ul>
          </li>
          <li>
            <a href="contact">Contact Us</a>
          </li>
          <li>
            <a>My Account</a>
            <ul className="dropdown">
              <li><i className="lni-home"></i><a href="account-profile-setting"> Account Home</a></li>
              <li><i className="lni-wallet"></i> <a href="account-myads">My Ads</a></li>
              <li><i className="lni-heart"></i><a href="account-favourite-ads"> Favourite ads</a></li>
              <li><i className="lni-folder"></i><a href="account-archived-ads"> Archived</a></li>
              <li><i className="lni-lock"></i><a href="login"> Log In</a></li>
              <li><i className="lni-user"></i><a href="signup"> Signup</a></li>
              <li><i className="lni-reload"></i><a href="forgot-password"> Forgot Password</a></li>
              <li><i className="lni-close"></i><a href="account-close">Account close</a></li>
            </ul>
          </li>
        </ul>
      
	
      </nav>
			</div>
      
  );
};

export default template;
