import NotFoundTemplate from '../not-found';

import React from 'react';
import renderer from 'react-test-renderer';
import { RenderCallback } from 'src/shared/types';

import { useStaticQuery, StaticQuery } from 'gatsby';
import siteMetadata from 'configs/jest/__fixtures__/site-metadata';

const mockedStaticQuery = StaticQuery as jest.Mock<StaticQuery>;
const mockedUseStaticQuery = useStaticQuery as jest.Mock<typeof useStaticQuery>;

describe('NotFoundTemplate', () => {
  beforeEach(() => {
    mockedStaticQuery.mockImplementationOnce(
      ({ render }: RenderCallback) => render(siteMetadata),
      // @ts-ignore
      mockedUseStaticQuery.mockReturnValue(siteMetadata),
    );
  });

  it('renders correctly', () => {
    const tree = renderer.create(<NotFoundTemplate />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
