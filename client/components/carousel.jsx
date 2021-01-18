/* eslint-disable */
import React from 'react';
import Item from './item.jsx';
import styled from 'styled-components';
import {ArrowIosForwardOutline} from '@styled-icons/evaicons-outline/ArrowIosForwardOutline';
import {ArrowIosBackOutline} from '@styled-icons/evaicons-outline/ArrowIosBackOutline';

const Arrow = styled.div`
  display: flex;
  padding: 1px;
  border: 1px solid rgb(232, 233, 234);
  background-color: rgb(255, 255, 255);
  width: 32px;
  height: 32px;
  border-radius: 24px;
  text-align: center;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  transition: box-shadow 0.1s ease 0s, color 0.1s ease 0s, border-color 0.2s ease 0s, background-color 0.2s ease 0s;
`

const Carousel = (props) => (
  <div>
    <Arrow><ArrowIosForwardOutline size="28"/></Arrow>
    {props.homes.map((home) => <Item home={home} key={home._id}/>)}
    <div>
      <p>This is the end of carousel see more div that will always be at the end</p>
    </div>
    <Arrow><ArrowIosBackOutline size="28"/></Arrow>
  </div>
);

export default Carousel;
