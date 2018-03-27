import React, { Component } from "react";
import Details1 from './Details1';
class Mycart extends Component {
  render() {
    return (
      <div className="mycart_us">
        {this.props.clicks}
        <button className="button1">MY Cart: {this.props.clicks}</button>  
       My List
       </div>
    );
  }
}
 
export default Mycart;