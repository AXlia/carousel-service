/* eslint-disable */
import React from 'react';
import Item from './item.jsx';

const Carousel = (props) => (
  <div>
    {props.homes.map((home) => <Item home={home} />)}
  </div>
);

export default Carousel;