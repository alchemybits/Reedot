import React from 'react';
import * as firebase from 'firebase';
import Login from './Login/Login';
import Signup from './Signup/Signup';
import Home from './Home/Home';
import Loading from './Loading/Loading';
import Landing from './Landing/Landing';
import Category from './Category/Category';
import MenuBar from "./menuBar/menuBar";
import Herosection from "./Herosection/Herosection";
import Postadd from "./Postadd/Postadd";

import { connect } from 'react-redux';


import {  BrowserRouter as Router, Route, Switch, Redirect, Link } from 'react-router-dom'
// import { firebaseAuth } from './config/constants'


  // Initialize Firebase


function PrivateRoute ({component: Component, authed,user, ...rest}) {
  console.log("...........",user);
  return (
    <Route
      {...rest}
      render={(props) => authed === true
        ? <Component {...props} user={user} />
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
        : <Redirect to='/Home' />}
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
          user: user.displayName,
          
        })
      } else {
        this.setState({
          authed: false,
          loading: false,
          user: '',
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
          <MenuBar islogged={this.state.authed} ></MenuBar>
          <Herosection router={this.context.router} ></Herosection>
            

          </header>
          {/* <!-- Header Area wrapper End --> */}

          
        </Switch>
        
        <Switch>
            
            
            <PrivateRoute authed={this.state.authed} user={this.state.user} path='/post-ads' component={Postadd} />
            <PublicRoute authed={this.state.authed} path='/App' component={Home} />
            <PublicRoute authed={this.state.authed} path='/login' component={Login} />
            <PublicRoute authed={this.state.authed} path='/signup' component={Signup} />
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