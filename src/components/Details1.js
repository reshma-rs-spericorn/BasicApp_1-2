import React, { Component } from "react";
import {
  Route,
  NavLink,
  BrowserRouter as Router
} from "react-router-dom";
import Mycart from "./Mycart";
class Details1 extends Component {
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
          
        <div className="details1 details ">
          <div className="detail">
            <h2>Espoir Mens ESP12457 Analog Blue Dial Watch</h2>
            <p className="price">Deal price: <b> $23 </b></p>
            <b>Cash on Delivery eligible.</b>
            <h5>Deal is 30% Claimed</h5>
            <p>The easiest thing to do is post on Lorem Ispsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            our <a href="http://forum.kirupa.com">forums</a>.
            </p>
            
            <div class="middle">
                <button onClick={this.IncrementItem} class="button1">Add to Cart</button>
                <button onClick={this.DecreaseItem} class="button1">Remove From Cart</button>  
                <button className="button1"><NavLink to="/mycart">MY Cart: {this.state.clicks}</NavLink></button>  
                <Route path="/mycart" component={Mycart}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
 
export default Details1;