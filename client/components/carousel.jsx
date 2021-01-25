/* eslint-disable */
import React from 'react';
import styled from 'styled-components';
import { ArrowIosForwardOutline } from '@styled-icons/evaicons-outline/ArrowIosForwardOutline';
import { ArrowIosBackOutline } from '@styled-icons/evaicons-outline/ArrowIosBackOutline';
import EndCard from './endCard.jsx';
import Item from './item.jsx';

const Overlay = styled.div`
  position: relative;
  width: 70%;
  height: 18.75rem;
  display: flex;
  box-sizing: border-box;
  min-width: 32rem;
`;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  box-sizing: border-box;
  overflow-x: auto;
  &::-webkit-scrollbar {
    display: none;
  };
`;

const ContentWrapper = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  box-sizing: border-box;
  transform: translatex(${(props) => props.index}px);
  transition: transform 0.2s ease-out;

`;

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

`;

const Back = styled(Arrow)`
  left: 0;
  margin: 8px;
`;
const Forward = styled(Arrow)`
  right: 0;
  margin: 8px;
`;

const Carousel = ({index, scroll, homes, modal, move, scrolling, like, loc, id}) => {
  let showLArrow = true;
  let showRArrow = true;
  if (index === 0) {
    showLArrow = false;
  }
  if (homes.length % 2 === 0) {
    if (index < (Math.floor(homes.length / 2) + 1) * -250) {
      showRArrow = false;
    }
  }
  if (homes.length % 2 === 1) {
    if (index < ((homes.length - 4) * -250)) {
      showRArrow = false;
    }
  }
  if (scroll) {
    showLArrow = false;
    showRArrow = false;
  }
  return (
    <Overlay>
      {showLArrow ? <Back onClick={() => { move(250, id); }}><ArrowIosBackOutline size="28" /></Back> : '' }
      <Wrapper onScroll={() => scrolling()}>

        <ContentWrapper index={index}>
          {homes.map((home) => <Item home={home} key={home._id} like={like} />)}
          <EndCard loc={loc} modal={modal} />
        </ContentWrapper>

      </Wrapper>
      {showRArrow ? <Forward onClick={() => { move(-250, id); }}><ArrowIosForwardOutline size="28" /></Forward> : ''}
    </Overlay>
  );
};

export default Carousel;
