import React, { useState } from 'react';
import axios from 'axios';
import { FaUser, FaPhone } from 'react-icons/fa';
import { RiLockPasswordFill } from 'react-icons/ri';
import { MdOutlineEmail } from 'react-icons/md';
import { Link } from 'react-router-dom';
import EmailVerification from '../Componet/Popup/EmailVerification';
import './SignupFinal.css';
import LoginFinal from './LoginFinal';

const SignupFinal = ({ onClose, onSwitch }) => {
  const [step, setStep] = useState(1);
  const [username, setUsername] = useState('');
  const [fullName, setFullName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [userRole, setUserRole] = useState('STUDENT');
  const [showEmailVerification, setShowEmailVerification] = useState(false);
  const [isLogin,setIsLogin]= useState(false);

  const SignupFinalData = {
    fullName,
    username,
    password,
    email,
    mobileNumber,
    userRole,
  };

  const validateForm = () => {
    const errors = {};

    if (!username.trim()) {
      errors.username = 'Username is required';
    }

    if (!fullName.trim()) {
      errors.fullName = 'Fullname is required';
    }

    if (!password.trim()) {
      errors.password = 'Password is required';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailRegex.test(email)) {
      errors.email = 'Enter a valid email address';
    }

    const phoneRegex = /^\+?[0-9]{10,}$/;
    if (!mobileNumber.trim() || !phoneRegex.test(mobileNumber)) {
      errors.mobileNumber = 'Enter a valid phone number';
    }
    return errors;
  };

  const handleVerify = () => {
    setShowEmailVerification(true);
    
  };

  const handleEmailVerify = async (e) => {
    handleVerify();
    e.preventDefault();
    const errors = validateForm();

    if (Object.keys(errors).length === 0) {
      try {
        const response = await axios.post('http://192.168.0.138:8080/register', SignupFinalData, {
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.status === 200) {
          console.log('Form submitted successfully!');
          console.log(response.data);
          setStep(2);
        } else {
          console.error('Error submitting the form:', response.statusText);
        }
      } catch (error) {
        console.error('Error submitting the form:', error);
      }
    } else {
      const errorMessage = Object.values(errors).join('\n');
      window.alert(errorMessage);
    }
    // handleVerify();
  };

  const [isPassShow, setPassShow] = useState(false);
  const [passType, setPassType] = useState('password');

  const passShowHide = () => {
    setPassShow(!isPassShow);
    setPassType(isPassShow ? 'password' : 'text');
  };

  const offClose = () => {
    setShowEmailVerification(false);
    
    // console.log('hii');
  };

  return (
    <div className="final_signup">
      <div className="left_signup">
       
      </div>
      <div className="right_signup">
        <div className="left_signup_logo">
          <img className='border_logo' src={require('../img/border_logo_2.png')} alt="border_logo" />
          <h1>Vitalcode</h1>
          <h5>EXPLORE THE INTERNALS</h5>
        </div>
        <div className="right_form_signup">
          <form onSubmit={handleEmailVerify}>
            <h1>Sign Up</h1>
            <div className="form_content_signup">
              <label>Full Name</label>
              <br />
              <div className="sign_wrapper">
                <div className="sign_icon">
                  <FaUser className="FaUser" />
                </div>
                <input
                  type="text"
                  className="signup_fullname"
                  name="fullName"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>

              <label>Username</label>
              <br />
              <div className="sign_wrapper">
                <div className="sign_icon">
                  <FaUser className="FaUser" />
                </div>
                <input
                  type="text"
                  className="signup_user"
                  name="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>

              <label>Password</label>
              <br />
              <div className="sign_wrapper">
                <div className="sign_icon">
                  <RiLockPasswordFill className="RiLockPasswordFill" />
                </div>
                <input
                  type={passType}
                  className="signup_pass"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span onClick={passShowHide}>
                  {isPassShow ? 'Hide' : 'Show'} Password
                </span>
              </div>

              <label>Email</label>
              <br />
              <div className="sign_wrapper">
                <div className="sign_icon">
                  <MdOutlineEmail className="MdOutlineEmail" />
                </div>
                <input
                  type="email"
                  className="signup_email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <label>Mobile Number</label>
              <br />
              <div className="sign_wrapper">
                <div className="sign_icon">
                  <FaPhone className="FaPhone" />
                </div>
                <input
                  type="text"
                  className="signup_mobile"
                  name="mobileNumber"
                  value={mobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value)}
                />
              </div>

              <br />
              <button type="submit" className="button_signup">
                Sign Up !
              </button>

              <Link onClick={onSwitch} className='forgot2'>
                Login
              </Link>
            </div>
          </form>

          
          {showEmailVerification && !isLogin && (
        <EmailVerification
          onClose = {offClose}
          email={email}
        />
      )}
        </div>
      </div>
    </div>
  );
};

export default SignupFinal;
