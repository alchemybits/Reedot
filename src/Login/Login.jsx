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
                    <input type="text" class="form-control"id="email" required="required" value={this.state.email} name="email" onChange={this.handleChange} />
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
  <div className="card alt">
    <div className="toggle" onClick={((e) => this.toggleClass(e))}></div>
    <h1 className="title">Registrate
      <div className="close" onClick={((e) => this.toggleClass(e))}></div>
    </h1>
    <form onSubmit={this.register}>
      <div className="input-container">
        <input type="text" id="rusername" required="required" value={this.state.name} name="name" onChange={this.handleChange}/>
        <label htmlFor="rusername">Nombre</label>
        <div className="bar"></div>
      </div>
      <div className="input-container">
        <input type="email" id="remail" required="required" value={this.state.email} name="email" onChange={this.handleChange}/>
        <label htmlFor="remail">Correo</label>
        <div className="bar"></div>
      </div>
      <div className="input-container">
        <input type="password" id="rpassword" required="required" value={this.state.password} name="password" onChange={this.handleChange}/>
        <label htmlFor="password">Contraseña</label>
        <div className="bar"></div>
      </div>
      <div className="input-container">
        <input type="password" id="rrpassword" required="required" value={this.state.rpassword} name="rpassword" onChange={this.handleChange}/>
        <label htmlFor="password">Confirmar Contraseña</label>
        <div className="bar"></div>
      </div>
      <div className="button-container">
        <button><span>Next</span></button>
      </div>
    </form>
  </div>

</div>

  );
};

export default template;

// <!-- Portfolio--><a id="portfolio" href="http://andytran.me/" title="View my portfolio!"><i className="fa fa-link"></i></a>
// <!-- CodePen--><a id="codepen" href="https://codepen.io/andytran/" title="Follow me!"><i className="fa fa-codepen"></i></a>


