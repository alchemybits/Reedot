import React from 'react';
import * as firebase from 'firebase';
import Login from './Login/Login';
import Home from './Home/Home';
import Loading from './Loading/Loading';
import Landing from './Landing/Landing';
import Category from './Category/Category';
import MenuBar from "./menuBar/menuBar";

import { connect } from 'react-redux';


import {  BrowserRouter as Router, Route, Switch, Redirect, Link } from 'react-router-dom'
// import { firebaseAuth } from './config/constants'


  // Initialize Firebase


function PrivateRoute ({component: Component, authed, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => authed === true
        ? <Component {...props} />
        : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
    />
  )
}

function mapStateToProps(state) {
  return {
    count: state.count
  };
}

function PublicRoute ({component: Component, authed, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => authed === false
        ? <Component {...props} />
        : <Redirect to='/App' />}
    />
  )
}



class App extends React.Component {
  state = {
    authed: false,
    loading: true,
  }

  componentDidMount(){
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          authed: true,
          loading: false,
        })
      } else {
        this.setState({
          authed: false,
          loading: false
        })
      }
    })

  }

  componentWillUnmount () {
    this.removeListener()
  }

  render() {
    return this.state.loading === true ? <Loading /> : (
      
      <Router>
        <div>
        <Switch>
          {/* <!-- Header Area wrapper Starts --> */}
    <header id="header-wrap">
     <MenuBar></MenuBar>

      {/* <!-- Hero Area Start --> */}
      <div id="hero-area">
        <div class="overlay"></div>
        <div class="container">
          <div class="row">
            <div class="col-md-12 col-lg-12 col-xs-12 text-center">
              <div class="contents">
                <h1 class="head-title">Welcome to <span class="year">ClassiAlly</span></h1>
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

    </header>
    {/* <!-- Header Area wrapper End --> */}

          
        </Switch>
        
        <Switch>
            
          
            <PublicRoute authed={this.state.authed} path='/App' component={Home} />
            <PublicRoute authed={this.state.authed} path='/login' component={Login} />
            <PublicRoute authed={this.state.authed} path='/Category' component={Category} />
            <Route path = "/" component = {Home}/>
          
        </Switch>
        </div>
      </Router>

    );
  }
}

export default connect(mapStateToProps)(App);

// <Route path = "/OrderTracker" component = {Tracker}/>