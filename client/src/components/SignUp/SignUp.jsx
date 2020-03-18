import React, { useState } from 'react';
import './SignUp.scss';

import FormButton from '../FormButton/FormButton';
import FormInput from './../FormInput/FormInput';

const SignUp = () => {
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
      alert("passwords don't match");
      return;
    }

    console.log(formData);
  };

  return (
    <div className="SignUp">
      <h2 className="SignUp-title">I do not have a account</h2>
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

export default SignUp;
