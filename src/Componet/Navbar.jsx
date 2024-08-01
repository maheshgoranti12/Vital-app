import React, { useEffect, useState, useRef } from 'react';
import './Navbar.css';
import './Fonts.css';
import { CgClose, CgMenu } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
// import UserLoginLogo from './UserLoginLogo';
import logo from '../img/logo.png';

export default function Navbar({ onFormLoginToggle, onFormSignUpToggle, scrollToTarget, onGoBack }) {

  // const [isUserLogin, setIsUserLogin] = useState(false);
  // const handleUserLogin = () => {
  //   setIsUserLogin(true);
  // };
  // const handleUserLogout = () => {
  //   setIsUserLogin(false);
  // };
  const navigate = useNavigate();
  const goToCourse = () => {
    navigate("/");
  };
 

  const handleButtonClicked = () => {
    // Scroll to the target element when the button is clicked
    scrollToTarget.current.scrollIntoView({ behavior: 'smooth' });

  };
  const navLinkElsRef = useRef(null);

  const handleCourse = () => {
    goToCourse();
    handleButtonClicked();
  };
  useEffect(() => {
    const navLinkEls = navLinkElsRef.current.querySelectorAll('.nav_link');
    const windowPathname = window.location.pathname;

    navLinkEls.forEach(navLinkEl => {
      if (navLinkEl.getAttribute('href') === windowPathname) {
        navLinkEl.classList.add('active');
      }
    });
  }, []);


  
  const [isOpen, setIsOpen] = useState(false);

  const ToggleSidebar = () => {
    isOpen === true ? setIsOpen(false) : setIsOpen(true);
  };
   


  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {

    const handleScroll = () => {
      if (window.scrollY > 100) {

        setIsSticky(true);
      } else {

        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  
  // ${isSticky ? 'sticky' : ''} 
  return (
    <>
     <div className="navbar">
        <div className="logo_text">
          <Link to="/">
            <img src={logo} className="img"></img>
          </Link>
          <p class="inline-text">
            {/* <ThemeProvider theme={theme}>
              <Typography variant="h1" color="primary"> */}
                <Link to="/">
                  <text className="vitalcode">Vitalcode</text>
                </Link>
              {/* </Typography>
            </ThemeProvider> */}
          </p>
        </div>
        <div className="nav_btn">
          {/* <ThemeProvider theme={theme}>
            <Typography variant="h2" color="primary"> */}
              <li>
                <Link to="/quiz" className="link" id="Quiz">
                  Quiz
                </Link>
              </li>
              <li>
                <Link to="/contact" id="Contact" className="link">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/loginfinal">
                  <button type="button" className=" link" id="Login">
                    Log in
                  </button>
                </Link>
              </li>
              <li>
                <Link to="/signupfinal">
                  <button type="button" className=" link" id="Signup">
                    Sign up
                  </button>
                </Link>
              </li>
            {/* </Typography>
          </ThemeProvider> */}
        </div>

        <div className="bars bar_open" onClick={ToggleSidebar}>
          <CgMenu />
        </div>
        <div className={`sidebar ${isOpen == true ? "active" : ""}`}>
          <div className="sd-header">
            {/* <text className="vitalcode_side">Vitalcode</text> */}
            <div className="bars " onClick={ToggleSidebar}>
              <CgClose />
            </div>
          </div>

          <div className="sd-body">
            <ul>
              <li>
                <Link to="/quiz" className="link" id="Quiz">
                  Quiz
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  id="Contact"
                  className="link"
                  ref={navLinkElsRef}
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/loginfinal">
                  <button
                    type="button"
                    className="btn btn-outline link"
                    id="Login"
                  >
                    Log in
                  </button>
                </Link>
                
              </li>
              <li>   
                <Link to="/signupfinal">
                  <button type="button" className="btn link" id="Signup">
                    Sign up
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div
          className={`sidebar-overlay ${isOpen == true ? "active" : ""}`}
          onClick={ToggleSidebar}
        ></div>
      </div>
    </>

  )

};

