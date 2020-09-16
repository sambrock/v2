/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-source-strapi`,
      options: { apiURL: `http://localhost:1337`, contentTypes: ['project'] },
      queryLimit: 1000
    },
    `gatsby-plugin-sass`
  ],
}
