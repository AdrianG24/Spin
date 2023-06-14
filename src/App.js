import React, { useState }  from 'react'
import {Footer, Blog, Features, About, Header, Games, Careers} from './containers';
import {Navbar, CookieConsent} from './components';
import logo from './assets/logo.png'
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
            <div className='spinach__modal-content-logo'>
              <img src={logo} alt='logo'/>
            </div>
            <div className='spinach-modal-content__info'>
            <div className='spinach-modal-content__line'/>
              <h2>SPINACH supply online and mobile games to the betting and gaming <br/> industry. We are committed to protecting users of our products which are <br/> designed for people over the age of 18.</h2>
              <h2>Please confirm you are of legal age in your country to access <br/> gambling products before entering this site.</h2>
            </div>
            <div className='modal-content-buttons'>
              <button onClick={handleConfirmAge}>Yes I`m older 18</button>
              <button onClick={handleRejectAge}>No</button>
            </div>
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
