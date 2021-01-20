/* eslint-disable */
import React from 'react';
import styled from 'styled-components';
import {Bed} from '@styled-icons/fa-solid/Bed';
import {ToiletPaper} from '@styled-icons/fa-solid/ToiletPaper';
import {Sink} from '@styled-icons/fa-solid/Sink';
import {SquareFoot} from '@styled-icons/material/SquareFoot';
import {SuitHeart} from '@styled-icons/bootstrap/SuitHeart';
import {SuitHeartFill} from '@styled-icons/bootstrap/SuitHeartFill';
import {ArrowDown} from '@styled-icons/fa-solid/ArrowDown';
import {ArrowUp} from '@styled-icons/fa-solid/ArrowUp';

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
`

const Liked = styled(SuitHeartFill)`
  color: rgb(255, 94, 63);
  position: absolute;
  z-index: 1;
  display: inline-flex;
  top: 0;
  right: 0;
  padding: 5px;
`
const BorderHeart = styled(SuitHeart)`
  color: #F8F8FF;
  position: absolute;
  z-index: 2;
  display: inline-flex;
  top: 0;
  right: 0;
  padding: 5px;
`
const BlackHeart = styled(SuitHeartFill)`
  color: black;
  z-index: 1;
  display: inline-flex;
  top: 0;
  right: 0;
  padding: 5px;
`

const Beds = styled(Bed)`
  color: rgb(134, 144, 153);
`

const Bath = styled(ToiletPaper)`
  color: rgb(134, 144, 153);
`

const Sqft = styled(SquareFoot)`
  color: rgb(134, 144, 153);
`

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
`
const ImgDiv = styled.div`
  width: 224px;
  height: 160px;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  position: relative;
`

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
`

const BoldText = styled.div`
  font-weight: bold;
  font-size: 20px;
  white-space: nowrap;
  overflow: hidden;
  test-overflow: ellipsis;
  display: inline-block;
`


const Item = ({ home, like }) => (
  <StyledItem>
    <ImgDiv>
      {home.newTag?  <NewTag>NEW</NewTag> : ''}
      <StyledImg src={home.imageUrl} />
      {home.liked? <Liked size="25" onClick={() => {
        like(home._id)
      }}/> : <BorderHeart size="25" onClick={() => {
        like(home._id)}}/>}
    </ImgDiv>
    <BoldText>{home.price} {home.trending === 'down'? <TrendDown size="15"/> : home.trending === 'up'? <TrendUp size="15"/> : ''}</BoldText>

    <PrimaryText> <Beds size="16"/> {home.bedrooms}bd <Bath size="16"/> {home.bathrooms}ba  <Sqft size="16"/>{home.sqft} sqft</PrimaryText>
    <PrimaryText>{home.address}</PrimaryText>
    <PrimaryText>{home.neighborhood}, {home.city} {home.state}</PrimaryText>
    <SecondaryText>{home.realtor}</SecondaryText>
  </StyledItem>
);

export default Item;
