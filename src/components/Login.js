import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { FormErrors } from './FormErrors';

class Login extends Component {
    constructor (props) {
        super(props);
        this.state = {
          email: '',
          password: '',
          first: '',
          last: '',
          confirm:'',
          formErrors: {email: '', password: '', first:'', last:'', confirm:''},
          emailValid: false,
          passwordValid: false,
          firstValid: false,
          lastValid:false,
          confirmValid: false,
          formValid: false
        }

        this.toggleHidden = this.toggleHidden.bind(this)
      }


     toggleHidden () {
      
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
        let firstValid = this.state.firstValid;
        let lastValid = this.state.lastValid;
        let confirmValid = this.state.confirmValid;
        let passwordValid = this.state.passwordValid;
        
    
        switch(fieldName) {
          case 'email':
            emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
            fieldValidationErrors.email = emailValid ? '' : ' is invalid';
            break;
          case 'password':
            passwordValid = value.match(/^(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,50}$/) && value.length >= 7;
           
              fieldValidationErrors.password = passwordValid ? '' : ' is invalid';
            
         
            break;
          case 'first':
            firstValid = value.match(/^[a-zA-Z ]*$/);
            fieldValidationErrors.first = firstValid? '' : 'is invalid';
            break;
          case 'second':
            lastValid = value.match(/^[a-zA-Z ]*$/);
            fieldValidationErrors.last = lastValid? '' : 'is invalid';
            break;
          case 'confirm':
            confirmValid = value.match(this.state.password)
            fieldValidationErrors.confirm = confirmValid? '' : 'is not matching';
          default:
            break;
        }
        this.setState({formErrors: fieldValidationErrors,
                        emailValid: emailValid,
                        firstVallid: firstValid,
                        lastValid: lastValid,
                        confirmValid: confirmValid,
                        passwordValid: passwordValid
                      }, this.validateForm);
      }
    
      validateForm() {
        this.setState({formValid: this.state.emailValid && this.state.confirmValid && this.state.passwordValid && this.state.firstValid && this.state.lastValid});
      }
    
      errorClass(error) {
        return(error.length === 0 ? '' : 'has-error');
      }
   render() {
      return (
        <div>
          <form className="demoForm">
              <div className="Login">
                  <div className="login_bg"></div>
                  <div class="tags11">
                      <h1 className="contacts">Sign In</h1>
                      <div className={`form-group ${this.errorClass(this.state.formErrors.first)}`}> 
                          <input type="text" required name="first" className="form-input firstname" placeholder="Firstname" value={this.state.first}
                          onChange={this.handleUserInput}/>
                          <p className="firstn"> Only Alphabets</p>
                      </div>  
                      <br/>
                      <div className={`form-group ${this.errorClass(this.state.formErrors.last)}`}> 
                          <input type="text" required name="last" className="form-input lastname" placeholder="Lastname" value={this.state.last}
                          onChange={this.handleUserInput}/>
                          <p className="lastn"> Only Alphabets</p>
                      </div>  
                      <br/>
                      <div className={`form-group ${this.errorClass(this.state.formErrors.email)}`}> 
                          <input type="email" required name="email" className="form-input mail" placeholder="Email" value={this.state.email}
                          onChange={this.handleUserInput}/>
                          <p className="mailn"> Include @</p>
                      </div>  
                      <br/>
                      <div className={`form-group ${this.errorClass(this.state.formErrors.password)}`}>
                          <input type="password" required className="form-input pswrd" name="password"
                          placeholder="Password"
                          value={this.state.password}
                          onChange={this.handleUserInput}  
                        />
                          <p className="passn"> 
                            <ul>
                              
                              <li>Atleast one capital letter- </li>
                              <li>Atleast one number- </li>
                              <li>Atleast one special character-</li>
                              <li> six Characters Minimum- </li>
                              
                            </ul>
                          </p>
                      </div> 
                      <br/>

                      <br/>
                      <div className={`form-group ${this.errorClass(this.state.formErrors.confirm)}`}>
                          <input type="password" required className="form-input" name="confirm"
                          placeholder="Confirm Password"
                          value={this.state.confirm} 
                          onChange={this.handleUserInput} />
                      </div>             
                      <FormErrors formErrors={this.state.formErrors} />
                      <br/>
                      <button type="submit" className="btn btn-primary" disabled={!this.state.formValid}>Sign In</button>
                      
                      <p>Don't have an account?? <a href=""> Sign UP</a></p>
                  </div>
              </div>
            
          </form>
        </div>
      );
   }
}
export default Login;

