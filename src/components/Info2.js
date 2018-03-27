import React, { Component } from 'react';
import {
  Route,
  NavLink,
  BrowserRouter as Router
} from "react-router-dom";
class Info extends React.Component {

    render() {
       return (
          <div className="container img_container Info">
            <div class="row"> 
              <div class="column">
              <NavLink to="/details1"><img src={require("./images/c1.jpg")} className="image" width="160px" height="250px"/></NavLink>
              <NavLink to="/details2"><img src={require("./images/c66.jpg")} className="image" width="160px" height="250px"/></NavLink>
              <NavLink to="/details3"><img src={require("./images/c2.jpg")} className="image" width="160px" height="250px"/></NavLink>
              <NavLink to="/details4"><img src={require("./images/c4.jpg")} className="image" width="160px" height="250px"/></NavLink>
              <NavLink to="/details5"><img src={require("./images/c5.jpg")} className="image" width="160px" height="250px"/></NavLink>  
              </div>
              <div className="content">
                
              </div>
            </div>
            
          </div>
       );
    }
  }

  export default Info;