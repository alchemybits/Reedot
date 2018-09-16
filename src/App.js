import "./assets/assets/css/bootstrap.min.css";
import "./assets/assets/css/animate.css";
import "./assets/assets/fonts/line-icons.css";
import "./assets/assets/css/slicknav.css";
import "./assets/assets/css/nivo-lightbox.css";
import "./assets/assets/css/animate.css";
import "./assets/assets/css/owl.carousel.css";
import "./assets/assets/css/main.css";
import "./assets/assets/css/responsive.css";

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
import Request from "./Request/Request";
import Products from "./Products/Products";
import PostRequest from "./PostRequest/PostRequest";
import AddDetails from "./AddDetails/AddDetails";
import RequestDetail from "./RequestDetail/RequestDetail";



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
  
  return authed == false?(<Route {...rest} render={(props) =>  <Component {...props} /> } />  ) : (<Redirect to="/Home" />  );

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
          
          <div id="header-wrap">
          <MenuBar islogged={this.state.authed} ></MenuBar>
          <Herosection ></Herosection>
            

          </div>
          {/* <!-- Header Area wrapper End --> */}

          
        </Switch>
        
        <Switch>
            
            
            
            <PrivateRoute authed={this.state.authed} user={this.state.user} path='/post-ads' component={Postadd} />
            <Route path = "/AddDetails/:add" render = {routeProps => <AddDetails {...routeProps} />}/>
            <Route path = "/RequestDetail/:add" render = {routeProps => <RequestDetail {...routeProps} />}/>

            <Route path = "/Requests/:cat/:location" render = {routeProps => <Request {...routeProps} addItem={this.addItem} />}/>
            <Route path = "/Requests/:cat" render = {routeProps => <Request {...routeProps} addItem={this.addItem} />}/>
            <Route path = "/Requests" render = {routeProps => <Request {...routeProps} addItem={this.addItem} />}/>

            <Route path = "/products/:cat/:subcat" render = {routeProps => <Products {...routeProps} addItem={this.addItem} />}/>
            <Route path = "/products/:cat" render = {routeProps => <Products {...routeProps} addItem={this.addItem} />}/>
            <Route path = "/products" render = {routeProps => <Products {...routeProps} addItem={this.addItem} />}/>

            {/* <PublicRoute authed={this.state.authed} user={this.state.user} path='/requests' component={Request} />             */}
            <PrivateRoute authed={this.state.authed} user={this.state.user} path='/post-request' component={PostRequest} />            
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