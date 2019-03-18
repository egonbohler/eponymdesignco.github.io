import React, { Component } from "react"
import { css } from "@emotion/core"

import Header from "../components/header.js"
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
    const { children } = this.props.children
    return(
      <div
        css={css`
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          min-height: 100%;
          grid-template-rows: 10vh 80vh 10vh;
          grid-template-areas:
          "a a a a a"
          "b b b b b"
          "c c c c c"
        `}
      >
      <Header isActive={this.state.isActive} toggleNavbar={() => this.toggleNavbar()} />
        {children}
      <Footer/>
      </div>
    )
  }
}

export default Layout
