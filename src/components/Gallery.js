import React, { Component } from "react";
/* json url = https://api.myjson.com/bins/ektl7 */
var data = {
  content: {
      list: [
        {
          "id": 1,
          "name": "Espoir Mens ESP12457 Analog Blue Dial Watch",
          "price": "$23",
          "image": "https://images-na.ssl-images-amazon.com/images/I/71X-m4MRMFL._UL1500_.jpg",
          "category": "Watches"
        },
        {
          "id": 2,
          "name": "Ultra-Stable 4-Step Foldable Aluminium Ladder",
          "price": "$10",
          "image": "https://images-na.ssl-images-amazon.com/images/I/31CUneKRafL.jpg",
          "category": "Ladders"
        },
        {
          "id": 3,
          "name": "A Girl Like That",
          "price": "$5",
          "image": "https://images-na.ssl-images-amazon.com/images/I/51gcV4lqQvL._SX310_BO1,204,203,200_.jpg",
          "category": "Books"
        },
        {
          "id": 4,
          "name": "Funskool-Fundough Fun Pack, Multi Colour",
          "price": "$12",
          "image": "https://images-eu.ssl-images-amazon.com/images/I/41hJiWcpCcL._AC_US218_.jpg",
          "category": "Colors"
        },
        {
          "id": 5,
          "name": "Moto E4 Plus (Fine Gold, 32GB)",
          "price": "$56",
          "image": "https://images-eu.ssl-images-amazon.com/images/I/41J2rZjekoL._AC_US218_.jpg",
          "category": "Phones"
        }
      ]
   }
};

class Gallery extends React.Component { 
  /*render() {
    var people = data.content.people.map(function(person){
      return (
        <div>
          {person.name}
        </div>
      );
    });
    return (<div>{people}</div>);
  };*/
render(){
    return (
      <div>
         <ul>
        {
          data.content.list.map(function(item){
            return <div>{item.id} - {item.name}</div>;
          })
        }
        </ul>
        
      </div>
    );
  }

}

export default Gallery;