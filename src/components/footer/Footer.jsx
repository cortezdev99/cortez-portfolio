import React from 'react'

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-info-section-wrapper">
        <div className="footer-info-logo">
          PixelPulse
        </div>

        <div className="footer-info-text">
          Empowering Innovation, Transforming Businesses.
        </div>

        <div className="footer-info-copyright">
          Copyright ©2024 PixelPulse.
        </div>

        <div>
          in
        </div>
      </div>

      <div className="footer-main-content-wrapper">
        <div className="footer-links-container">
          <div className="footer-links-header">
            Main Pages
          </div>


          <div className="footer-links-wrapper">
            <div className="footer-link-wrapper">
              Home
            </div>

            <div className="footer-link-wrapper">
              About Us
            </div>

            <div className="footer-link-wrapper">
              Services
            </div>

            <div className="footer-link-wrapper">
              Contact
            </div>
          </div>
        </div>

        <div className="footer-links-container">
          <div className="footer-links-header">
            Other Pages
          </div>

          <div className="footer-links-wrapper">
            <div className="footer-link-wrapper">
              Careers
            </div>

            <div className="footer-link-wrapper">
              Privacy Policy
            </div>

            <div className="footer-link-wrapper">
              Terms of Service
            </div>
          </div>
        </div>

        <div className="footer-newsletter-wrapper">
          <div className="footer-newsletter-header">
            Newsletter Subscription
          </div>

          <form className="footer-newsletter-form-wrapper">
            <div className="footer-newsletter-input-wrapper">
              <input
                type="email"
                className="footer-newsletter-input"
                placeholder="Email"
              />
            </div>

            <button className="footer-newsletter-action-button">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Footer;