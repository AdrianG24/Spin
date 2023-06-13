import React from 'react'
import Feature from '../../components/feature/Feature';
import './careers.css'

const Careers = () => {
  return (
    <div className="spinach__career section__margin" id="careers">
    <div className="spinach__career-career">
      <h1 className='gradient__text'> CAREERS AT SPINACH</h1>
      <Feature text="We're a growing team on a mission to take on the competitive gaming industry – will you help us do it?" />
      <div className="spinach__career-btn">
        <p>SEE ALL POSITIONS</p>
      </div>
    </div>
  </div>
  )
}

export default Careers
