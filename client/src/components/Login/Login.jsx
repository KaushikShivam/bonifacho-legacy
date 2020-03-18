import React, { Component } from 'react';
import './Login.scss';

import FormInput from './../FormInput/FormInput';
import FormButton from '../../components/FormButton/FormButton';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = async event => {
    event.preventDefault();
  };

  render() {
    return (
      <div className="Login">
        <h2 className="Login-title">I already have an account</h2>
        <span className="Login-subtitle">
          Sign in with your email and password
        </span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            handleChange={this.handleChange}
            label="email"
            required
          />
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="password"
            required
          />

          <div className="buttons">
            <FormButton type="submit">Sign in</FormButton>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
