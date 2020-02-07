import Sidebar from '../index';

import React from 'react';
import renderer from 'react-test-renderer';
import { useStaticQuery, StaticQuery } from 'gatsby';

import siteMetadata from 'configs/jest/__fixtures__/site-metadata';
import { RenderCallback } from 'src/shared/types';

const mockedStaticQuery = StaticQuery as jest.Mock<StaticQuery>;
const mockedUseStaticQuery = useStaticQuery as jest.Mock<typeof useStaticQuery>;

describe('Sidebar', () => {
  beforeEach(() => {
    mockedStaticQuery.mockImplementationOnce(
      ({ render }: RenderCallback) => render(siteMetadata),
      // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore
      mockedUseStaticQuery.mockReturnValue(siteMetadata),
    );
  });

  const props = {
    isIndex: true,
  };

  it('renders correctly', () => {
    const tree = renderer.create(<Sidebar {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
