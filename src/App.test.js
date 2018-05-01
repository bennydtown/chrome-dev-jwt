import React from 'react';
import App from './App';
import renderer from 'react-test-renderer';

it('renders without crashing and no unexpected changes', () => {
  const component = renderer.create(<App />);
  expect(component.toJSON()).toMatchSnapshot();
});
