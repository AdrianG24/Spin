import React, {useState} from 'react'
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri'
import logo from '../../assets/logo.png'
import './navbar.css'

const Menu = () => {
  return (
    <>
      <p><a href='#home'>Home</a></p>
      <p><a href='#games'>Games</a></p>
      <p><a href='#about'>Our Features</a></p>
      <p><a href='#gaming'>Responsible Gaming</a></p>
      <p><a href='#about'>About</a></p>
      <p><a href='#blog'>Blog</a></p>
      <p><a href='#careers'>Careers</a></p>
      <p><a href='#contacts'>Contacts</a></p>
    </>
  )
}

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <div className='spinach__navbar'>
      <div className='spinach__navbar-links'>
        <div className='spinach__navbar-links_logo'>
          <img src={logo} alt='logo'/>
        </div>
        <div className='spinach__navbar-links_container'>
          <Menu/>
        </div>
      </div>
      <div className="spinach__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="spinach__navbar-menu_container scale-up-center">
          <div className="spinach__navbar-menu_container-links">
            <Menu/>
          </div>
        </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
