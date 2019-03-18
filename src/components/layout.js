import React from "react"
import { css } from "@emotion/core"
import { StaticQuery, graphql } from "gatsby"
import { rhythm } from "../utils/typography"

import Header from "../components/header.js"
import Footer from "../components/footer.js"

export default ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
}
    render={data => (

      <div
        css={css`
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          min-height: 100%;
          grid-template-rows: 1fr 4fr 1fr;
          grid-template-areas:
          "a a a a a"
          "b b b b b"
          "c c c c c"
        `}
      >
      <Header/>
        {children}
      <Footer/>
      </div>
    )}
  />
)
