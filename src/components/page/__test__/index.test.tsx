import Page from '../index';

import React from 'react';
import renderer from 'react-test-renderer';

describe('Page', () => {
  const props = {
    children: 'test',
    title: 'test',
  };

  it('renders correctly', () => {
    const tree = renderer.create(<Page {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
