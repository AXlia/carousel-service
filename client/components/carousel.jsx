/* eslint-disable */
import React from 'react';
import Item from './item.jsx';
import styled from 'styled-components';
import EndCard from './endCard.jsx';
import {ArrowIosForwardOutline} from '@styled-icons/evaicons-outline/ArrowIosForwardOutline';
import {ArrowIosBackOutline} from '@styled-icons/evaicons-outline/ArrowIosBackOutline';

const Overlay = styled.div`
  position: relative;
  width: 976px;
  height: 300px;
  display: flex;
  box-sizing: border-box;
`

const Wrapper = styled.div`
  position: relative;
  width: 976px;
  height: 300px;
  display: flex;
  box-sizing: border-box;
  overflow-x: auto;
  &::-webkit-scrollbar {
    display: none;
  };
`

const ContentWrapper = styled.div`
  position: relative;
  width: 15000px;
  height: 300px;
  display: flex;
  box-sizing: border-box;
  transform: translatex(${props => props.index * -360}px)
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
  top: 135px;
  z-index: 5;
  transition: 0.3s;
  &:hover {
    box-shadow: 2px 3px  8px lightgrey;
  }
  &:active {
    background-color: rgb(134, 144, 153);
    color: rgb(255, 255, 255);
  }

`

const Back = styled(Arrow)`
  left: 0;
  margin: 8px;
`;
const Forward = styled(Arrow)`
  right: 0;
  margin: 8px;
`;



const Carousel = (props) => (
  <Overlay>
     {props.index !== 0? <Back onClick={() => {props.move(-1)}}><ArrowIosBackOutline size="28"/></Back> : '' }
    <Wrapper>

      <ContentWrapper index={props.index}>
        {props.homes.map((home) => <Item home={home} key={home._id} like={props.like} />)}
        <EndCard />
      </ContentWrapper>


    </Wrapper>
    {props.index === props.homes.length / 2? '' : <Forward onClick={() => {props.move(1)}}><ArrowIosForwardOutline size="28"/></Forward>}
  </Overlay>
);

export default Carousel;