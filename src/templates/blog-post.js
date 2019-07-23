import React from "react"
import { graphql } from "gatsby"
import Img from 'gatsby-image'
import Layout from "../components/layout"
import NextProject from "../components/NextProject"
import SEO from "../components/SEO"
import { motion } from "framer-motion"


const variants = {
  start: { y: 50, opacity: 0 },
  end: { y: 0, opacity: 1 },
}

export default ({ data, location, pageContext}) => {
  const post = data.markdownRemark;
  const { frontmatter} = post;
  const { title, imageOne, imageTwo, imageThree, tags } = frontmatter;
  const { next, prev } = pageContext;
  return (
    <Layout>
      <SEO
        title={`Eponym Design Co. – ${title}`}
        description={post.html}
      />
      <motion.div
        className="project-body"
        initial="start"
        animate="end"
        transition={{ ease: "easeInOut", duration: 0.8 }}
        variants={variants}
      >
        <h1 className="project-title">{title}</h1>
        <div className="tags-line">
          <p className="tag">Tags:</p>
          {
            tags.map(tag =>{
              return(<p className="tag">{tag}</p>)
            })
          }
        </div>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <div className="project-image-group">
        <Img
          fluid={imageOne.childImageSharp.fluid}
          alt={title}
          className="project-image-main"
        />
        <Img
          fluid={imageTwo.childImageSharp.fluid}
          alt={title}
          className="project-image-secondary"
        />
        <Img
          fluid={imageThree.childImageSharp.fluid}
          alt={title}
          className="project-image-tertiary"
        />
        </div>
        <NextProject prev={prev} next={next}/>
      </motion.div>

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
        tags
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
