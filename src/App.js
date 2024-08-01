import React, { useState, useEffect, useRef } from 'react';
import Navbar from './Componet/Navbar';
import { Route, Routes } from 'react-router-dom';
import Footer from './Componet/Footer';
import Cardslider from './Componet/Cardslider.jsx';
import Coursepage from './Componet/Coursepage.jsx';
import Contact from './Componet/Contact.jsx';
import Quiz from './Componet/Quiz.jsx';
import { CourseProvider } from './Componet/CourseContext.jsx';
import UserProfile from './Componet/UserProfile.jsx';
import LoginFinal from './Componet/LoginFinal.jsx';
import SignupFinal from './Componet/SignupFinal.jsx';
import EmailVerification from './Componet/Popup/EmailVerification.jsx';

function App() {
  const [showCoursePage, setShowCoursePage] = useState(false);
  const [showEmailVerification, setShowEmailVerification] = useState(false);

  const targetRef = useRef(null);

  const handleBuyClick = () => {
    setShowCoursePage(true);
    setShowEmailVerification(true);
  };

  const handleGoBack = () => {
    setShowCoursePage(false);
    setShowEmailVerification(false);
  };

  const onGoBack = () => {
    setShowCoursePage(false);
    // console.log('hii');
  };

  const offClose = () => {
    setShowEmailVerification(false);
    // console.log('hii');
  };



  return (
    <>
      <Navbar scrollToTarget={targetRef} />

      <CourseProvider>
        <Routes>
          <Route path='/' element={<Cardslider targetRef={targetRef} onButtonClick={handleBuyClick} />} />
          <Route path='/contact' element={<Contact targetRef={targetRef} />} />
          <Route path='/coursepage' element={<Coursepage targetRef={targetRef} />} />
          <Route path='/quiz' element={<Quiz />} />
          <Route path='/userprofile' element={<UserProfile />} />
          <Route path='/loginfinal' element={<LoginFinal />} />
          <Route path='/signupfinal' element={<SignupFinal />} />
        </Routes>
      </CourseProvider>
      <Footer />

      
    </>
  );
}

export default App;
