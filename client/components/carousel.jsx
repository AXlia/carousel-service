/* eslint-disable */
import React from 'react';
import Item from './item.jsx';
import styled from 'styled-components';
import EndCard from './endCard.jsx';
import {ArrowIosForwardOutline} from '@styled-icons/evaicons-outline/ArrowIosForwardOutline';
import {ArrowIosBackOutline} from '@styled-icons/evaicons-outline/ArrowIosBackOutline';

const Wrapper = styled.div`
  position: relative;
  width: 976px;
  height: 300px;
  overflow: hidden;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: flex-start;
  box-sizing: border-box;
`

const Arrow = styled.div`
  display: inline-flex;
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
  position: absolute;
  z-index: 1;
  transition: 0.3s;
  &:hover {
    box-shadow: 2px 3px  8px lightgrey;
  }
  &:active {
    background-color: rgb(134, 144, 153);
    color: rgb(255, 255, 255);
  }

`

const Forward = styled(Arrow)`
  top: 130px;
  left: 0;
  margin-left: 5px;
`;
const Back = styled(Arrow)`
  top: 130px;
  right: 0;
  margin-right: 5px;
`;



const Carousel = (props) => (
  <Wrapper>
    <Forward><ArrowIosBackOutline size="28"/></Forward>
    {props.homes.map((home) => <Item home={home} key={home._id}/>)}
    <div>
      <EndCard />
    </div>
    <Back><ArrowIosForwardOutline size="28"/></Back>
  </Wrapper>
);

export default Carousel;
// transition: box-shadow 0.1s ease 0s, color 0.1s ease 0s, border-color 0.2s ease 0s, background-color 0.2s ease 0s;