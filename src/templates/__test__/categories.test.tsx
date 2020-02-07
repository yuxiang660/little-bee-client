// @ts-nocheck
import CategoryTemplate from './../category';

import React from 'react';
import renderer from 'react-test-renderer';
import { RenderCallback } from 'src/shared/types';

import { useStaticQuery, StaticQuery } from 'gatsby';
import allMarkdownRemark from 'configs/jest/__fixtures__/all-markdown-remark';
import pageContext from 'configs/jest/__fixtures__/page-context';
import siteMetadata from 'configs/jest/__fixtures__/site-metadata';

const mockedStaticQuery = StaticQuery as jest.Mock<StaticQuery>;
const mockedUseStaticQuery = useStaticQuery as jest.Mock<typeof useStaticQuery>;

describe('CategoryTemplate', () => {
  const props = {
    data: {
      ...allMarkdownRemark,
    },
    ...pageContext,
  };

  beforeEach(() => {
    mockedStaticQuery.mockImplementationOnce(
      ({ render }: RenderCallback) => render(siteMetadata),
      mockedUseStaticQuery.mockReturnValue(siteMetadata),
    );
  });

  it('renders correctly', () => {
    const tree = renderer.create(<CategoryTemplate {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
