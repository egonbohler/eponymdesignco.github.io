import React from 'react';
import Layout from "../components/layout"
import SEO from "../components/SEO"

import { motion } from "framer-motion"

const variants = {
  start: { y: 50, opacity: 0 },
  end: { y: 0, opacity: 1 },
}

const Studio = props => (
  <Layout currentPath='/'>
  <SEO title="Studio" />
    <div className="cd-intro behind" />
    <motion.div
      className="page-body"
      initial="start"
      animate="end"
      transition={{ ease: "easeInOut", duration: 0.8 }}
      variants={variants}
    >
        <h1 className="form-title about-header">Our Studio</h1>
        <div className="studio-content">
          <p>Eponym is a small design and web development agency based in Cleveland, Ohio.</p>
          <p>
            Founded by Egon Bohler, a long-time design hobbyist since the mid-2000s and tech-industry professional,
            Eponym Design was created to bring great design to all who need it, at competitive prices.
            Coming from an analytical professional background, Eponym has the resources to not only
            help you design something that looks great but can help measure the impact of that design solution on your business.
          </p>
          <p>
            No matter the project, we take a highly tailored approach. We start with defining your business goals and work iteratively toward solutions optimized
            to achieve your desired outcome.
            If you're looking to start a new project, consider Eponym for any of the following:
          </p>
          <ul>
            <li>Websites (Static Sites, Landing Pages, Blogs, and more)</li>
            <li>Social Media Assets</li>
            <li>Logo Design</li>
            <li>Brand Identity</li>
            <li>Direct mail </li>
            <li>Invitations and other stationary</li>
            <li>Posters</li>
            <li>Presentations</li>
          </ul>
        </div>
    </motion.div>
  </Layout>
)

export default Studio;
