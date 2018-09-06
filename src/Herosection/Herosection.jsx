import "./Herosection.css";
import React from "react";

function template() {
  return (
    <div className="herosection">
      {/* <!-- Hero Area Start --> */}
      <div id="hero-area">
        <div class="overlay"></div>
        <div class="container">
          <div class="row">
            <div class="col-md-12 col-lg-12 col-xs-12 text-center">
              <div class="contents">
                <h1 class="head-title">Welcome to <span class="year">Reedot</span></h1>
                <p>Buy And Sell Everything From Used Cars To Mobile Phones And Computers, <br /> Or Search For Property, Jobs And More</p>
                <div class="search-bar">
                  <fieldset>
                    <form class="search-form">
                      <div class="form-group tg-inputwithicon">
                        <i class="lni-tag"></i>
                        <input type="text" name="customword" class="form-control" placeholder="What are you looking for" />
                      </div>
                      <div class="form-group tg-inputwithicon">
                        <i class="lni-map-marker"></i>
                        <div class="tg-select">
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
                      <div class="form-group tg-inputwithicon">
                        <i class="lni-layers"></i>
                        <div class="tg-select">
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
                      <button class="btn btn-common" type="button"><i class="lni-search"></i></button>
                    </form>
                  </fieldset>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Hero Area End --> */}
    </div>
  );
};

export default template;
