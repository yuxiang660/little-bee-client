'use strict';

const path = require('path');
const _ = require('lodash');
const createCategoriesPages = require('./pagination/categories');
const createTagsPages = require('./pagination/tags');
const createMainPages = require('./pagination/main');

const createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  // 404
  createPage({
    path: '/404',
    component: path.resolve('./src/templates/not-found.js')
  });

  // Tags list
  createPage({
    path: '/tags',
    component: path.resolve('./src/templates/tags-list.js')
  });

  // Categories list
  createPage({
    path: '/categories',
    component: path.resolve('./src/templates/categories-list.js')
  });

  // Posts and pages from markdown
  const result = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              folder
              slug
            }
          }
        }
      }
    }
  `);

  const { edges } = result.data.allMarkdownRemark;

  _.each(edges, (edge) => {
    if (_.get(edge, 'node.fields.folder') === 'pages') {
      createPage({
        path: edge.node.fields.slug,
        component: path.resolve('./src/templates/page.js'),
        context: { slug: edge.node.fields.slug }
      });
    } else if (_.get(edge, 'node.fields.folder') === 'posts') {
      createPage({
        path: edge.node.fields.slug,
        component: path.resolve('./src/templates/post.js'),
        context: { slug: edge.node.fields.slug }
      });
    }
  });

  // Feeds
  await createTagsPages(graphql, actions);
  await createCategoriesPages(graphql, actions);
  await createMainPages(graphql, actions);
};


module.exports = createPages;
