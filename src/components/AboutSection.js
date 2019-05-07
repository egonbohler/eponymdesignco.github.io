import React from 'react'
import { Link } from 'gatsby'

const AboutSection = () => (
  <div className="background">
    <div className="half">
      <div className="flex-child">
        <div>
          <span className="hr-active"/>
          <h3 className="about-header">About Eponym Design</h3>
        </div>
        <p className="about-text">Eponym is a small design and web development agency based in Cleveland, Ohio.</p>
        <p className="about-text">
          We don't see our job as just creating something beautiful – we're here to deliver an effective solution that grows your business.
          Need a website that converts customers? We can help.
          Need print or digital ads that create a great first impression? We're your team.
        </p>
        <p className="about-text">
          No matter the challenge, our mission is to make it happen.
        </p>
      </div>
      <div className="flex-child">
        <Link to="/contact">
          <div className="button button-primary contact-button">
          Contact Us
          </div>
        </Link>
      </div>
    </div>
  </div>
)

export default AboutSection;