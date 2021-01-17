/* eslint-disable */
import React from 'react';
import Item from './item.jsx';
import styled from 'styled-components';

const Arrow = styled.div`
  border: 0px;
  width: 50px;
  height: 50px;
  border-radius: 100px;
  background-color: grey;
  text-align: center;
`

const Carousel = (props) => (
  <div>
    <Arrow>{'<'}</Arrow>
    {props.homes.map((home) => <Item home={home} key={home._id}/>)}
    <div>

      <p>This is the end of carousel see more div that will always be at the end</p>
    </div>
    <button>Right Arrow</button>
  </div>
);

export default Carousel;
