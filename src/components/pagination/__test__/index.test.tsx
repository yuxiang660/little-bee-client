import Pagination from '../index';

import React from 'react';
import renderer from 'react-test-renderer';

describe('Pagination', () => {
  const props = {
    prevPagePath: '/page/1',
    nextPagePath: '/page/3',
    hasNextPage: true,
    hasPrevPage: true,
  };

  it('renders correctly', () => {
    const tree = renderer.create(<Pagination {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
