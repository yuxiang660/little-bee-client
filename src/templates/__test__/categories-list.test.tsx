import CategoriesListTemplate from './../categories-list';

import React from 'react';
import renderer from 'react-test-renderer';
import { RenderCallback } from 'src/shared/types';

import { useStaticQuery, StaticQuery } from 'gatsby';
import siteMetadata from 'configs/jest/__fixtures__/site-metadata';
import allMarkdownRemark from 'configs/jest/__fixtures__/all-markdown-remark';

const mockedStaticQuery = StaticQuery as jest.Mock<StaticQuery>;
const mockedUseStaticQuery = useStaticQuery as jest.Mock<typeof useStaticQuery>;

describe('CategoriesListTemplate', () => {
  const props = {
    ...siteMetadata,
    ...allMarkdownRemark,
  };

  beforeEach(() => {
    mockedStaticQuery.mockImplementationOnce(
      ({ render }: RenderCallback) => render(props),
      // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore
      mockedUseStaticQuery.mockReturnValue(props),
    );
  });

  it('renders correctly', () => {
    const tree = renderer.create(<CategoriesListTemplate />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
