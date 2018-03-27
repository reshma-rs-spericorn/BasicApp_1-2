import React, { Component } from 'react';
class Button extends React.Component {
    render() {
       return (
          <div className="container Button">
    
        <h1>{(this.props.propsname)}</h1>

           
          </div>
       );
    }
  }
  export default Button;