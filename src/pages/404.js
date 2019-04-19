import React from "react"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"
import Img from 'gatsby-image'
import Layout from "../components/layout"

export default ({ data }) => {
  return (
    <Layout>
    <div css={css`
      grid-area: b;
      justify-self: center;
      margin-top: ${rhythm(6)};
      `}>
    <p>Oh no ya done broke it </p>
    <Img fluid={data.imageOne.childImageSharp.fluid} />
    <Img fluid={data.imageTwo.childImageSharp.fluid} />
    <Img fluid={data.imageThree.childImageSharp.fluid} />
    </div>
    </Layout>
  )
}


export const query = graphql`
query {
    imageOne: file(relativePath: { eq: "one.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageTwo: file(relativePath: { eq: "two.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageThree: file(relativePath: { eq: "three.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
