/* eslint-disable */
import React from 'react';
import styled from 'styled-components';
import {Bed} from '@styled-icons/fa-solid/Bed';
import {ToiletPaper} from '@styled-icons/fa-solid/ToiletPaper';
import {Sink} from '@styled-icons/fa-solid/Sink';
import {SquareFoot} from '@styled-icons/material-twotone/SquareFoot';


const StyledItem = styled.div`
  display: inline-block;
  width: 224px;
  height: 294px;
  box-sizing: border-box;
  margin: 0px 7px;
  cursor: pointer;
`

const StyledImg = styled.img`
  width: 224px;
  height: 160px;
  border-radius: 8px;
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
    <StyledImg src={home.imageUrl} />
    <BoldText>{home.price}</BoldText>
    <PrimaryText> <Bed size="16"/> {home.bedrooms}bd <ToiletPaper size="16"/> {home.bathrooms}ba {home.sqft} <SquareFoot size="20"/> sqft</PrimaryText>
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