import React from 'react'
import Feature from '../../components/feature/Feature'
import './about.css'

const About = () => {
  return (
  <div className="spinach__about section__margin" id="about">
    <div className="spinach__about-container">
      <Feature title="Players First" text="We put the player at the forefront of our game creation process" />
      <Feature title="Portrait Mode" text="Designed to play perfectly on mobile and any device used for the best user experience" />
      <Feature title="Innovate Entertainment" text="We create games to provide the ultimate entertainment experience" />
    </div>
  </div>
  )
}

export default About

