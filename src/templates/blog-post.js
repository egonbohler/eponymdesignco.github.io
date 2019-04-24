import React from "react"
import { graphql } from "gatsby"
import Img from 'gatsby-image'
import Layout from "../components/layout"
import NextProject from "../components/NextProject"

export default ({ data, location, pageContext}) => {
  const post = data.markdownRemark;
  const { frontmatter} = post;
  const { title } = frontmatter;
  const { next, prev } = pageContext;

  return (
    <Layout>
      <div className="project-body">
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <div className="project-image-group">
        <Img
          fluid={post.frontmatter.imageOne.childImageSharp.fluid}
          alt={post.frontmatter.title}
          className="project-image-main"
        />
        <Img
          fluid={post.frontmatter.imageTwo.childImageSharp.fluid}
          alt={post.frontmatter.title}
          className="project-image-secondary"
        />
        <Img
          fluid={post.frontmatter.imageThree.childImageSharp.fluid}
          alt={post.frontmatter.title}
          className="project-image-tertiary"
        />
        </div>
        <NextProject prev={prev} next={next}/>
      </div>

    </Layout>
  )
}

{/* May be able to reference the gatsby docs on blog posts
    with tags to implement an image count-agnostic query/component
    see here: https://www.gatsbyjs.org/docs/adding-tags-and-categories-to-blog-posts/
  */}
export const query = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        title
        date
        imageOne {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        imageTwo {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        imageThree {
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
