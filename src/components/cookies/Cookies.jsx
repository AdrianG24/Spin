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
 <p>
            We use cookies to provide the content and functionality of this website, and subject to your consent, to analyse the use of our website and to ensure you get the best experience. Third parties with whom we collaborate can also install cookies in order to show you personalized advertisements on other websites. Read our
            <span className="cookie-notice-link" onClick={handleLearnMore}>
              cookie notice
            </span>
            for more information.
          </p> 
          <div className="cookie-buttons">
            <button onClick={handleAccept}>Accept all</button>
            <button>Reject all</button>
          </div>
        </div>
      )}

      <Modal
        isOpen={showModal}
        onRequestClose={handleCloseModal}
        contentLabel="Cookie Information"
      >
        <h2>Cookie Information</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
        <button onClick={handleCloseModal}>Close</button>
      </Modal>
    </>
  );
};

export default CookieConsent;
