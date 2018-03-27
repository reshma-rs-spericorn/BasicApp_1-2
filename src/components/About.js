import React, { Component } from "react";
import Content from './Content';



 
class About extends Component {
  render() {
    return (
      <div>
        <h2>About</h2>
        <p>The easiest thing to do is post on
        our <a href="http://forum.kirupa.com">forums</a>.
        </p>
        <Content />

      </div>
    );
  }
}
 
export default About;