import React from 'react';
import Signup from './Signup';
import EmailVerification from './EmailVerification';

const EmailVerified = (props) => {
  const [showSignup, setShowSignup] = useState(true);
  const [showEmailVerification, setShowEmailVerification] = useState(false);

  const closeSignup = () => {
    setShowSignup(false);
  };

  const openEmailVerification = () => {
    setShowSignup(false);
    setShowEmailVerification(true);
  };

  const closeEmailVerification = () => {
    setShowEmailVerification(false);
  };

  return (
    <>
      {showSignup && (
        <Signup onClose={closeSignup} onSwitch={openEmailVerification} />
      )}
      {showEmailVerification && (
        <EmailVerification onClose={closeEmailVerification} />
      )}
    </>
  );
}

export default EmailVerified;
