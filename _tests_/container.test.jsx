/* eslint-disable */
import React from 'react';
import { mount, shallow } from 'enzyme';

import Container from '../client/components/container.jsx';
import Carousel from '../client/components/carousel.jsx';

describe('<Container />', () => {
  it('should call componentDidMount', () => {
    jest.spyOn(Container.prototype, 'componentDidMount');
    const wrapper = shallow(<Container />);
    expect(Container.prototype.componentDidMount.mock.calls.length).toBe(1);
  });
  it('should contain at least a Carousel Component', () => {
    const wrapper = shallow(<Container />);
    expect(wrapper.containsMatchingElement(<Carousel />)).toEqual(true);
  })
});
