import React from 'react';
import {shallow} from 'enzyme';
import Primary from '../../src/assets/js/partials/navigation/primary';
import {NavLink} from 'react-router-dom';

describe('<Primary />', () => {
  let component;
  
  beforeEach(() => {
    component = shallow(<Primary />);
  });
  
  it('should exist', () => {
    expect(component).toBeDefined();
  });
  
  it('contains 3 <NavLink /> components', () => {
    expect(component.find(NavLink)).toHaveLength(3)
  });
})
