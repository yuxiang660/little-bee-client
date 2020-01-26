const configs = require('./configs/metadata.js');
const postCssPlugins = require('./configs/postcss.js');

module.exports = {
  pathPrefix: configs.pathPrefix,
  siteMetadata: {
    contents: configs.siteMetadata,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `static`,
        path: `${__dirname}/static`,
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-remark-katex`,
      options: {
        // Add any KaTeX options from https://github.com/KaTeX/KaTeX/blob/master/docs/options.md here
        strict: `ignore`
      }
    },
    `gatsby-plugin-flow`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        postCssPlugins: [...postCssPlugins],
        cssLoaderOptions: {
          camelCase: false,
        }
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: configs.title,
        short_name: configs.title,
        start_url: '/',
        background_color: '#FFF',
        theme_color: '#F7A046',
        display: 'standalone',
        icon: 'static/images/photo.jpg'
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
