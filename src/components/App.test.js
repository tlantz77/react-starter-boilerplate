import React from 'react';
import { shallow } from 'enzyme';

import App from './App';

let component, props;

let getShallow = () => {
  if (component) {
    return component;
  }
  component = shallow(<App {...props}/>);
  return component;
};

beforeEach(() => {
  component = null;
  props = {};
});

it('should render a header with text', () => {
  expect(getShallow().find('.header').text()).toEqual('React Boilerplate');
});