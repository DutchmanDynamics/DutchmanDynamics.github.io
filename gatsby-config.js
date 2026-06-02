module.exports = {
  pathPrefix: '/DutchmanDynamics.github.io', // 👈 IMPORTANT (must match repo name)

  siteMetadata: {
    title: `Dutchman Dynamics`,
    description: `CanSat and UAV engineering team projects.`,
    author: `DutchmanDynamics`,
    siteUrl: `https://dutchmandynamics.github.io/`,
  },

  plugins: [
    'gatsby-plugin-postcss',

    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Dutchman Dynamics`,
        short_name: `DDynamics`,
        start_url: `/`,
        background_color: `#111827`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-logo.png`,
      },
    },
  ],
};
