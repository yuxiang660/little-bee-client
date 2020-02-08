import Comments from '../index';

import React from 'react';
import renderer from 'react-test-renderer';
import { useStaticQuery, StaticQuery } from 'gatsby';

import siteMetadata from 'configs/jest/__fixtures__/site-metadata';
import { RenderCallback } from 'src/shared/types';

const mockedStaticQuery = StaticQuery as jest.Mock<StaticQuery>;
const mockedUseStaticQuery = useStaticQuery as jest.Mock<typeof useStaticQuery>;

describe('Comments', () => {
  beforeEach(() => {
    mockedStaticQuery.mockImplementationOnce(
      ({ render }: RenderCallback) => render(siteMetadata),
      // @ts-ignore
      mockedUseStaticQuery.mockReturnValue(siteMetadata),
    );
  });

  const props = {
    postTitle: 'test',
    postSlug: '/test',
  };

  it('renders correctly', () => {
    const tree = renderer.create(<Comments {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
