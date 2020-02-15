const _ = require('lodash');
const { createFilePath } = require('gatsby-source-filesystem');
const { fmImagesToRelative } = require('gatsby-remark-relative-images-v2');

const onCreateNode = ({ node, actions, getNode }) => {
  fmImagesToRelative(node);
  const { createNodeField } = actions;

  if (node.internal.type === 'MarkdownRemark') {
    createNodeField({
      node,
      name: 'slug',
      value: createFilePath({ node, getNode }),
    });

    createNodeField({
      node,
      name: 'date',
      value: new Date(`${getNode(node.parent).name}`.split(/---/)[0] + 'T00:00:00.000Z'),
    });

    createNodeField({
      node,
      name: 'title',
      value: `${getNode(node.parent).name}`.split(/---/)[1],
    });

    createNodeField({
      node,
      name: 'template',
      value: `${getNode(node.parent).relativeDirectory}`.split(/\//)[0],
    });

    const excerpt =
      node.internal.content
        .substring(0, 200)
        .replace(/\r\n/g, '')
        .replace(/\n/g, '') + '...\r\n';
    createNodeField({
      node,
      name: 'excerpt',
      value: excerpt,
    });

    if (node.frontmatter.tags) {
      const tagSlugs = node.frontmatter.tags.map(tag => `/tag/${_.kebabCase(tag)}/`);
      createNodeField({ node, name: 'tagSlugs', value: tagSlugs });
    }

    if (node.frontmatter.category) {
      const categorySlug = `/category/${_.kebabCase(node.frontmatter.category)}/`;
      createNodeField({ node, name: 'categorySlug', value: categorySlug });
    }
  }
};

module.exports = onCreateNode;
