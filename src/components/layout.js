import React, { Component } from "react"
import { css } from "@emotion/core"

import Header from "../components/header.js"
import SideNav from "../components/sidenav.js"
import Footer from "../components/footer.js"

class Layout extends Component {
  constructor (props) {
    super(props)
    this.state = {isActive: false}
    this.toggleNavbar = this.toggleNavbar.bind(this)
  }

  toggleNavbar () {
    this.setState({isActive: !this.state.isActive})
  }

  render () {
    return (
      <div>
        <Header />
        <div>{ this.props.children }</div>
        <Footer />
      </div>

    )
  }
}

export default Layout
