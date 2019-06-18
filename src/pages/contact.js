import React from "react"
import Layout from "../components/layout"
import ContactForm from "../components/ContactForm"


export default ({ data }) => (
  <Layout currentPath='/'>
  <div className="behind">
    <div className="cd-intro">
      <div className="bg-filter"/>
    </div>
  </div>
  <div className="page-body">
    <h1 className="form-title about-header">Say Hello</h1>
    <ContactForm />
  </div>
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
  `
