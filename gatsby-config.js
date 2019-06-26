 const cfg = {
  siteMetadata: {
    title: 'Eponym Design Co.',
    description: 'Eponym Design Collective. A Cleveland, Ohio based creative studio.',
    url: 'https://eponym.design',
    author: 'Eponym Design Co.',
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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Eponym Design Co.",
        short_name: "Eponym",
        start_url: "/",
        background_color: "#079992",
        theme_color: "#079992",
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "standalone",
        icon: "src/img/eponym.png", // This path is relative to the root of the site.
        // An optional attribute which provides support for CORS check.
        // If you do not provide a crossOrigin option, it will skip CORS for manifest.
        // Any invalid keyword or empty string defaults to `anonymous`
        crossOrigin: `use-credentials`,
      }
    },
    'gatsby-plugin-offline'
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
