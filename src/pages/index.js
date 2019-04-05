import React from "react"
import { Link, graphql } from "gatsby"
import { css } from "@emotion/core"
import Layout from "../components/layout"
import HeroSection from "../components/hero_section.js"


export default ({ data }) => {

  return (
    <Layout>
      <HeroSection />
      <div css={css`
        padding-left: 1em;
        `}>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id} css={css`
            margin-bottom: 3em;
          `}>
            <Link
              to={node.fields.slug}
              css={css`
                text-decoration: none;
                color: inherit;
              `
}
            >
              <h3
                css={css`
                  margin-bottom: 0.25em;
                  color: #000000;
                `}
              >
                {node.frontmatter.title}{" "}

              </h3>
              <span
                css={css`
                  color: #2C3A47;
                `}
              >
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
            date(formatString: "DD MMMM, YYYY")
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
