/* eslint-disable @typescript-eslint/camelcase */
const configs = require('./configs/metadata.js');
const postCssPlugins = require('./configs/postcss.js');

module.exports = {
  pathPrefix: configs.pathPrefix,
  siteMetadata: {
    contents: configs.siteMetadata,
  },
  plugins: [
    'gatsby-plugin-root-import',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `static`,
        path: `${__dirname}/static`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-relative-images-v2`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              withWebp: true,
              ignoreFileExtensions: [],
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              showLineNumbers: true,
              prompt: {
                user: 'root',
                host: 'localhost',
                global: true,
              },
            },
          },
          `gatsby-remark-autolink-headers`,
          {
            resolve: `gatsby-remark-katex`,
            options: {
              strict: `ignore`,
            },
          },
        ],
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        postCssPlugins: [...postCssPlugins],
        cssLoaderOptions: {
          camelCase: false,
        },
      },
    },
    'gatsby-plugin-antd',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: configs.siteMetadata.title,
        short_name: configs.siteMetadata.title,
        start_url: '/',
        background_color: '#FFF',
        theme_color: '#F7A046',
        display: 'standalone',
        icon: 'static/images/index/icon.png',
      },
    },
    `gatsby-plugin-offline`,
  ],
};
