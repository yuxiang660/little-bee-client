'use strict';

module.exports = {
  markdownRemark: {
    id: 'test-123',
    html: '<p>test</p>',
    fields: {
      date: '2016-09-01',
      tagSlugs: ['/test_0', '/test_1'],
    },
    frontmatter: {
      description: 'test',
      title: 'test',
      tags: ['test_0', 'test_1'],
    },
  },
};
