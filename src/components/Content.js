import React, { Component } from 'react';
import {
  Route,
  NavLink,
  BrowserRouter as Router
} from "react-router-dom";

class Content extends React.Component {
    render() {
       return (
          <div className="container Content">
             <div className="InnerContent">
              <p>Lorem Ispsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
              <button className="button"><NavLink to="/readmore">Read MOre</NavLink></button>  
             </div>
             
          </div>
       );
    }
  }
  export default Content;