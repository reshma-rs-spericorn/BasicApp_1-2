import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Form extends Component {
    constructor (props) {
        super(props);
       this.state = {textData: ""};
      }
    handleChange = (event) => {
        this.setState({textData: event.target.value});
    }
    handleSubmit = (event) => {
      alert("data: " + this.state.textData);
      event.preventDefault();
    }
     
   render() {
      return (
       <form onSubmit={this.handleSubmit}>
           <label>
               First Name:<input type="text" value={this.state.textData} onChange={this.handleChange}/>
           </label>
           <label>
               Last Name:<input type="text" value={this.state.textData} onChange={this.handleChange}/>
           </label>
           <label>
               Email:<input type="email" value={this.state.textData} onChange={this.handleChange}/>
           </label>
           <label>
               Password:<input type="password" value={this.state.textData} onChange={this.handleChange}/>
           </label>
           <label>
               Confirm Password:<input type="password" value={this.state.textData} onChange={this.handleChange}/>
           </label>
           <input type="submit" value="submit"/>
       </form>
      );
   }
}
export default Form;