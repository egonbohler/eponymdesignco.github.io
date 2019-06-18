 const cfg = {
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
        link: '/work',
      },
      {
        name: 'Services',
        link: '/services',
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
    'gatsby-plugin-sass',
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
  ],
}

if (process.env.CONTEXT === "production") {
  const googleAnalyticsCfg = {
    resolve: "gatsby-plugin-google-analytics",
    options: {
      trackingId: "UA-139684080-1" ,
      head: false,
      anonymize: true,
      respectDNT: true,
    }
  };
  cfg.plugins.push(googleAnalyticsCfg);
}

module.exports = cfg;
