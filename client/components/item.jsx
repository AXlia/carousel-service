/* eslint-disable */
import React from 'react';

const Item = ({ home }) => (
  <div>
    <img src={home.imageUrl} />
    <span>{home.bedrooms}bd </span>
    <span>{home.bathrooms}ba </span>
    <span>{home.sqft} sqft</span>
    <h2>{home.address}</h2>
    <p>{home.neighborhood}, {home.city} {home.state}</p>
    <hr></hr>
    <p>{home.realtor}</p>
  </div>
);

export default Item;
