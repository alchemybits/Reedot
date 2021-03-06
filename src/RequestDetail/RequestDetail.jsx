import "./RequestDetail.css";
import React from "react";
import PlaceholderComponent from "../PlaceholderComponent/PlaceholderComponent";
import LazyLoad from 'react-lazyload';

function template() {
  var today = new Date();
  return (
    <div className="add-details">
      <div class="section-padding">
      <div class="container">
      <h1>REQUEST DETAIL</h1>
        {/* <!-- Product Info Start --> */}
        <div class="product-info row">
          <div class="col-lg-7 col-md-12 col-xs-12">
            <div class="details-box ads-details-wrapper">
            <div id="owl-demo" class="owl-theme">
            <div class="item">
                  <div class="product-img">
                    <LazyLoad height={200} offset={100} placeholder={<PlaceholderComponent />}>
                      <img class="img-fluid" src={this.props.productoDetail.url} alt="" />
                    </LazyLoad>
                  </div>
                  <span class="price">{this.props.productoDetail.precio} /per Hour</span>
                </div>
            </div>
            </div>
          </div>
          <div class="col-lg-5 col-md-12 col-xs-12">
            <div class="details-box">
              <div class="ads-details-info">
                <h2>{this.props.productoDetail.nombre}</h2>
                <p class="mb-2">{this.props.productoDetail.desc}</p>
                <div class="details-meta">
                  <span><a href="#"><i class="lni-alarm-clock"></i>{this.props.productoDetail.dateAdded?this.props.productoDetail.dateAdded:today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear()}</a></span>
                  <span><a href="#"><i class="lni-map-marker"></i>{this.props.productoDetail.city}</a></span>
                  <span><a href="#"><i class="lni-eye"></i> {this.props.productoDetail.views?this.props.productoDetail.views:0}</a></span>
                </div>
                {/* <h4 class="title-small mb-3">Specification:</h4>
                <ul class="list-specification">
                  <li> <i class="lni-check-mark-circle"></i> 256GB PCIe flash storage</li>
                  <li> <i class="lni-check-mark-circle"></i> 2.7 GHz dual-core Intel Core i5</li>
                  <li> <i class="lni-check-mark-circle"></i> Turbo Boost up to 3.1GHz</li>
                  <li> <i class="lni-check-mark-circle"></i> Intel Iris Graphics 6100</li>
                  <li> <i class="lni-check-mark-circle"></i> 8GB memory</li>
                  <li> <i class="lni-check-mark-circle"></i> 10 hour battery life</li>
                  <li> <i class="lni-check-mark-circle"></i> 13.3" Retina Display</li>
                  <li> <i class="lni-check-mark-circle"></i> 1 Year international warranty</li>
                </ul> */}
              </div>
              <ul class="advertisement mb-4">
                <li>
                <p><strong>Type:</strong> <a href="#">{this.props.productoDetail.cat}</a>, <a href="#">For sale</a></p>
                </li>                
                
              </ul>
              <div class="ads-btn mb-4">
                <a href="#" class="btn btn-common btn-reply"><i class="lni-user"></i> {this.props.productoDetail.nombre}</a>
                <a href="#" class="btn btn-common"><i class="lni-phone-handset"></i> {this.props.productoDetail.phone}</a>
              </div>
              <div class="share">
                <span>Share: </span>
                <div class="social-link">  
                  <a class="facebook" href="#"><i class="lni-facebook-filled"></i></a>
                  <a class="twitter" href="#"><i class="lni-twitter-filled"></i></a>
                  <a class="linkedin" href="#"><i class="lni-linkedin-fill"></i></a>
                  <a class="google" href="#"><i class="lni-google-plus"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Product Info End --> */}

        {/*<!-- Product Description Start --> */}
        {/* <div class="description-info">
          <div class="row">
            <div class="col-lg-8 col-md-6 col-xs-12">
              <div class="description">
                <h4>Description</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-xs-12">
              <div class="short-info">
                <h4>Short Info</h4>
                <ul>
                  <li><a href="#"><i class="lni-users"></i> More ads by <span>User</span></a></li>
                  <li><a href="#"><i class="lni-printer"></i> Print this ad</a></li>
                  <li><a href="#"><i class="lni-reply"></i> Send to a friend</a></li>
                  <li><a href="#"><i class="lni-warning"></i> Report this ad</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div> */}
        {/* <!-- Product Description End --> */}
      </div>    
    </div>
    </div>
  );
};

export default template;
