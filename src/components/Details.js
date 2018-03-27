import React, { Component } from "react";
import {
  Route,
  NavLink,
  BrowserRouter as Router
} from "react-router-dom";
import Mycart from "./Mycart";

var data = {
  content: {
      list: [
        {
          "id": 1,
          "name": "Espoir Mens ESP12457 Analog Blue Dial Watch",
          "price": "$23",
          "image": "https://images-na.ssl-images-amazon.com/images/I/71X-m4MRMFL._UL1500_.jpg",
          "category": "Watches",
          "link": "details"
        },
        {
          "id": 2,
          "name": "Ultra-Stable 4-Step Foldable Aluminium Ladder",
          "price": "$10",
          "image": "https://images-na.ssl-images-amazon.com/images/I/31CUneKRafL.jpg",
          "category": "Ladders",
          "link": "details2"
        },
        {
          "id": 3,
          "name": "A Girl Like That",
          "price": "$5",
          "image": "https://images-na.ssl-images-amazon.com/images/I/51gcV4lqQvL._SX310_BO1,204,203,200_.jpg",
          "category": "Books",
          "link": "details3"
        },
        {
          "id": 4,
          "name": "Funskool-Fundough Fun Pack, Multi Colour",
          "price": "$12",
          "image": "https://images-eu.ssl-images-amazon.com/images/I/41hJiWcpCcL._AC_US218_.jpg",
          "category": "Colors",
          "link": "details4"
        },
        {
          "id": 5,
          "name": "Moto E4 Plus (Fine Gold, 32GB)",
          "price": "$56",
          "image": "https://images-eu.ssl-images-amazon.com/images/I/41J2rZjekoL._AC_US218_.jpg",
          "category": "Phones",
          "link": "details5"
        }
      ]
   }
};
class Details extends Component {
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
        {  
          /*<Button propsname = {"My Cart: "+this.state.clicks}>
          </Button>*/
          data.content.list.map(function(item){  
            return <div>
              <div className="details1 details2 details3 detail4 detail5 details ">
                <div className="detail">
                  <h2>{item.name}</h2>
                  <p className="price">Deal price: <b> {item.price} </b></p>
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
          })
        }
      </div>
    );
  }
}
 
export default Details;