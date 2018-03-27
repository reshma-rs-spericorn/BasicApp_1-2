import React, { Component } from 'react';
import {
  Route,
  NavLink,
  BrowserRouter as Router
} from "react-router-dom";
import Details1 from './Details1';

var data = {
  content: {
      list: [
        {
          "id": 1,
          "name": "Espoir Mens ESP12457 Analog Blue Dial Watch",
          "price": "$23",
          "image": "https://images-na.ssl-images-amazon.com/images/I/71X-m4MRMFL._UL1500_.jpg",
          "category": "Watches",
          "link": "details1"
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
class Info extends React.Component {

    render() {
       return (
          <div className="container img_container Info">
            <div class="row"> 
              <div class="column">
                
                <div>
                  <ul className="image-list-home">
                  {
                    data.content.list.map(function(item){
                      
                      return <div>
                      <li><NavLink to={item.link}><img src={item.image} className="image" width="160px" height="250px"/></NavLink></li>
                      <Route path={item.link} render={(props) => <Details1 {...props} isAuthed={true} />}/>
                      </div>;
                    })
                  }
                  </ul>  
                </div>
              </div>
            </div>
          </div>
       );
    }
  }
  



  export default Info;