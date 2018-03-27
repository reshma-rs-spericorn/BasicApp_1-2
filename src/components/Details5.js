import React, { Component } from "react";
import {
    Route,
    NavLink,
    BrowserRouter as Router
  } from "react-router-dom";
import Mycart from "./Mycart";
class Details5 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
      show: true
    };
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
        {/*<Button propsname = {"My Cart: "+this.state.clicks}>
          </Button>*/}
        <div className="details5 details ">
          <div className="detail">
            <h2>Moto E4 Plus (Fine Gold, 32GB)</h2>
            <p className="price">Deal price: <b> $60 </b></p>
            <b>Cash on Delivery eligible.</b>
            <h5>11% OFF</h5>
            <p>The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.<a href="http://forum.kirupa.com">forums</a>.
            </p>
            
            <div class="middle">
                <button onClick={this.IncrementItem} class="button1">Add to Cart</button>
                <button onClick={this.DecreaseItem} class="button1">Remove From Cart</button>  
                <button className="button1"><NavLink to="/mycart">MY Cart: {this.state.clicks}</NavLink></button>  
                <Route path="/mycart" component={Mycart}/>            </div>
            </div>
        </div>
      </div>
    );
  }
}
 
export default Details5;