import React from "react"
import { Link } from 'gatsby'
import Layout from "../components/layout"
import ContactForm from "../components/ContactForm"
import SEO from "../components/SEO"
import { IconContext } from "react-icons";
import { FaFacebookSquare, FaDribbbleSquare, FaInstagram} from 'react-icons/fa';


const FormSubmitted = props => (
  <Layout currentPath='/'>
    <SEO title="Contact"/>
    <div className="behind">
      <div className="cd-intro">
        <div className="bg-filter" />
      </div>
    </div>
    <div className="page-body">
      <h1 className="form-title about-header">Thank You</h1>
      <div className="studio-content centered">
        <p>We've received your submission and will get back to you within 48 hours to discuss next steps.</p>
        <p>
          We appreciate you considering us for your project and look forward to being in touch soon!
          While you're waiting for our response, please check us out on social media to get a preview of our work.
        </p>
        <IconContext.Provider value={{ color: "black", className: "global-class-name", size: '2em'}}>
          <div style={{marginTop: '3em'}}>
            <a href="https://www.facebook.com/eponym.design" aria-label="Link to Facebook Page" target="_blank" rel="noopener noreferrer"><FaFacebookSquare style={{margin: '1em'}} /></a>
            <a href="https://dribbble.com/" aria-label="Link to Dribbble Page" target="_blank" rel="noopener noreferrer"><FaDribbbleSquare style={{margin: '1em'}} /></a>
            <a href="https://www.instagram.com/eponym.design/" aria-label="Link to Instagram Page" target="_blank" rel="noopener noreferrer"><FaInstagram style={{margin: '1em'}} /></a>
          </div>
        </IconContext.Provider>
        <Link to="/">
          <div className="button button-primary contact-button project-button margin-top" aria-label="Back to Home">
          Back to Home
          </div>
        </Link>
      </div>
    </div>
  </Layout>
)

export default FormSubmitted;
