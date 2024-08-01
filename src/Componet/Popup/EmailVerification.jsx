// EmailVerification.jsx
import React from 'react';
import './EmailVerification.css';
import greenTeekmark from '../../img/green.jpg'; // Adjust the path as needed
import { Link } from 'react-router-dom';

const EmailVerification = ({ onClose, email }) => {
  

  return (
    <div className="message-container">
      <div className="box">
        <button className="close-button">
          <Link to="/loginfinal">&times;</Link>
        </button>
        <div className="green-img">
          <img src={greenTeekmark} alt="example" id="green" />
        </div>
        <h2>Verify your email address</h2>
        <p>Verification link has been sent to ! {email}</p>
        <p>please confirm that you want to use this as your Vital account
          email address. Once it's done, you will be able to start Coding!
        </p>
      </div>
    </div>
  );
};

export default EmailVerification;
