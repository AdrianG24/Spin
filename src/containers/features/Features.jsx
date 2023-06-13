import React from 'react'
import Feature from '../../components/feature/Feature';
import './features.css'


const Features = () => {
  return (
    <div className="spinach__feature section__margin" id="gaming">
    <div className="spinach__feature-feature">
      <h1> WE FOCUS ON QUALITY <br /> ENTERTAINMENT</h1>
      <Feature text="Our primary goal is to deliver unparalleled entertainment to our players. We prioritize the creation of top-notch games that excel in every aspect. This entails crafting engaging themes, incorporating unique and captivating features, and presenting stunning and meticulous artwork. We never compromise on quality and are committed to providing a memorable gameplay experience." />
      <div className="spinach__feature-btn">
        <p>LEARN MORE</p>
      </div>
    </div>
  </div>
  )
}

export default Features

