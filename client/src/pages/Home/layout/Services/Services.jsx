import React from 'react';
import './Services.scss';

import Service from './../../../../components/Service/Service';
import cartIcon from './../../../../assets/cartIcon.png';
import paymentIcon from './../../../../assets/paymentIcon.png';
import phoneIcon from './../../../../assets/phoneIcon.png';

const Services = () => {
  return (
    <div className="Services">
      <Service
        icon={phoneIcon}
        title="Customer Service"
        description="+91-9711112922"
      />
      <Service
        icon={cartIcon}
        title="Free returns"
        description="30 days return policy + free return pickup"
      />
      <Service
        icon={paymentIcon}
        title="Secure Payment"
        description="Rest assurared about paying online"
      />
    </div>
  );
};

export default Services;
