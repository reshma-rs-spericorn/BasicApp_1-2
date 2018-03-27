import React, { Component } from 'react';

import {
  Route,
  NavLink,
  BrowserRouter as Router
} from "react-router-dom";


class Nav extends Component {

  render() {
    return (
      <div className="Apps">
        <div className="Index_bg">
          <ul className="header">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/product">Product</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/login">Login</NavLink></li>
            <li><input type="text" name="search" placeholder="Search..."/></li>
            <li><NavLink to="/mycart">MyCart <span class="w3-badge w3-green">6</span></NavLink></li>
            <li><NavLink to="/signup">Signup</NavLink></li>
          </ul>
        </div>
      </div> 
    );
  }
}

export default Nav;