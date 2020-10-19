require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: `Tresbien Agency`,
    siteUrl: `http://tresbien.agency/`,
    description: `Tresbien Agency`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: '35a0950edd9ee96c360dd98cf590f1',
      },
    },
  ],
};
