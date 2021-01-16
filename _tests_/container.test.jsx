import React from 'react';
import { mount, shallow } from 'enzyme';

import Container from '../client/components/container.jsx';

describe('<MyComponent />', () => {
  it('should check if "componentDidMount()"', () => {
    jest.spyOn(Container.prototype, 'componentDidMount');
    const wrapper = shallow(<Container />);
    expect(Container.prototype.componentDidMount.mock.calls.length).toBe(1);
  });
});
