/* eslint-disable */
import React from 'react';
import Item from './item.jsx';

const Carousel = (props) => (
  <div>
    <button>Left Arrow</button>
    {props.homes.map((home) => <Item home={home} key={home._id}/>)}
    <div>
      <p>This is the end of carousel see more div that will always be at the end</p>
    </div>
    <button>Right Arrow</button>
  </div>
);

export default Carousel;
