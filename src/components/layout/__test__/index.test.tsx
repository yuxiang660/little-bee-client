import Layout from '../index';

import React from 'react';
import renderer from 'react-test-renderer';
import { RenderCallback } from 'src/shared/types';

import { useStaticQuery, StaticQuery } from 'gatsby';
import siteMetadata from 'configs/jest/__fixtures__/site-metadata';

const mockedStaticQuery = StaticQuery as jest.Mock<StaticQuery>;
const mockedUseStaticQuery = useStaticQuery as jest.Mock<typeof useStaticQuery>;

describe('Layout', () => {
  const props = {
    ...siteMetadata,
    children: 'test',
    description: 'test',
    title: 'test',
  };

  beforeEach(() => {
    mockedStaticQuery.mockImplementationOnce(
      ({ render }: RenderCallback) => render(props),
      // @ts-ignore
      mockedUseStaticQuery.mockReturnValue(props),
    );
  });

  it('renders correctly', () => {
    const tree = renderer.create(<Layout {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
