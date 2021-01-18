/* eslint-disable */
import React from 'react';
import styled from 'styled-components';
import {Bed} from '@styled-icons/fa-solid/Bed';
import {ToiletPaper} from '@styled-icons/fa-solid/ToiletPaper';
import {Sink} from '@styled-icons/fa-solid/Sink';
import {SquareFoot} from '@styled-icons/material/SquareFoot';
import {SuitHeart} from '@styled-icons/bootstrap/SuitHeart';
import {SuitHeartFill} from '@styled-icons/bootstrap/SuitHeartFill';

const Liked = styled(SuitHeartFill)`
  color: rgb(255, 94, 63);
  position: absolute;
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
  height: 294px;
  box-sizing: border-box;
  margin: 0px 7px;
  cursor: pointer;
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
`


const Item = ({ home }) => (
  <StyledItem>
    <ImgDiv>
      <StyledImg src={home.imageUrl} />
      <Liked size="30"/>
    </ImgDiv>
    <BoldText>{home.price}</BoldText>
    <PrimaryText> <Beds size="16"/> {home.bedrooms}bd <Bath size="16"/> {home.bathrooms}ba  <Sqft size="16"/>{home.sqft} sqft</PrimaryText>
    <PrimaryText>{home.address}</PrimaryText>
    <PrimaryText>{home.neighborhood}, {home.city} {home.state}</PrimaryText>
    <SecondaryText>{home.realtor}</SecondaryText>
  </StyledItem>
);

export default Item;
//the icons for bedrooms bathrooms and sqft are svg
//they are held in multiple divs
//big div- media block
//inner div each span and svg


//hr is actually a border top of the realtor div