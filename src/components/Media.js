import React, { Component } from 'react';
class Media extends Component {
    render() {
      return (
        <div className="Media">
          <div className="Media_bg">
          <div className="container img_container ">
            <div class="row"> 
              <div class="column">
               <img src={require("./images/j1.png")} className="image"/>
                <img src={require("./images/j2.png")} className="image"/>
                <img src={require("./images/j3.png")} className="image"/>
                <img src={require("./images/j4.png")} className="image"/>
              </div>
            </div>
          </div>
          </div>
        </div>
      );
  
    }
  }
  export default Media;