import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import HeroSection from "../components/hero_section.js"
import ProjectPreview from "../components/ProjectPreview"


export default ({ data }) => {

  return (
    <Layout currentPath='/'>
      <HeroSection />
      <div className="background">
        <h3 className="team-title">Who We Are</h3>
        <div className="studio-content">
          <p className="center">Eponym is a small design and web development agency based in Cleveland, Ohio.</p>
          <p className="center">
            No matter the project, we take a highly tailored approach. We start with defining your business goals and work iteratively toward solutions optimized
            to achieve your desired outcome.
            If you're looking to start a new project, consider Eponym.
          </p>
        </div>
      </div>
      <div className="background secondary">
        <h3 className="team-title">Past Work</h3>
        <div className="scroll-wrapper">
          {data.allMarkdownRemark.edges.map(({ node }) => (
              <Link to={node.fields.slug}>
                <ProjectPreview key={node.id} title={node.frontmatter.title} date={node.frontmatter.date} previewImg={node.frontmatter.imageOne}/>
              </Link>
            ))}
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM, YYYY")
            imageOne {
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
