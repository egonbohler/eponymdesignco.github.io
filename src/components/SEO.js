import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

function SEO({ description, lang, meta, keywords, title }) {
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        const metaDescription =
          description || data.site.siteMetadata.description
        return (
          <Helmet
            htmlAttributes={{
              lang,
            }}
            title={title}
            titleTemplate={`%s | ${data.site.siteMetadata.title}`}
            meta={[
              {
                name: `description`,
                content: metaDescription,
              },
              {
                property: `og:title`,
                content: title,
              },
              {
                property: `og:description`,
                content: metaDescription,
              },
              {
                property: `og:type`,
                content: `website`,
              },
              {
                name: `twitter:card`,
                content: `summary`,
              },
              {
                name: `twitter:creator`,
                content: data.site.siteMetadata.author,
              },
              {
                name: `twitter:title`,
                content: title,
              },
              {
                name: `twitter:description`,
                content: metaDescription,
              },
            ]
              .concat(
                keywords.length > 0
                  ? {
                      name: `keywords`,
                      content: keywords.join(`, `),
                    }
                  : []
              )
              .concat(meta)}
          />
        )
      }}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: [
    'Eponym',
    'Eponym Design',
    'Eponym Design Company',
    'Eponym Design Collective',
    'Eponym Design Company Cleveland',
    'Eponym Design Collective Cleveland',
    'Eponym Design Company Cleveland Ohio',
    'Eponym Design Collective Cleveland Ohio',
    'design',
    'design cleveland',
    'design cleveland ohio',
    'designer',
    'designer near me',
    'designer cleveland',
    'designer cleveland ohio',
    'designers',
    'designers near me',
    'designers cleveland',
    'designers cleveland ohio',
    'graphic design',
    'graphic design cleveland',
    'graphic design cleveland ohio',
    'graphic designer near me',
    'graphic designers near me',
    'web design',
    'web design cleveland',
    'web design cleveland ohio',
    'web designer near me',
    'web designers near me',
    'web developer',
    'web developer cleveland',
    'web developer cleveland ohio',
    'web developer near me',
    'web developers near me',
    'web development',
    'web development cleveland',
    'web development cleveland ohio',
    'web development near me',
    'creative agency',
    'creative agency near me',
    'creative agency cleveland',
    'creative agency cleveland ohio',
    'design agency',
    'design agency near me',
    'design agency cleveland',
    'design agency cleveland ohio',
    'digital advertising',
    'digital advertising near me',
    'digital advertising cleveland',
    'digital advertising cleveland ohio',
    'print advertising',
    'print advertising near me',
    'print advertising cleveland',
    'print advertising cleveland ohio',
    'logo design',
    'logo design near me',
    'logo design cleveland',
    'logo design cleveland ohio',
    'brand identity',
    'brand identity near me',
    'brand identity cleveland',
    'brand identity cleveland ohio',
    'rebrand',
    'rebrand near me',
    'rebrand cleveland',
    'rebrand cleveland ohio',
  ],
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
}

export default SEO

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
