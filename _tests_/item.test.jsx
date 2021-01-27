/* eslint-disable */
import React from 'react';
import { mount, shallow } from 'enzyme';
import styled from 'styled-components';

import Item from '../client/components/item.jsx';
import { ArrowDown } from '@styled-icons/fa-solid/ArrowDown';
import { ArrowUp } from '@styled-icons/fa-solid/ArrowUp';
import { Heart } from '@styled-icons/evaicons-solid/Heart';

const TrendUp = styled(ArrowUp)`
  color: rgb(0, 178, 91);
`;
const TrendDown = styled(ArrowDown)`
  color: rgb(217, 60, 35);
`;

const Liked = styled(Heart)`
  color: rgb(255, 94, 63);
  position: absolute;
  z-index: 1;
  display: inline-flex;
  top: 0;
  right: 0;
  padding: 5px;
`;

const NewTag = styled.span`
  width: 28.453px;
  height: 15px;
  color: rgb(5, 34, 134);
  background-color: rgb(255, 255, 255);
  font-size: 12px;
  line-height: 1.33;
  padding: 2px 4px;
  border-radius: 4px;
  display: inline-flex;
  font-weight: bold;
  position: absolute;
  z-index: 1;
  margin: 8px;
  top: 0;
  left: 0;
`;

const BoldText = styled.div`
  font-weight: bold;
  font-size: 20px;
  white-space: nowrap;
  overflow: hidden;
  test-overflow: ellipsis;
  display: inline-block;
`;

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
    const wrapper = mount(<Item home={home} />);
    console.log(wrapper);
    expect(wrapper.find('div')).toEqual(true);
  });
  // it('should render the NewTag component if the newTag prop has a value of true', () => {
  //   let home = {
  //     '_id': '60087aca95ed407769201bc1',
  //     'address': '2511 Alexys Ramp',
  //     'neighborhood': 'SOMA',
  //     'city': 'Schuylerport',
  //     'state': 'Vermont',
  //     'imageUrl': 'https://hrsf132carouselimages.s3-us-west-1.amazonaws.com/5',
  //     'price': '$359,000',
  //     'bedrooms': 3,
  //     'bathrooms': 7,
  //     'sqft': '5679',
  //     'realtor': 'Constance Spinka Baumbach - Jacobson',
  //     'newTag': true,
  //     'liked': true,
  //     'trending': 'none',
  //   };
  //   const wrapper = mount(<Item home={home} />);
  //   expect(wrapper.containsMatchingElement(<NewTag />)).toEqual(true);
  // });
  // it('should not render a trend Arrow if the trend prop has a value of none', () => {
  //   let home = {
  //     '_id': '60087aca95ed407769201bc1',
  //     'address': '2511 Alexys Ramp',
  //     'neighborhood': 'SOMA',
  //     'city': 'Schuylerport',
  //     'state': 'Vermont',
  //     'imageUrl': 'https://hrsf132carouselimages.s3-us-west-1.amazonaws.com/5',
  //     'price': '$359,000',
  //     'bedrooms': 3,
  //     'bathrooms': 7,
  //     'sqft': '5679',
  //     'realtor': 'Constance Spinka Baumbach - Jacobson',
  //     'newTag': true,
  //     'liked': true,
  //     'trending': 'up',
  //   };
  //   const wrapper = mount(<Item home={home} />);
  //   expect(wrapper.containsMatchingElement(<TrendDown />)).toEqual(false);
  //   expect(wrapper.containsMatchingElement(<TrendUp />)).toEqual(false);
  // });
});