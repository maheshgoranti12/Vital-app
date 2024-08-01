import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './LoginFinal.css';
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";

const LoginFinal = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    const errors = validateForm();

    if (Object.keys(errors).length === 0) {
      try {
        const response = await axios.post('http://192.168.0.138:8080/login', {
          username,
          password,
        }, {
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.status === 200) {
          console.log('Login successful!');
          console.log(response.data);
        
        } else {
          console.error('Error during login:', response.statusText);
        }
      } catch (error) {
        console.error('Error during login:', error);
      }
    } else {
      const errorMessage = Object.values(errors).join('\n');
      window.alert(errorMessage);
    }
  };

  const validateForm = () => {
    const errors = {};

    if (!username.trim()) {
      errors.username = 'Username is required';
    }

    if (!password.trim()) {
      errors.password = 'Password is required';
    }

    return errors;
  };

  const [isPassShow, setPassShow] = useState(false);
  const [passType, setPassType] = useState('password');

  const passShowHide = () => {
    setPassShow(!isPassShow);
    setPassType(isPassShow ? 'password' : 'text');
  };

  return (
    <div className="final_log">
      <div className="left_log">
        
      </div>
      <div className="right_log">
        <div className="left_logo">
          <img className='border_logo_log' src={require('../img/border_logo_2.png')} alt="border_logo" />
          <h1>Vitalcode</h1>
          <h5>EXPLORE THE INTERNALS</h5>
        </div>
        <div className="right_form">
          <form onSubmit={handleLogin}>
            <h1>Log In</h1>
            <div className="form_content">
              <label>Username</label><br />
              <div className="log_wrapper">
                {/* <div className="log_icon"><FaUser className='FaUser' /></div> */}
                <input
                  type="text"
                  className='log_user'
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <label>Password</label><br />
              <div className="log_wrapper">
                {/* <div className="log_icon"><RiLockPasswordFill className='RiLockPasswordFill' /></div> */}
                <input
                  type={passType}
                  className='log_pass'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <label>Forget Passowrd!</label>
              <Link to="/signupFinal" className="signup-link">Sign Up</Link>
              <br /><br />
              <button type="submit" className='button_log'>Log In</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginFinal;
