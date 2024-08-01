import React, { useEffect, useState } from 'react';
import './ScrollBox.css';
import LoginFinal from '../Componet/LoginFinal.jsx';
import SignupFinal from '../Componet/SignupFinal.jsx';
import { useCourse } from './CourseContext.jsx';// Import the useCourse hook
const ScrollBox = ({ onClose, onSwitch }) => {

  const { selectedCourse, imageSrc } = useCourse(); // Use the useCourse hook to access context
  const [showCoursePage, setShowCoursePage] = useState(false);
  const [isSignUpFinalOpen, setIsSignUpFinalOpen] = useState(false);
  const [isLoginFinalOpen, setIsLoginFinalOpen] = useState(false);

  const handleSwitchToSignUPFinal = () => {
    setIsLoginFinalOpen(false);
    setIsSignUpFinalOpen(true);
  };
  const handleSwitchToLoginFinal = () => {
    setIsLoginFinalOpen(true);
    setIsSignUpFinalOpen(false);
  };
  const handleLoginFinal = () => {
    if (isLoginFinalOpen) {
      // User is logged in, proceed with enrollment or any other action
      // For now, let's just hide the CoursePage
      setShowCoursePage(false);
    } else {
      // User is not logged in, show the login component
      // You may want to customize this part based on your login component structure
      // Here, I'm just toggling the visibility of the login component
      setIsLoginFinalOpen(true);
    }
  };


  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const threshold = window.innerWidth > 768 ? 100 : 500;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;

      if (scrollTop > threshold) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id="scrollBox" className={isVisible ? '' : 'hidden'}>
      <div className={`card-bx1 `} >
        <div className="row">
          <div className="col-md-4" id='cm5'>
            <img src={imageSrc} alt="error" className='mmp1' />
          </div>
          <div className="col-md-7">
            <div className="card-bdy1">
              <h5 className="card-tle2">
                {selectedCourse?.title || 'Course Title'} 
                {/* (Duration
                {selectedCourse?.duration || 'Duration'}) */}
              </h5>

              <h5 className='cd-pmt4'>₹{selectedCourse?.price || 'Price'}/-<br/> (50%-off)</h5>
              <button className="buy-now4" onClick={handleLoginFinal}>
                <p className='enroll5'>Enroll Now</p>
              </button>
            </div>
            {isLoginFinalOpen && <LoginFinal onClose={() => setIsLoginFinalOpen(false)} onSwitch={handleSwitchToSignUPFinal} />}
            {isSignUpFinalOpen && <SignupFinal onClose={() => setIsSignUpFinalOpen(false)} onSwitch={handleSwitchToLoginFinal} />}

          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollBox;
