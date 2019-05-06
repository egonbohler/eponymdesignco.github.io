module.exports = {
  siteMetadata: {
    title: 'Eponym Design Co.',
    description: 'Eponym Design Collective. A Cleveland, Ohio based creative studio.',
    url: 'https://eponym.design',
    facebookAppID: '',
    contact: {
      phone: '440 561 6386',
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
    {
       resolve: `gatsby-source-filesystem`,
       options: {
         path: `${__dirname}/src/img`,
         name: 'img',
       },
     },
    `gatsby-transformer-remark`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-emotion`,
    'gatsby-plugin-sass',
    `gatsby-plugin-react-helmet`
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
