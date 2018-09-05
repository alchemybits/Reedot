import "./Login.css";
import React from "react";
import Logo from "../logo/logo";

function template() {
  return (
  	<div>


<div className="container">
  <div className="card"></div>

  <section class="login section-padding">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-5 col-md-12 col-xs-12">
            <div class="login-form login-area">
              <h3>
                Login Now
              </h3>
              <form role="form" class="login-form" onSubmit={this.userLogin} >
                <div class="form-group">
                  <div class="input-icon">
                    <i class="lni-user"></i>
                    <input type="text" class="form-control" id="email" required="required" value={this.state.email} name="email" onChange={this.handleChange} />
                  </div>
                </div> 
                <div class="form-group">
                  <div class="input-icon">
                    <i class="lni-lock"></i>
                    <input type="password" class="form-control" id="password" required="required" value={this.state.password} name="password" onChange={this.handleChange} />
                  </div>
                </div>                  
                <div class="form-group mb-3">
                  <div class="checkbox">
                    <input type="checkbox" name="rememberme" value="rememberme" />
                    <label>Keep me logged in</label>
                  </div>
                  <a class="forgetpassword" href="forgot-password.html">Forgot Password?</a>
                </div>
                <div class="text-center">
                  <button class="btn btn-common log-btn">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  
  </div>
  

</div>

  );
};

export default template;

// <!-- Portfolio--><a id="portfolio" href="http://andytran.me/" title="View my portfolio!"><i className="fa fa-link"></i></a>
// <!-- CodePen--><a id="codepen" href="https://codepen.io/andytran/" title="Follow me!"><i className="fa fa-codepen"></i></a>


