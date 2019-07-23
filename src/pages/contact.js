import React from "react"
import Layout from "../components/layout"
import ContactForm from "../components/ContactForm"
import SEO from "../components/SEO"

import { motion } from "framer-motion"

const variants = {
  start: { y: 50, opacity: 0 },
  end: { y: 0, opacity: 1 },
}

const Contact = props => (
  <Layout currentPath='/'>
    <SEO title="Contact"/>
    <div className="behind">
      <div className="cd-intro">
        <div className="bg-filter" />
      </div>
    </div>
    <motion.div 
      className="page-body"
      initial="start"
      animate="end"
      transition={{ ease: "easeInOut", duration: 0.8 }}
      variants={variants}
    >
      <h1 className="form-title about-header">Say Hello</h1>
      <ContactForm />
    </motion.div>
  </Layout>
)

export default Contact;
