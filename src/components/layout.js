import React, { Component } from "react"
import Header from "./header.js"
import Footer from "./footer.js"
import '../scss/style.scss'

const Layout = props => {
  return (
    <React.Fragment>
      <div className={`page${props.bodyClass ? ` ${props.bodyClass}` : ''}`}>
        <div id="wrapper" className="wrapper">
          <Header />
          {props.children}
        </div>
        <Footer />
      </div>
    </React.Fragment>
      )
  }

export default Layout
