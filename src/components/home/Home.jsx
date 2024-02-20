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

      <div className="homepage-about-us-wrapper">
        <div className="homepage-about-us-image-wrapper">
          <img className="homepage-about-us-image" src="https://source.unsplash.com/random/350x350" />
        </div>

        <div className="homepage-about-us-text-wrapper">
          <div className="homepage-about-us-header">
            Who We Are
          </div>

          <div className="homepage-about-us-sub-header">
            We Are <span className="homepage-text-varient">All In One</span> IT Solution & Technology Company
          </div>

          <div className="homepage-about-us-paragraphs-wrapper">
            <p className="homepage-about-us-text">
              At PixelPulse, we are a dynamic and innovative IT services company specializing in developing custom software solutions to address the unique and evolving needs of businesses.
            </p>

            <p className="homepage-about-us-text">
              With our extensive expertise and passion for technology, we empower organizations to achieve their goals and unlock their full potential through tailored web applications, mobile apps, enterprise software, and seamless integrations with existing systems.
            </p>
          </div>

          <button className="homepage-about-us-action-button">
            Learn More About Us
          </button>
        </div>
      </div>

      <div>
        <div>
          Services
        </div>

        <div>We Provide the Best Quality <span>Services</span></div>

        <div>
          From developing custom web app solutions to designing seamless user experiences, we have the know-how to tackle any challenge.
        </div>

        <button>
          Explore All Services
        </button>

        <div>
          <div>
            <div>
              <img />
            </div>

            <div>
              Web Design
            </div>

            <div>
              We create customized software solutions that run specifically on mobile devices.
            </div>
          </div>

          <div>
            <div>
              <img />
            </div>

            <div>
              Web Development
            </div>

            <div>
              We create customized software solutions that run specifically on mobile devices.
            </div>
          </div>

          <div>
            <div>
              <img />
            </div>

            <div>
              Mobile App Development
            </div>

            <div>
              We create customized software solutions that run specifically on mobile devices.
            </div>
          </div>

          <div>
            <div>
              <img />
            </div>

            <div>
              Search Engine Optimization
            </div>

            <div>
              We create customized software solutions that run specifically on mobile devices.
            </div>
          </div>
        </div>
      </div>

      <div>
        <div>
          Why Choose Us
        </div>

        <div>
          We Help You Increase Your Sales Through High Quality Solutions
        </div>

        <div>
          When it comes to meeting your IT needs and achieving your business goals, choosing the right partner is crucial. At PixelPulse, we are dedicated to providing exceptional IT services that empower your business to thrive in the digital landscape.
        </div>
      </div>
    </div>
  )
}

export default Home;