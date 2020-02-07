import Post from '../index';

import React from 'react';
import renderer from 'react-test-renderer';

import { useStaticQuery, StaticQuery } from 'gatsby';
import siteMetadata from 'configs/jest/__fixtures__/site-metadata';
import { RenderCallback } from 'src/shared/types';

const mockedStaticQuery = StaticQuery as jest.Mock<StaticQuery>;
const mockedUseStaticQuery = useStaticQuery as jest.Mock<typeof useStaticQuery>;

describe('Post', () => {
  beforeEach(() => {
    mockedStaticQuery.mockImplementationOnce(
      ({ render }: RenderCallback) => render(siteMetadata),
      // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore
      mockedUseStaticQuery.mockReturnValue(siteMetadata),
    );
  });

  const props = {
    post: {
      id: 'test-123',
      html: '<p>test</p>',
      fields: {
        slug: '/test',
        date: '2016-09-01',
        categorySlug: '/test-category',
        tagSlugs: ['/test_0', '/test_1'],
      },
      frontmatter: {
        tags: ['test_0', 'test_1'],
        title: 'test',
      },
    },
  };

  it('renders correctly', () => {
    const tree = renderer.create(<Post {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
