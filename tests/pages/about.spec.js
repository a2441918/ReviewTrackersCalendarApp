import React from 'react';
import {shallow} from 'enzyme';
import About from '../../src/assets/js/views/About/index';
  
let component;

beforeEach(() => {
  component = shallow(<About />);
});

it('should exist', () => {
  expect(component).toBeDefined();
});

it('should have one <h1>', () => {
  expect(component.find('h1')).toHaveLength(1);
});

it('should have the heading text \'About\'', () => {
  expect(component.find('h1').text()).toBe('About');
});
