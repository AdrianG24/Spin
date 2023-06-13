import React, { useState } from 'react';
import { useCookies } from 'react-cookie';
import Modal from 'react-modal';
import './cookies.css';

const CookieConsent = () => {
  const [cookies, setCookie] = useCookies(['cookieConsent']);
  const [showPopup, setShowPopup] = useState(!cookies.cookieConsent);
  const [showModal, setShowModal] = useState(false);

  const handleAccept = () => {
    setCookie('cookieConsent', true, { path: '/' });
    setShowPopup(false);
  };

  const handleLearnMore = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      {showPopup && (
        <div className="cookie-consent">
          <p>This website uses cookies to improve your experience.</p>
          <div className="cookie-buttons">
            <button onClick={handleAccept}>Accept</button>
            <button onClick={handleLearnMore}>About</button>
          </div>
        </div>
      )}

      <Modal
        isOpen={showModal}
        onRequestClose={handleCloseModal}
        contentLabel="Cookie Information"
      >
        {/* Add cookie information content here */}
        <h2>Cookie Information</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
        <button onClick={handleCloseModal}>Close</button>
      </Modal>
    </>
  );
};

export default CookieConsent;
