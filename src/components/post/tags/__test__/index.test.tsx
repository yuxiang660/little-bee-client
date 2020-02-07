import Tags from '../index';

import React from 'react';
import renderer from 'react-test-renderer';

describe('Tags', () => {
  it('renders correctly', () => {
    const props = {
      tags: ['test_0', 'test_1'],
      tagSlugs: ['/test_0', '/test_1'],
    };

    const tree = renderer.create(<Tags {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
