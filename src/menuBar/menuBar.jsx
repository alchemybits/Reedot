import "./menuBar.css";
import React from "react";
import Logo from "../logo/logo";

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
            <link to="index" class="navbar-brand"><img src="assets/img/logo.png" alt="" /></link>
          </div>
          <div class="collapse navbar-collapse" id="main-navbar">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <link class="nav-link" to="index">
                  Home
                </link>
              </li>
              <li class="nav-item">
                <link class="nav-link" to="category">
                  Categories
                </link>
              </li>
              <li class="nav-item dropdown">
                <link class="nav-link dropdown-toggle" to="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Listings
                </link>
                <div class="dropdown-menu">
                  <link class="dropdown-item" to="adlistinggrid">Ad Grid</link>
                  <link class="dropdown-item" to="adlistinglist">Ad Listing</link>
                  <link class="dropdown-item" to="ads-details">Listing Detail</link>
                </div>
              </li>
              <li class="nav-item dropdown">
                <link class="nav-link dropdown-toggle" to="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Pages 
                </link>
                <div class="dropdown-menu">
                  <link class="dropdown-item" to="about">About Us</link>
                  <link class="dropdown-item" to="services">Services</link>
                  <link class="dropdown-item" to="ads-details">Ads Details</link>
                  <link class="dropdown-item" to="post-ads">Ads Post</link>
                  <link class="dropdown-item" to="pricing">Packages</link>
                  <link class="dropdown-item" to="testimonial">Testimonial</link>
                  <link class="dropdown-item" to="faq">FAQ</link>
                  <link class="dropdown-item" to="404">404</link>
                </div>
              </li>
              <li class="nav-item dropdown">
                <link class="nav-link dropdown-toggle" to="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Blog 
                </link>
                <div class="dropdown-menu">
                  <link class="dropdown-item" to="blog">Blog - Right Sidebar</link>
                  <link class="dropdown-item" to="blog-left-sidebar">Blog - Left Sidebar</link>
                  <link class="dropdown-item" to="blog-grid-full-width"> Blog full width </link>
                  <link class="dropdown-item" to="single-post">Blog Details</link>
                </div>
              </li>
              <li class="nav-item">
                <link class="nav-link" to="contact">
                  Contact
                </link>
              </li>
            </ul>
            <ul class="sign-in">
              <li class="nav-item dropdown">
                <link class="nav-link dropdown-toggle" to="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="lni-user"></i> My Account</link>
                <div class="dropdown-menu">
                  <link class="dropdown-item" to="account-profile-setting"><i class="lni-home"></i> Account Home</link>
                  <link class="dropdown-item" to="account-myads"><i class="lni-wallet"></i> My Ads</link>
                  <link class="dropdown-item" to="account-favourite-ads"><i class="lni-heart"></i> Favourite ads</link>
                  <link class="dropdown-item" to="account-archived-ads"><i class="lni-folder"></i> Archived</link>
                  <link class="dropdown-item" to="login"><i class="lni-lock"></i> Log In</link>
                  <link class="dropdown-item" to="signup"><i class="lni-user"></i> Signup</link>
                  <link class="dropdown-item" to="forgot-password"><i class="lni-reload"></i> Forgot Password</link>
                  <link class="dropdown-item" to="account-close"><i class="lni-close"></i>Account close</link>
                </div>
              </li>
            </ul>
            <link class="tg-btn" to="post-ads">
              <i class="lni-pencil-alt"></i> Post An Ad
            </link>
          </div>
        </div>

        
        <ul class="mobile-menu">
          <li>
            <link class="active" to="index">Home</link>
          </li>
          <li>
            <link to="category">Categories</link>
          </li>
          <li>
            <link to="#">
            Listings
            </link>
            <ul class="dropdown">
              <li><link to="adlistinggrid">Ad Grid</link></li>
              <li><link to="adlistinglist">Ad Listing</link></li>
              <li><link to="ads-details">Listing Detail</link></li>
            </ul>
          </li>
          <li>
            <link to="#">Pages</link>
            <ul class="dropdown">
              <li><link to="about">About Us</link></li>
              <li><link to="services">Services</link></li>
              <li><link to="ads-details">Ads Details</link></li>
              <li><link to="post-ads">Ads Post</link></li>
              <li><link to="pricing">Packages</link></li>
              <li><link to="testimonial">Testimonial</link></li>
              <li><link to="faq">FAQ</link></li>
              <li><link to="404">404</link></li>
            </ul>
          </li>
          <li>
            <link to="#">Blog</link>
            <ul class="dropdown">
              <li><link to="blog">Blog - Right Sidebar</link></li>
              <li><link to="blog-left-sidebar">Blog - Left Sidebar</link></li>
              <li><link to="blog-grid-full-width"> Blog full width </link></li>
              <li><link to="single-post">Blog Details</link></li>
            </ul>
          </li>
          <li>
            <link to="contact">Contact Us</link>
          </li>
          <li>
            <link>My Account</link>
            <ul class="dropdown">
              <li><link to="account-profile-setting"><i class="lni-home"></i> Account Home</link></li>
              <li><link to="account-myads"><i class="lni-wallet"></i> My Ads</link></li>
              <li><link to="account-favourite-ads"><i class="lni-heart"></i> Favourite ads</link></li>
              <li><link to="account-archived-ads"><i class="lni-folder"></i> Archived</link></li>
              <li><link to="login"><i class="lni-lock"></i> Log In</link></li>
              <li><link to="signup"><i class="lni-user"></i> Signup</link></li>
              <li><link to="forgot-password"><i class="lni-reload"></i> Forgot Password</link></li>
              <li><link to="account-close"><i class="lni-close"></i>Account close</link></li>
            </ul>
          </li>
        </ul>
      
	
      </nav>
			</div>
      
  );
};

export default template;
