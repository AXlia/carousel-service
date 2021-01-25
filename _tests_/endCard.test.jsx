/* eslint-disable */
import React from 'react';
import { mount, shallow } from 'enzyme';

import EndCard from '../client/components/endCard.jsx';

describe('<EndCard />', () => {
  it('should accept a loc prop', () => {
    let location = 'San Francisco';
    const wrapper = mount(<EndCard loc={location} />);
    expect(wrapper.props().loc).toEqual(location);
  });
  it('should recieve a string for loc', () => {
    const props = { loc: 'San Francisco' };
    const wrapper = mount(<EndCard {...props} />);
    expect(wrapper.prop('loc')).toBeString();
  });
  //test on hover event for button
  it('should call hover when element is hovered over', () => {
    const wrapper = mount(<Item {...props}/>);
    jest.spyOn(wrapper.props.onHover);

    expect(wrapper.props.onHover.mock.calls.length).toBe(1);
  });
});