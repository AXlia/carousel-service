/* eslint-disable */
import React from 'react';
import { mount, shallow } from 'enzyme';

import Item from '../client/components/item.jsx';

describe('<Item />', () => {
  it('should accept a home prop', () => {
    let home = {'test': 'test'};
    const wrapper = mount(<Item home={home} />);
    expect(wrapper.props().home).toEqual(home);
  });
  it('should render the Liked component if the like prop has a value of true', () => {
    let home = {
      '_id': '60087aca95ed407769201bc1',
      'address': '2511 Alexys Ramp',
      'neighborhood': 'SOMA',
      'city': 'Schuylerport',
      'state': 'Vermont',
      'imageUrl': 'https://hrsf132carouselimages.s3-us-west-1.amazonaws.com/5',
      'price': '$359,000',
      'bedrooms': 3,
      'bathrooms': 7,
      'sqft': '5679',
      'realtor': 'Constance Spinka Baumbach - Jacobson',
      'newTag': true,
      'liked': true,
      'trending': 'none',
    };
    const wrapper = shallow(<Item home={home} />);
    expect(wrapper.containsMatchingElement(<Liked />)).toEqual(true);
  });
  it('should render the NewTag component if the newTag prop has a value of true', () => {
    let home = {
      '_id': '60087aca95ed407769201bc1',
      'address': '2511 Alexys Ramp',
      'neighborhood': 'SOMA',
      'city': 'Schuylerport',
      'state': 'Vermont',
      'imageUrl': 'https://hrsf132carouselimages.s3-us-west-1.amazonaws.com/5',
      'price': '$359,000',
      'bedrooms': 3,
      'bathrooms': 7,
      'sqft': '5679',
      'realtor': 'Constance Spinka Baumbach - Jacobson',
      'newTag': true,
      'liked': true,
      'trending': 'none',
    };
    const wrapper = shallow(<Item home={home} />);
    expect(wrapper.containsMatchingElement(<NewTag />)).toEqual(true);
  });
  it('should not render a trend Arrow if the trend prop has a value of none', () => {
    let home = {
      '_id': '60087aca95ed407769201bc1',
      'address': '2511 Alexys Ramp',
      'neighborhood': 'SOMA',
      'city': 'Schuylerport',
      'state': 'Vermont',
      'imageUrl': 'https://hrsf132carouselimages.s3-us-west-1.amazonaws.com/5',
      'price': '$359,000',
      'bedrooms': 3,
      'bathrooms': 7,
      'sqft': '5679',
      'realtor': 'Constance Spinka Baumbach - Jacobson',
      'newTag': true,
      'liked': true,
      'trending': 'up',
    };
    const wrapper = shallow(<Item home={home} />);
    expect(wrapper.containsMatchingElement(<TrendDown />)).toEqual(false);
    expect(wrapper.containsMatchingElement(<TrendUp />)).toEqual(false);
  });
});