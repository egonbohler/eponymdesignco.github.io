import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import HeroSection from "../components/hero_section.js"
import AboutSection from "../components/AboutSection"
import ProjectPreview from "../components/ProjectPreview"


export default ({ data }) => {

  return (
    <Layout currentPath='/'>
      <HeroSection />
      <AboutSection />
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
