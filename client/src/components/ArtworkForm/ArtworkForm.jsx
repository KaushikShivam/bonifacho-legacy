import React, { useState } from 'react';
import { connect } from 'react-redux';

import './ArtworkForm.scss';

import FormInput from './../FormInput/FormInput';
import FormButton from './../FormButton/FormButton';

import { createArtwork } from './../../redux/actions/artwork';

const ArtworkForm = ({ createArtwork }) => {
  const [formData, setFormData] = useState({
    name: '',
    edition: '',
    price: '',
    category: '',
    image: ''
  });

  const { name, edition, price, category, image } = formData;

  const handleChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    const reqBody = { ...formData, price: parseInt(price) };
    createArtwork(reqBody).then(() =>
      setFormData({
        name: '',
        edition: '',
        price: '',
        category: '',
        image: ''
      })
    );
  };

  return (
    <main className="ArtworkForm">
      <h2 className="ArtworkForm__title">Create Your Artwork</h2>
      <span className="ArtworkForm__subtitle">All fileds are mandatory</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          name="name"
          type="text"
          value={name}
          handleChange={handleChange}
          label="Name"
          required
        />
        <FormInput
          name="image"
          type="text"
          value={image}
          handleChange={handleChange}
          label="Image"
          required
        />
        <FormInput
          name="edition"
          type="text"
          value={edition}
          handleChange={handleChange}
          label="Edition"
          required
        />
        <FormInput
          name="price"
          type="number"
          value={price}
          handleChange={handleChange}
          label="Price"
          required
        />
        <FormInput
          name="category"
          type="text"
          value={category}
          handleChange={handleChange}
          label="Category"
          required
        />
        <FormButton type="submit">Create</FormButton>
      </form>
    </main>
  );
};

const mapDispatchToProps = dispatch => ({
  createArtwork: body => dispatch(createArtwork(body))
});

export default connect(null, mapDispatchToProps)(ArtworkForm);
