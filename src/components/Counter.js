import React, { Component } from 'react';
class Counter extends React.Component {
    render() {
       return (
          <div className="container Counter">
           Hello {this.props.updValue}
          </div>
       );
    }
  }
  export default Counter;