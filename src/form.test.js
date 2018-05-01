import React from 'react';
import form from './form';
import renderer from 'react-test-renderer';

it('renders without crashing and no unexpected changes', () => {
  const component = renderer.create(<form />);
  expect(component.toJSON()).toMatchSnapshot();
});
