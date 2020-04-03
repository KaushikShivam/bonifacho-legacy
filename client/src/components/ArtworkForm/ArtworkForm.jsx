import React, { useState } from 'react';

import './ArtworkForm.scss';

import FormInput from './../FormInput/FormInput';
import FormButton from './../FormButton/FormButton';

const ArtworkForm = () => {
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
    console.log(reqBody);
  };

  return (
    <div className="ArtworkForm">
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
    </div>
  );
};

export default ArtworkForm;
