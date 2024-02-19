import React from 'react';

const Home = () => {
  return (
    <div className="homepage-wrapper">
      <div className="homepage-intro-wrapper">
        <div className="homepage-intro-text-wrapper">
          <div className="homepage-intro-welcome">
            Welcome to PixelPulse
          </div>

          <div className="homepage-intro-header">
            We Make The Best IT Solutions
          </div>

          <div className="homepage-intro-text">
            Are you ready to experience the cutting edge of technology? Look no further! At PixelPulse, we are committed to revolutionizing the IT landscape by delivering exceptional services and solutions tailored to our clients' needs.
          </div>

          <div className="homepage-intro-toggle-wrapper">
            <button className="homepage-intro-toggle homepage-intro-toggle-active"></button>
            <button className="homepage-intro-toggle"></button>
          </div>

          <button className="homepage-intro-action-button">
            Get Started
          </button>
        </div>

        <div className="homepage-intro-image-wrapper">
          <img
            className="homepage-intro-image" 
            src="https://source.unsplash.com/random/350x350" 
          />
        </div>
      </div>
    </div>
  )
}

export default Home;