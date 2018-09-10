import "./Herosection.css";
import React from "react";

function template() {
  return (
    <div className="herosection">
      {/* <!-- Hero Area Start --> */}
      <div id="hero-area">
        <div className="overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-12 col-xs-12 text-center">
            <br/>
              {this.mainTitle()}
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Hero Area End --> */}
    </div>
  );
};

export default template;
