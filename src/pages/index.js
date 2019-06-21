import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import HeroSection from "../components/hero_section.js"
import AboutSection from "../components/AboutSection"
import ProjectPreview from "../components/ProjectPreview"
import SEO from "../components/SEO"

export default ({ data }) => {
  return (
    <Layout currentPath='/'>
      <SEO title="Eponym Design Co."/>
      <HeroSection />
      <AboutSection />
      <div className="background secondary">
        <h3 className="team-title">Featured Work</h3>
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
        <Link to="/work">
          <div className="button button-primary contact-button project-button" aria-label="View All Projects">
          All Projects
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
          featured: { eq: true }
          type: { eq: "project" }
        }
      }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
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
