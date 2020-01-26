'use strict';

const path = require('path');
const _ = require('lodash');

const createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  // 404
  createPage({
    path: '/404',
    component: path.resolve('./src/templates/not-found-template.js')
  });

  // Posts and pages from markdown
  const result = await graphql(`
    {
      allMarkdownRemark(
        filter: { frontmatter: { draft: { ne: true } } }
      ) {
        edges {
          node {
            frontmatter {
              template
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `);
};


module.exports = createPages;
