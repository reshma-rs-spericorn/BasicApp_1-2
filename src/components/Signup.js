import React, { Component } from 'react';
import '../Password_strength.css';


import { FormErrors } from './FormErrors';
class RulesList extends React.Component {
  render() {
    return (
      <div>
        <ul className="passns">
          <li className={this.props.hasNumber}>
            At least one number (0-9)
              </li>
          <li className={this.props.hasLetter}>
            At least one letter (a-z)
              </li>
          <li className={this.props.isValidLength}>
            At least 6 characters
              </li>
          <li className={this.props.noSpecialChar}>
            No spaces, forward slashes (/) or double quote marks (")
              </li>
        </ul>
      </div>
    )
  }
}
//rules meter component
class RulesMeter extends React.Component {
  render() {
    return (
      <div>
        <span>{this.props.title}</span>
        <div className="meter-wrapper">
          <div className={this.props.className} style={{ width: this.props.meterWidth + '%' }}></div>
        </div>
      </div>
    )
  }
}

//password component
/*class Password extends React.Component {
  render() {
    return (
      <div>
        <div className={'form-group '}>
          <input type={this.props.type} required className="form-input pw"
            placeholder=" Enter Password" id="password" name="password"
            onChange={this.props.onChange} />
        </div>
      </div>
    )
  }
}*/



class Signup extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      email: '',
      password: '',
      first: '',
      last: '',
      confirm: '',
      formErrors: { email: '', password: '', first: '', last: '', confirm: '' },
      emailValid: false,
      passwordValid: false,
      firstValid: false,
      lastValid: false,
      confirmValid: '',
      formValid: false,
      show: false,
      type: 'password',
      checked: false,
      meterTitle: 'Invalid',
      meterClass: 'danger',
      meterWidth: 25,
      rules: {
        isValidLength: false,
        hasNumber: false,
        hasLetter: false,
        noSpecialChar: true

      }
    }
  }
  handleChange() {
    this.setState({
      show: !this.state.show
    })
  }

  onPasswordChange(e) {
    this.setState({
      rules: {
        hasNumber: e.target.value.match(/\d/) ? true : false,
        hasLetter: e.target.value.match(/[A-z]/) ? true : false,
        isValidLength: e.target.value.match(/^.{6,}$/) ? true : false,
        noSpecialChar: !e.target.value.match(/[ \/"]/) ? true : false,

      }
    }, function () {
      this.setMeterAttributes(this.state.rules);
    });
  }

  setMeterAttributes(rules) {
    var meterWidth = this.getMeterWidth(rules);
    this.setState({
      meterWidth: meterWidth,
      meterTitle: (100 === meterWidth ? "Valid Password" : "Invalid Password"),
      meterClass: (100 > meterWidth ? "danger" : "")
    });
  }
  getMeterWidth(rules) {
    var property_count = 0, valid_property_count = 0, property;
    for (property in rules) {
      if (rules.hasOwnProperty(property)) {
        property_count = property_count + 1;
        if (rules[property]) {
          valid_property_count = valid_property_count + 1;
        }
      }
    }
    return (valid_property_count / property_count) * 100;
  }

  getSingleRuleStatus(status) {
    if (status) {
      return "valid";
    }
    return "invalid";
  }

  onPasswordChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value,
      rules: {
        hasNumber: e.target.value.match(/\d/) ? true : false,
        hasLetter: e.target.value.match(/[A-z]/) ? true : false,
        isValidLength: e.target.value.match(/^.{6,}$/) ? true : false,
        noSpecialChar: !e.target.value.match(/[ \/"]/) ? true : false
      }
    }, function () {
      this.setMeterAttributes(this.state.rules);
    });
  }

  handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value
    },
      () => {
        this.validateField(name, value)
      });
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let firstValid = this.state.firstValid;
    let lastValid = this.state.lastValid;
    let confirmValid = this.state.confirmValid;
    let passwordValid = this.state.passwordValid;


    switch (fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : ' is invalid';
        break;
      case 'first':
        firstValid = value.match(/^[a-zA-Z ]*$/);
        fieldValidationErrors.first = firstValid ? '' : 'is invalid';
        break;
      case 'last':
        lastValid = value.match(/^[a-zA-Z ]*$/);
        fieldValidationErrors.last = lastValid ? '' : 'is invalid';
        break;
      case 'confirm':
     
        confirmValid = value.match(this.state.password)
        fieldValidationErrors.confirm = confirmValid ? '' : 'is not matching';
      default:
        break;
    }
    this.setState({
      formErrors: fieldValidationErrors,
      emailValid: emailValid,
      firstVallid: firstValid,
      lastValid: lastValid,
      confirmValid: confirmValid,
      passwordValid: passwordValid
    }, this.validateForm);
  }

  validateForm() {
    this.setState({ formValid: this.state.emailValid && this.state.confirmValid && this.state.passwordValid && this.state.firstValid && this.state.lastValid });
  }

  errorClass(error) {
    return (error.length === 0 ? '' : 'has-error');
  }
  render() {
    const content = this.state.show
      ? <div className="password-strength-widget ">
        <br /><br />
        <RulesMeter title={this.state.meterTitle} className={this.state.meterClass} meterWidth={this.state.meterWidth} />
        <RulesList
          isValidLength={this.getSingleRuleStatus(this.state.rules.isValidLength)}
          hasNumber={this.getSingleRuleStatus(this.state.rules.hasNumber)}
          hasLetter={this.getSingleRuleStatus(this.state.rules.hasLetter)}
          noSpecialChar={this.getSingleRuleStatus(this.state.rules.noSpecialChar)}
        />
      </div>
      : null;
    return (
      <div>
        <div class="row">
          <div class="column">
            <form className="demoForm">
              <div className="Login">
                <div className="login_bg"></div>
                <div class="tags11">
                  <h1 className="contacts">Sign Up</h1>
                  <div className={`form-group ${this.errorClass(this.state.formErrors.first)}`}>
                    <input type="text" required name="first" className="form-input firstname" placeholder="Firstname" value={this.state.first}
                      onChange={this.handleUserInput} />
                    <p className="firstn"> Only Alphabets</p>
                  </div>
                  <br />
                  <div className={`form-group ${this.errorClass(this.state.formErrors.last)}`}>
                    <input type="text" required name="last" className="form-input lastname" placeholder="Lastname" value={this.state.last}
                      onChange={this.handleUserInput} />
                    <p className="lastn"> Only Alphabets</p>
                  </div>
                  <br />
                  <div className={`form-group ${this.errorClass(this.state.formErrors.email)}`}>
                    <input type="email" required name="email" className="form-input mail" placeholder="Email" value={this.state.email}
                      onChange={this.handleUserInput} />
                    <p className="mailn"> format: xxx@xxx.xxx</p>
                  </div>
                  <br />
                  <div className={`form-group ${this.errorClass(this.state.formErrors.password)}`}>
                    <input type={this.state.type} placeholder=" Enter Password" name="password" className="form-input password" onChange={this.onPasswordChange.bind(this)}  show={this.state.show}
                      onClick={this.handleChange} />
                    {content}
                  </div>

                  <br />
                  <div className={`form-group ${this.errorClass(this.state.formErrors.confirm)}`}>
                    <input type="password" required className="form-input" name="confirm"
                      placeholder="Confirm Password"
                      value={this.state.confirm} maxlength={this.state.password.length}
                      onChange={this.handleUserInput} />
                  </div>
                  <br />
                  <button type="submit" className="btn btn-primary" >Sign In</button>
                  <p>Don't have an account?? <a href=""> Sign UP</a></p>
                </div>
              </div>
            </form>
          </div>
          <div class="column error">
            <h3><FormErrors formErrors={this.state.formErrors} /></h3>
          </div>
        </div>
      </div>
    );
  }
}


export default Signup;
