import "./Signup.css";
import React from "react";

function template() {
  return (
    <div className="signup">
          <section class="register section-padding">
		      <div class="container">
		        <div class="row justify-content-center">
		          <div class="col-lg-5 col-md-12 col-xs-12">
		            <div class="register-form login-area">
		              <h3>
		                Register
		              </h3>
		              <form class="login-form" onSubmit={this.checkInputs}>
		                <div class="form-group">
		                  <div class="input-icon">
		                    <i class="lni-user"></i>
		                    <input type="text" class="form-control" id="rusername" required="required" value={this.state.name} name="name" onChange={this.handleChange} />
		                  </div>
		                </div> 
		                <div class="form-group">
		                  <div class="input-icon">
		                    <i class="lni-envelope"></i>
		                    <input type="text"  class="form-control" id="remail" required="required" value={this.state.email} name="email" onChange={this.handleChange}/ >
		                  </div>
		                </div> 
		                <div class="form-group">
		                  <div class="input-icon">
		                    <i class="lni-lock"></i>
		                    <input type="password" class="form-control" id="rpassword" required="required" value={this.state.password} name="password" onChange={(event) => {this.handleChange(event); }}/>
		                  </div>
		                </div>  
		                <div class="form-group">
		                  <div class="input-icon">
		                    <i class="lni-lock"></i>
		                    <input type="password" class="form-control" id="rrpassword" required="required" value={this.state.rpassword} name="rpassword" onChange={(event) => {this.handleChange(event); }}/>
		                  </div>
		                </div>  
		                <div class="form-group mb-3">
		                  <div class="checkbox">
		                    <input type="checkbox" name="rememberme" value="rememberme" />
		                    <label>By registering, you accept our Terms & Conditions</label>
		                  </div>
		                </div>   
		                <div class="text-center">
		                  <button class="btn btn-common log-btn">Register</button>
		                </div>
		              </form>
		            </div>
		          </div>
		        </div>
		      </div>
		    </section>
    </div>
  );
};

export default template;
