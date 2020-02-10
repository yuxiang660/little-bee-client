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
    component: path.resolve('./src/templates/not-found.tsx'),
  });

  // Tags list
  createPage({
    path: '/tags',
    component: path.resolve('./src/templates/tags-list.tsx'),
  });

  // Categories list
  createPage({
    path: '/categories',
    component: path.resolve('./src/templates/categories-list.tsx'),
  });

  // Posts and pages from markdown
  const result = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              template
              slug
              date
            }
          }
        }
      }
    }
  `);

  const { edges } = result.data.allMarkdownRemark;

  _.each(edges, edge => {
    if (_.get(edge, 'node.fields.template') === 'pages') {
      createPage({
        path: edge.node.fields.slug,
        component: path.resolve('./src/templates/page.tsx'),
        context: { slug: edge.node.fields.slug },
      });
    } else if (_.get(edge, 'node.fields.template') === 'posts') {
      createPage({
        path: edge.node.fields.slug,
        component: path.resolve('./src/templates/post.tsx'),
        context: { slug: edge.node.fields.slug },
      });
    }
  });

  // Feeds
  await createTagsPages(graphql, actions);
  await createCategoriesPages(graphql, actions);
  await createMainPages(graphql, actions);
};

module.exports = createPages;
