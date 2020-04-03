import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './Login.scss';

import FormInput from '../../components/FormInput/FormInput';
import FormButton from '../../components/FormButton/FormButton';

import { loginUser } from '../../redux/actions/auth';

const Login = ({ loginUser, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;

  const handleChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();

    loginUser(formData);
  };

  //Redirect if logged in
  if (isAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <div className="Login">
      <h2 className="Login-title">Sign In</h2>
      <span className="Login-subtitle">
        Sign in with your email and password
      </span>
      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          value={email}
          handleChange={handleChange}
          label="email"
          required
        />
        <FormInput
          name="password"
          type="password"
          value={password}
          handleChange={handleChange}
          label="password"
          required
        />

        <div className="buttons">
          <FormButton type="submit">Sign in</FormButton>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  loginUser: body => dispatch(loginUser(body))
});

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
