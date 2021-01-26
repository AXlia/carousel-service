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

const homes  = [
  {
      "_id": "6009d928992ca1bc73625150",
      "address": "280 Shanahan Crest",
      "neighborhood": "Sunset",
      "city": "Wolffville",
      "state": "Alabama",
      "imageUrl": "https://hrsf132carouselimages.s3-us-west-1.amazonaws.com/46",
      "price": "$583,000",
      "bedrooms": 6,
      "bathrooms": 7,
      "sqft": "9712",
      "realtor": "John Emmerich Bashirian Group",
      "newTag": false,
      "liked": true,
      "trending": "down",
      "__v": 0
  },
  {
      "_id": "6009d928992ca1bc73625151",
      "address": "9893 Ethan Mountains",
      "neighborhood": "Sunset",
      "city": "Watsicaport",
      "state": "Connecticut",
      "imageUrl": "https://hrsf132carouselimages.s3-us-west-1.amazonaws.com/46",
      "price": "$224,000",
      "bedrooms": 1,
      "bathrooms": 9,
      "sqft": "6179",
      "realtor": "Raul Nolan DVM Cummings, O'Reilly and Harris",
      "newTag": true,
      "liked": true,
      "trending": "none",
      "__v": 0
  },
  {
      "_id": "6009d928992ca1bc73625152",
      "address": "098 Winona Street",
      "neighborhood": "Nob Hill",
      "city": "Lilliefurt",
      "state": "Kansas",
      "imageUrl": "https://hrsf132carouselimages.s3-us-west-1.amazonaws.com/25",
      "price": "$493,000",
      "bedrooms": 1,
      "bathrooms": 6,
      "sqft": "7588",
      "realtor": "Shawn West Jr. DuBuque, Lind and Ondricka",
      "newTag": false,
      "liked": false,
      "trending": "down",
      "__v": 0
  },
];

describe('<Carousel />', () => {
  it('should accept a homes prop', () => {
    const wrapper = mount(<Carousel homes={homes} />);
    expect(wrapper.props().homes).toEqual(homes);
  });
  it('should contain an item component', () => {
    const wrapper = mount(<Carousel homes={homes} />);
    expect(wrapper.containsMatchingElement(<Item />)).toEqual(true);
  });

});
