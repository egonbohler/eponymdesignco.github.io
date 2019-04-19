import React from "react"
import { css } from "@emotion/core"
import Layout from "../components/layout"

export default ({ data }) => (
  <Layout>
    <div css={css`
      padding-left: 1em;
      margin-top: 25vh ;
      width: 95%;
      `}>
      <h1>Contact {data.site.siteMetadata.title}</h1>
      <p>
        We&#39;re the only site running on your computer dedicated to showing the best
        photos and videos of pandas eating lots of food.
      </p>
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
