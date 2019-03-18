import React from "react"
import { Link, graphql } from "gatsby"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"
import Layout from "../components/layout"


export default ({ data }) => {

  return (
    <Layout>
      <div css={css`
        padding-left: ${rhythm(1)};
        grid-column: 1 / span 5;
        `}>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id} css={css`
            margin-bottom: ${rhythm(3)};
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
                  margin-bottom: ${rhythm(0.25)};
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
              <span
                css={css`
                  color: #2C3A47;
                `}
              >
               {node.frontmatter.project_type}
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
