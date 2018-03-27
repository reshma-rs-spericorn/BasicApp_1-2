import React, { Component } from 'react';
import {
    Route,
    NavLink,
    BrowserRouter as Router
  } from "react-router-dom";
class CartButton extends React.Component{
    render() { return <NavLink to={this.props.to} />; }
}

export default CartButton;