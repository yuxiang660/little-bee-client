import Author from '../index';

import React from 'react';
import renderer from 'react-test-renderer';

describe('Author', () => {
  const props = {
    author: {
      name: 'test',
      photo: '/photo.jpg',
      bio: 'test',
    },
    isIndex: false,
  };

  it('renders correctly', () => {
    const tree = renderer.create(<Author {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
