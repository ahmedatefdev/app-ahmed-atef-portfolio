import React from 'react';
import { mount } from 'enzyme';
import HomePage from '../index';

describe('index page', () => {
  it('should have App component', () => {
    const subject = mount(<HomePage />);
    expect(subject.find('Layout')).toHaveLength(1);
  });
});
