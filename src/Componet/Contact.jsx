import React, { useState, useEffect } from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    phone: '',
  });

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleButtonClick = () => {
    console.log('Form data submitted:', formData);
    // You can add further logic for form submission here
  };

  useEffect(() => {
    const mapContainer = document.querySelector('.map-container');
    mapContainer.classList.add('fade-in');
  }, []);

  return (
    <div className="container">
      <div className="big-box">
        <div className="form-column">
          <h5 className="office-title">Get In Touch!</h5>
          <div className="input-form">
            <input
              className="input"
              placeholder="Enter Fullname"
              value={formData.fullname}
              onChange={(e) => handleInputChange('fullname', e.target.value)}
            />
            <span className="input-border" />
          </div>
          <div className="input-form">
            <input
              className="input"
              placeholder="Enter Email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
            />
            <span className="input-border" />
          </div>
          <div className="input-form">
            <input
              className="input"
              placeholder="+91 999999999"
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
            />
            <span className="input-border" />
          </div>
          <button
            type="submit"
            className={`btn12`}
            onClick={handleButtonClick}
          >
            Submit
          </button>
        </div>

        <div className="additional-box">
          <h2>Contact Details!</h2>
          <div className="contact-details">
            <div className="contact-item">
              <LocationOnIcon className="contact-icon" />
              <p>23 B Rangraj Nagar, Behind Market Yard, Solapur</p>
            </div>
            <div className="contact-item">
              <FontAwesomeIcon icon={faPhone} className="contact-icon" />
              <p>+91 7385111191, +91 7588996480</p>
            </div>
            <div className="contact-item">
              <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
              <p>lomatedinesh@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

      <div className="map-column">
        <div className="map-container iframe">
           <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.507195859286!2d73.85519627404464!3d18.46067127100344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2eaa50b010a4d%3A0x825a7eb297bf3ff2!2sAxis%20Bank%20Branch!5e0!3m2!1sen!2sin"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            width="100%"
            height="100%"
          ></iframe> 
        </div>
      </div>
    </div>
  );
};

export default Contact;
