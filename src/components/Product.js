import React, { Component } from "react";
import Info from './Info';
class Product extends Component {
  render() {
    return (
      <div>
        <h2>Products</h2>
        <p>Mauris sem velit, vehicula eget sodales vitae,
        rhoncus eget sapien:</p>
        <Info />
      </div>
    );
  }
}
 
export default Product;