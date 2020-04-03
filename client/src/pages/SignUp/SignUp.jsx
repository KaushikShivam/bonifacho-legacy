import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './SignUp.scss';

import FormButton from '../../components/FormButton/FormButton';
import FormInput from '../../components/FormInput/FormInput';

import { setAlert } from '../../redux/actions/alert';
import { registerUser } from '../../redux/actions/auth';

const SignUp = ({ setAlert, registerUser, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    password: '',
    passwordConfirm: ''
  });

  const { name, email, role, password, passwordConfirm } = formData;

  const handleChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();

    if (password !== passwordConfirm) {
      setAlert('Passwords do not match', 'error');
    }
    registerUser(formData);
  };

  //Redirect if logged in
  if (isAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <div className="SignUp">
      <h2 className="SignUp-title">Register</h2>
      <span className="SignUp-subtitle">
        Sign up with your email and password
      </span>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          label="Full Name"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          type="text"
          name="role"
          value={role}
          onChange={handleChange}
          label="Role - Choose Artist or Collector"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="passwordConfirm"
          value={passwordConfirm}
          onChange={handleChange}
          label="Confirm Password"
          required
        />
        <FormButton type="submit">SIGN UP</FormButton>
      </form>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  setAlert: (status, message) => dispatch(setAlert(status, message)),
  registerUser: body => dispatch(registerUser(body))
});

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
