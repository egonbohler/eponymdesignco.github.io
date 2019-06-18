import React from 'react'
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import ProjectPreview from "../components/ProjectPreview"

export default ({ data }) => {
  return(
    <Layout>
      <div className="background secondary ">
        <h3 className="team-title work-title">Past Work</h3>
          {data.allMarkdownRemark.edges.map(({ node }, index) => {
            if(index === 0 || index % 2 === 0){
              return(
                <Link to={node.fields.slug} key={node.id}>
                  <ProjectPreview
                    title={node.frontmatter.title}
                    date={node.frontmatter.date}
                    tags={node.frontmatter.tags}
                    previewImg={node.frontmatter.previewImage}
                    coverImage={node.frontmatter.coverImage}
                    position="left"
                    fadeDirection="fade-right"
                    excerpt={node.excerpt}
                  />
                </Link>
              )
            } else {
              return(
                <Link to={node.fields.slug} key={node.id}>
                  <ProjectPreview
                    title={node.frontmatter.title}
                    date={node.frontmatter.date}
                    tags={node.frontmatter.tags}
                    previewImg={node.frontmatter.previewImage}
                    coverImage={node.frontmatter.coverImage}
                    position="right"
                    fadeDirection="fade-left"
                    excerpt={node.excerpt}
                  />
                </Link>
              )
            }

          })}
          <Link to="/contact">
            <div className="button button-primary contact-button project-button">
            Contact us
            </div>
          </Link>
      </div>
    </Layout>
  )

}

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: {
        frontmatter: {
          type: { eq: "project" }
        }
      }
      sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            tags
            date(formatString: "MMMM, YYYY")
            coverImage {
              childImageSharp {
                fluid(maxWidth: 1000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            previewImage {
              childImageSharp {
                fluid(maxWidth: 1000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
