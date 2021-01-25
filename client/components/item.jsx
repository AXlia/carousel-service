/* eslint-disable */
import React from 'react';
import styled from 'styled-components';

import { Bed } from '@styled-icons/fa-solid/Bed';
import { Sink } from '@styled-icons/fa-solid/Sink';
import { SquareFoot } from '@styled-icons/material/SquareFoot';

import { Heart } from '@styled-icons/evaicons-solid/Heart';
import { HeartOutline } from '@styled-icons/evaicons-outline/HeartOutline';

import { ArrowDown } from '@styled-icons/fa-solid/ArrowDown';
import { ArrowUp } from '@styled-icons/fa-solid/ArrowUp';

const TrendUp = styled(ArrowUp)`
  color: rgb(0, 178, 91);
`;
const TrendDown = styled(ArrowDown)`
  color: rgb(217, 60, 35);
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

const Liked = styled(Heart)`
  color: rgb(255, 94, 63);
  position: absolute;
  z-index: 1;
  display: inline-flex;
  top: 0;
  right: 0;
  padding: 5px;
`;

const BorderHeart = styled(HeartOutline)`
  color: #F8F8FF;
  position: absolute;
  z-index: 3;
  display: inline-flex;
  top: 0;
  right: 0;
  padding: 5px;
`;

const BlackHeart = styled(Heart)`
  color: black;
  position: absolute;
  z-index: 2;
  display: inline-flex;
  top: 0;
  right: 0;
  padding: 5px;
  opacity: 0.4;
`;

const EmptyHeart = styled.span`
  position: absolute;
  z-index: 1;
  display: inline-flex;
  top: 0;
  right: 0;
  padding: 5px;
`;

const Beds = styled(Bed)`
  color: rgb(134, 144, 153);
`;

const Bath = styled(Sink)`
  color: rgb(134, 144, 153);
`;

const Sqft = styled(SquareFoot)`
  color: rgb(134, 144, 153);
`;

const StyledItem = styled.div`
  display: inline-block;
  width: 224px;
  box-sizing: border-box;
  margin: 0px 7px;
  cursor: pointer;
  border-style: solid;
  border-color: transparent;
  border-width: 16px 8px 0px;
  flex-shrink: 0;
  -webkit-overflow-scrolling: touch;
  height: 100%;
`;
const ImgDiv = styled.div`
  width: 224px;
  height: 160px;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  position: relative;
`;

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  background-position: center;
  background-size: cover;
  transition: 0.5s ease;
  &:hover {
    box-shadow: 2px 3px  8px lightgrey;
    transform: scale(1.2);
  }
`;

const PrimaryText = styled.div`
  font-size: 16px;
  line-height: 1.5;
  width: 224px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space:nowrap;
`;

const SecondaryText = styled.div`
  text-transform: uppercase;
  line-height: 13px;
  padding-bottom: 4px;
  color: rgb(134, 144, 153);
  font-size: 10px;
  border-top: 1px solid rgb(205, 209, 212);
  padding-top: 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space:nowrap;
`;

const BoldText = styled.div`
  font-weight: bold;
  font-size: 20px;
  white-space: nowrap;
  overflow: hidden;
  test-overflow: ellipsis;
  display: inline-block;
`;

const Item = ({ home, like }) => (
  <StyledItem>
    <ImgDiv>
      {home.newTag ? <NewTag>NEW</NewTag> : ''}
      <StyledImg src={home.imageUrl} />
      {home.liked ? (
        <Liked
          size="30"
          onClick={() => {
            like(home._id, true);
          }}
        />
      ) : (
        <EmptyHeart onClick={() => {
          like(home._id, false);
        }}
        >
          <BorderHeart size="30" />
          <BlackHeart size="30" />
        </EmptyHeart>
      )}
    </ImgDiv>
    <BoldText>
      {home.price}
      {' '}
      {home.trending === 'down' ? <TrendDown size="15" /> : home.trending === 'up' ? <TrendUp size="15" /> : ''}
    </BoldText>

    <PrimaryText>
      {' '}
      <Beds size="16" />
      {' '}
      {home.bedrooms}
      bd
      {' '}
      <Bath size="13" />
      {' '}
      {home.bathrooms}
      ba
      {' '}
      <Sqft size="16" />
      {home.sqft}
      {' '}
      sqft
    </PrimaryText>
    <PrimaryText>{home.address}</PrimaryText>
    <PrimaryText>
      {home.neighborhood}
      ,
      {' '}
      {home.city}
      {' '}
      {home.state}
    </PrimaryText>
    <SecondaryText>{home.realtor}</SecondaryText>
  </StyledItem>
);

export default Item;
