module.exports = {
  siteMetadata: {
    title: 'Eponym Design Co.',
    description: 'A Cleveland, OH based creative studio.',
    contact: {
      phone: 'XXX XXX XXX',
      email: 'hello@eponym.design',
    },
    menuLinks: [
      {
        name: 'Work',
        link: '/',
      },
      {
        name: 'Our Studio',
        link: '/studio',
      },
      {
        name: 'Contact',
        link: '/contact',
      },
    ],
  },
  plugins: [
    `gatsby-transformer-remark`,
    `gatsby-plugin-emotion`,
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },

    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}
