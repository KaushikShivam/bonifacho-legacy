import React, { useState } from 'react';

import FormInput from './../FormInput/FormInput';
// import CustomButton from './../CustomButton';

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

  return (
    <form>
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
    </form>
  );
};

export default ArtworkForm;
