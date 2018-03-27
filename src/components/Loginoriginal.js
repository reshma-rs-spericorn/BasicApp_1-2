import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { FormErrors } from './FormErrors';

class Login extends Component {
    constructor (props) {
        super(props);
        this.state = {
          email: '',
          password: '',
          formErrors: {email: '', password: ''},
          emailValid: false,
          passwordValid: false,
          formValid: false
        }
      }
    
      handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value},
                      () => { this.validateField(name, value) });
      }
    
      validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;
    
        switch(fieldName) {
          case 'email':
            emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
            fieldValidationErrors.email = emailValid ? '' : ' is invalid';
            break;
          case 'password':
            passwordValid = value.length >= 6;
            fieldValidationErrors.password = passwordValid ? '': ' is too short';
            break;
          default:
            break;
        }
        this.setState({formErrors: fieldValidationErrors,
                        emailValid: emailValid,
                        passwordValid: passwordValid
                      }, this.validateForm);
      }
    
      validateForm() {
        this.setState({formValid: this.state.emailValid && this.state.passwordValid});
      }
    
      errorClass(error) {
        return(error.length === 0 ? '' : 'has-error');
      }
   render() {
      return (
        <form className="demoForm">
            <div className="Login">
                <div className="login_bg"></div>
                <div class="tags1">
                    <h1 className="contacts">Sign In</h1>
                    <div className={`form-group ${this.errorClass(this.state.formErrors.email)}`}> 
                        <input type="email" required name="email" placeholder="Email/Username" value={this.state.email}
                        onChange={this.handleUserInput}/>
                    </div>  
                    <br/>
                    <div className={`form-group ${this.errorClass(this.state.formErrors.password)}`}>
                        <input type="password" className="form-control" name="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.handleUserInput}  />
                    </div>  
                    <FormErrors formErrors={this.state.formErrors} />
                    <br/>
                    <button type="submit" className="btn btn-primary" disabled={!this.state.formValid}>Sign up</button>
                    
                    <p>Don't have an account?? <a href=""> Sign Up</a></p>
                </div>
            </div>
        </form>
      );
   }
}
export default Login;