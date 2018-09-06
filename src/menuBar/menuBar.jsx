import "./menuBar.css";
import React from "react";
import {  BrowserRouter as Router, Route, Switch, Redirect, Link } from 'react-router-dom';
import Logo from "../logo/logo";

function guest(func){	
	// const add = (path == "/Collection" || path == "/collection" )?"":<span><i className="material-icons" ><Link to="/Collection">search</Link></i></span>;
	return (
		<div className="">
    <li class="dropdown-item"><i class="lni-lock"></i><Link to="login"> Log In</Link></li>
    <li class="dropdown-item"><i class="lni-user"></i><Link to="signup"> Signup</Link></li>
		
			
		</div>
	)
}

function logout(func){
	// const add = (path == "/Collection" || path == "/collection" )?"":<span><i className="material-icons"><Link to="/Collection">search</Link></i></span>;
	return (
		<div className="">
		<li class="dropdown-item" onClick={func}><i class="lni-close" ></i>Log out</li>
		</div>
	)
}



function template() {

  
  return (
		
    <div>
      
      <nav class="navbar navbar-expand-lg fixed-top scrolling-navbar">
        <div class="container">
          
          <div class="navbar-header">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#main-navbar" aria-controls="main-navbar" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
              <span class="lni-menu"></span>
              <span class="lni-menu"></span>
              <span class="lni-menu"></span>
            </button>
            <Link to="Home" class="navbar-brand"><h1>Reedot</h1></Link>
          </div>
          <div class="collapse navbar-collapse" id="main-navbar">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                
                  <Link class="nav-link" to="Home">Home</Link>
                
              </li>
              <li class="nav-item">
                
                  <Link class="nav-link" to="Category">Categories</Link>                  
                
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Listings
                </a>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="adlistinggrid.html">Ad Grid</a>
                  <a class="dropdown-item" href="adlistinglist">Ad Listing</a>
                  <a class="dropdown-item" href="ads-details">Listing Detail</a>
                </div>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Pages 
                </a>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="about">About Us</a>
                  <a class="dropdown-item" href="services">Services</a>
                  <a class="dropdown-item" href="ads-details">Ads Details</a>
                  <Link class="dropdown-item" to="post-ads">Ads Post</Link>
                  <a class="dropdown-item" href="pricing">Packages</a>
                  <a class="dropdown-item" href="testimonial">Testimonial</a>
                  <a class="dropdown-item" href="faq">FAQ</a>
                  <a class="dropdown-item" href="404">404</a>
                </div>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Blog 
                </a>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="blog">Blog - Right Sidebar</a>
                  <a class="dropdown-item" href="blog-left-sidebar">Blog - Left Sidebar</a>
                  <a class="dropdown-item" href="blog-grid-full-width"> Blog full width </a>
                  <a class="dropdown-item" href="single-post">Blog Details</a>
                </div>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="contact">
                  Contact
                </a>
              </li>
            </ul>
            <ul class="sign-in">
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="lni-user"></i> My Account</a>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="account-profile-setting"><i class="lni-home"></i> Account Home</a>
                  <a class="dropdown-item" href="account-myads"><i class="lni-wallet"></i> My Ads</a>
                  <a class="dropdown-item" href="account-favourite-ads"><i class="lni-heart"></i> Favourite ads</a>
                  <a class="dropdown-item" href="account-archived-ads"><i class="lni-folder"></i> Archived</a>
                  
                  
                  
                  {/* <a class="dropdown-item" href="forgot-password"><i class="lni-reload"></i> Forgot Password</a> */}
                  {this.props.islogged ? logout(this.signOut) : guest()}
                  
                </div>
              </li>
            </ul>
            <Link class="tg-btn" to="post-ads">
              <i class="lni-pencil-alt"></i> Post An Ad
            </Link>
          </div>
        </div>

        
        <ul class="mobile-menu">
          <li>
            <a class="active" href="index">Home</a>
          </li>
          <li>
            <a href="category">Categories</a>
          </li>
          <li>
            <a href="#">
            Listings
            </a>
            <ul class="dropdown">
              <li><a href="adlistinggrid">Ad Grid</a></li>
              <li><a href="adlistinglist">Ad Listing</a></li>
              <li><a href="ads-details">Listing Detail</a></li>
            </ul>
          </li>
          <li>
            <a href="#">Pages</a>
            <ul class="dropdown">
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
            <ul class="dropdown">
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
            <ul class="dropdown">
              <li><i class="lni-home"></i><a href="account-profile-setting"> Account Home</a></li>
              <li><i class="lni-wallet"></i> <a href="account-myads">My Ads</a></li>
              <li><i class="lni-heart"></i><a href="account-favourite-ads"> Favourite ads</a></li>
              <li><i class="lni-folder"></i><a href="account-archived-ads"> Archived</a></li>
              <li><i class="lni-lock"></i><a href="login"> Log In</a></li>
              <li><i class="lni-user"></i><a href="signup"> Signup</a></li>
              <li><i class="lni-reload"></i><a href="forgot-password"> Forgot Password</a></li>
              <li><i class="lni-close"></i><a href="account-close">Account close</a></li>
            </ul>
          </li>
        </ul>
      
	
      </nav>
			</div>
      
  );
};

export default template;
