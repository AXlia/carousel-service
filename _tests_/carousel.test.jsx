/* eslint-disable */
import React from 'react';
import { mount, shallow } from 'enzyme';
import styled from 'styled-components';


import Carousel from '../client/components/carousel.jsx';
import Item from '../client/components/item.jsx';

const ContentWrapper = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  box-sizing: border-box;
  transform: translatex(${(props) => props.index}px);
  transition: transform 0.2s ease-out;

`;

describe('<Carousel />', () => {
  it('should accept a homes prop', () => {
    let homes = [{'test': 'test'}];
    const wrapper = mount(<Carousel homes={homes} />);
    expect(wrapper.props().homes).toEqual(homes);
  });
  it('should contain an item component', () => {
    let homes = [{'test': 'test'}];
    const wrapper = mount(<Carousel homes={homes} />);
    expect(wrapper.containsMatchingElement(<Item />)).toEqual(true);
  });

});
