import React, { Component } from 'react';
import Button from "./Button";
class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = { clicks: 0, show: true};
  }
  IncrementItem = () => {
    this.setState({ clicks: this.state.clicks + 1 });
  }
  DecreaseItem = () => {
    if(this.state.clicks > 0){
    this.setState({ clicks: this.state.clicks - 1 });
  }
  }
   render() {
    return (
      <div>
        <button onClick={this.IncrementItem} class="button1">Add to Cart</button>
        <button onClick={this.DecreaseItem} class="button1">Remove From Cart</button>
        <Button propsname = {this.state.clicks}>
        </Button>
      </div>
    )
   }
}

export default Cart;