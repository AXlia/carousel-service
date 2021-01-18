/* eslint-disable */
import React from 'react';
import Item from './item.jsx';
import styled from 'styled-components';
import EndCard from './endCard.jsx';
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
  &:hover {
    box-shadow: 2px 3px  8px lightgrey;
  }
  &:active {
    background-color: rgb(134, 144, 153);
    color: rgb(255, 255, 255);
  }
`

const Carousel = (props) => (
  <div>
    <Arrow><ArrowIosBackOutline size="28"/></Arrow>
    {props.homes.map((home) => <Item home={home} key={home._id}/>)}
    <div>
      <EndCard />
    </div>
    <Arrow><ArrowIosForwardOutline size="28"/></Arrow>
  </div>
);

export default Carousel;
// transition: box-shadow 0.1s ease 0s, color 0.1s ease 0s, border-color 0.2s ease 0s, background-color 0.2s ease 0s;