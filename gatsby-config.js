/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`, 
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/projects/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
  ],
  siteMetadata: {
    title: 'Ulises Reyes | UX Designer',
    description: 'Ulises is a UX designer and Illustrator currently Working as an Interactoin designer for Google. Before Google, he has worked at Notarize, Broadlume (formerly AdHawk, TechStars Boulder 2015), and Smarking (Y Combinator W14)',
    copyright: 'Copyright 2022'
  },
}
