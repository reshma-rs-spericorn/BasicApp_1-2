import React, { Component } from 'react';
import Content from './Content';
import Info from './Info';
import Offer from './Offer';
import Media from './Media';
import Header from './Header';
import Gallery from './Gallery';

var stations = [
    {call:'station one',frequency:'000'},
    {call:'station two',frequency:'001'}
  ];
class Home extends Component {
 
   render() {
      return (
         <div>
            <Header />
            <Content />
            <Info />
            <Offer />
            <Media />
         </div>
      );
   }
}
export default Home;