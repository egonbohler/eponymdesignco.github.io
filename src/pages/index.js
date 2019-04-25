import React from "react"
import { Link, graphql } from "gatsby"
import { css } from "@emotion/core"
import Layout from "../components/layout"
import HeroSection from "../components/hero_section.js"


export default ({ data }) => {

  return (
    <Layout currentPath='/'>
      <HeroSection />
      <div className="homepage-body">
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id} className="home-project-link">
            <Link
              className="project-title-link"
              to={node.fields.slug}
            >
              <h3 className="project-title">
                {node.frontmatter.title}{" "}
              </h3>
              <span className="project-date">
               {node.frontmatter.date}
              </span>
            </Link>
          </div>
        ))}
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
