/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Sam Brocklehurst",
    description:
      "Sam Brocklehurst is currently studying Web Technologies at the Univeristy of Huddersifeld, final year.",
    url: "https://sambrock.net", 
    image: "/og.png", 
    twitterUsername: "@sxmbrock",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/json/`,
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: 'gatsby-plugin-transition-link',
      options: {
        layout: require.resolve(`./src/components/layouts/layout.js`),
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/layouts/layout.js`),
      },
    },
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-robots-txt'
  ],
}
