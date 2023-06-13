import React, { useEffect, useState }  from 'react'
import {Footer, Blog, Features, About, Header, Games, Careers} from './containers';
import {Navbar, CookieConsent, Confirmation} from './components';
import './App.css';


const App = () => {
  const [showModal, setShowModal] = useState(true);
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleConfirmAge = () => {
    setIsConfirmed(true);
    setShowModal(false);
  };

  const handleRejectAge = () => {
    window.location.href = 'https://example.com';
  };
  return (
    <div className='App'>
      {!isConfirmed && (
        <div className='modal'>
          <div className='modal-content'>
            <h2>Confirm Your Age</h2>
            <p>Are you 18 years old or above?</p>
            <button onClick={handleConfirmAge}>Yes</button>
            <button onClick={handleRejectAge}>No</button>
          </div>
        </div>
      )}
      <div className='gradient_bg'>
        <Navbar />
        <Header />
      </div>
      {isConfirmed && (
        <>
          <Games />
          <About />
          <Features />
          <Blog />
          <Careers />
          <Footer />
          <CookieConsent />
        </>
      )}
    </div>
  )
}

export default App
