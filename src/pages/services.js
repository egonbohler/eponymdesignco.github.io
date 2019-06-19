import React from 'react'
import Layout from "../components/layout"
import { Link, graphql } from 'gatsby'
import ServicePreview from '../components/ServicePreview'

export default ({ data }) => {
  console.log('data', data);
  return(
    <Layout>
      <div className="background secondary">
        <h3 className="team-title work-title">Services</h3>
        {data.allMarkdownRemark.edges.map(({ node }, index) => {
          if(index === 0 || index % 2 === 0){
            return(
                <ServicePreview
                  key={node.id}
                  title={node.frontmatter.title}
                  tags={node.frontmatter.examples}
                  coverImage={node.frontmatter.coverImage}
                  position="service-left"
                  fadeDirection="fade-right"
                  excerpt={node.frontmatter.description}
                />
            )
          } else {
            return(
                <ServicePreview
                  key={node.id}
                  title={node.frontmatter.title}
                  tags={node.frontmatter.examples}
                  tagPaths={node.frontmatter.examplePaths}
                  coverImage={node.frontmatter.coverImage}
                  position="service-right"
                  fadeDirection="fade-left"
                  excerpt={node.frontmatter.description}
                />
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
          type: { eq: "service" }
        }
      }
      sort: { fields: [frontmatter___order], order: ASC }
  ) {
      edges {
        node {
          id
          frontmatter {
            title
            examples {
              title
              path
            }
            order
            description
            coverImage {
              childImageSharp {
                fluid(maxWidth: 1000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }

          }
        }
      }
    }
  }
`
