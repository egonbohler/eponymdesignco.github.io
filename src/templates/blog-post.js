import React from "react"
import { graphql } from "gatsby"
import { css } from "@emotion/core"
import Img from 'gatsby-image'
import Layout from "../components/layout"

export default ({ data }) => {
  const post = data.markdownRemark
  console.log('post.frontmatter.image', post.frontmatter.image.childImageSharp);
  return (
    <Layout>
      <div css={css`
        margin: 0 1em;
        margin-top: 25vh ;
        margin-bottom: 3em;
        `}>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <div className="project-image-group">
        <Img
          fluid={post.frontmatter.image.childImageSharp.fluid}
          alt={post.frontmatter.title}
          className="project-image-main"
        />
        <Img
          fluid={post.frontmatter.image.childImageSharp.fluid}
          alt={post.frontmatter.title}
          className="project-image-secondary"
        />
        <Img
          fluid={post.frontmatter.image.childImageSharp.fluid}
          alt={post.frontmatter.title}
          className="project-image-tertiary"
        />
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
        image {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
