import React from 'react';
import './Service.scss';

const Service = ({ icon, title, description }) => {
  return (
    <div className="Service">
      <img src={icon} alt="icon" />
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
};

export default Service;
