import React from 'react';
import { mount, shallow } from 'enzyme';

import Carousel from '../client/components/carousel.jsx';

describe('<Carousel />', () => {
  it('should accept a homes prop', () => {
    let homes = [{'test': 'test'}];
    const wrapper = mount(<Carousel homes={homes} />);
    expect(wrapper.props().homes).toEqual(homes);
  });
  it('should contain an item component', () => {
    let homes = [{'test': 'test'}, {'test1': 'test1'}];
    const wrapper = shallow(<Carousel homes={homes} />);
    expect(wrapper.find('div')).to.have.lengthOf(homes.length);
  });
});
