import React, { Component } from 'react';

import {
  Route,
  NavLink,
  BrowserRouter as Router
} from "react-router-dom";
import Nav from './Nav';
import Home from "./Home";
import Product from "./Product";
import Contact from "./Contact";
import About from "./About";
import Login from "./Login";
import Footer from './Footer';
import Cart from './Cart';
import Mycart from './Mycart';
import ReadMore from './ReadMore';
import Details1 from "./Details1";
import Details2 from "./Details2";
import Details3 from "./Details3";
import Details4 from "./Details4";
import Details5 from "./Details5";
import Signup from "./Signup";

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <Nav/>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/product" component={Product}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/about" component={About}/>
            <Route path="/login" component={Login}/>
            <Route path="/mycart" component={Mycart}/>
            <Route path="/readmore" component={ReadMore}/>
            <Route path="/details1" component={Details1}/>
            <Route path="/details2" component={Details2}/>
            <Route path="/details3" component={Details3}/>
            <Route path="/details4" component={Details4}/>
            <Route path="/details5" component={Details5}/>
            <Route path="/signup" component={Signup}/>
          </div>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
