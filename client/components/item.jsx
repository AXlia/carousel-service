/* eslint-disable */
import React from 'react';
import styled from 'styled-components'

// const Image = ({home}) => {
//   <img src={home.imageUrl} />
// }
const StyledImg = styled.img`
  width: 224px;
  height: 160px;
`;

const Item = ({ home }) => (
  <div>
    <StyledImg src={home.imageUrl} />
    <span>{home.bedrooms}bd </span>
    <span>{home.bathrooms}ba </span>
    <span>{home.sqft} sqft</span>
    <p>{home.address}</p>
    <p>{home.neighborhood}, {home.city} {home.state}</p>
    <hr></hr>
    <p>{home.realtor}</p>
  </div>
);

export default Item;
//the icons for bedrooms bathrooms and sqft are svg
//they are held in multiple divs
//big div- media block
//inner div each span and svg


//hr is actually a border top of the realtor div