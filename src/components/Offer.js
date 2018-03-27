import React, { Component } from 'react';
import Clock from './Clock';
class Offer extends Component {
    constructor(props) {
      super(props);
      this.state = { deadline: 'March, 22, 2018' };
  }
    render() {
      return (
        <div className="Offer">
          <div className="offer_bg">
          </div>
          <div class="tag"><h2>Deal of the Day</h2>
          <Clock deadline={ this.state.deadline }/></div>
        </div>
      );
  
    }
  }
  export default Offer;