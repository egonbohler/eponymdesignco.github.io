import React from "react"
import Layout from "../components/layout"
import ContactForm from "../components/ContactForm"
import SEO from "../components/SEO"


const Contact = props => (
  <Layout currentPath='/'>
    <SEO title="Eponym Design Co. – Contact"/>
    <div className="behind">
      <div className="cd-intro">
        <div className="bg-filter" />
      </div>
    </div>
    <div className="page-body">
      <h1 className="form-title about-header">Say Hello</h1>
      <ContactForm />
    </div>
  </Layout>
)

export default Contact;
