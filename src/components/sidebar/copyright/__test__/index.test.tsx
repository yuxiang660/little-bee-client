import Copyright from '../index';

import React from 'react';
import renderer from 'react-test-renderer';

describe('Copyright', () => {
  it('renders correctly', () => {
    const props = {
      copyright: 'copyright',
    };

    const tree = renderer.create(<Copyright {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
