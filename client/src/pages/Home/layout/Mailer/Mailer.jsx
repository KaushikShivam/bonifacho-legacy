import React from 'react';
import MailerImg from '../../assets/email.png';

import './Mailer.scss';

const Mailer = () => {
  return (
    <div className="Mailer">
      <div className="Mailer-content">
        <h2>GET THE LATEST</h2>
        <p>
          Join our mailing list to stay up-to-date on new arrivals, promotions
          and others.
        </p>
      </div>
      <div className="Mailer-email">
        <img src={MailerImg} alt="mailer" />
      </div>
    </div>
  );
};

export default Mailer;
