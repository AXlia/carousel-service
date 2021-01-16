/* eslint-disable */
import React from 'react';

const Items = ({ home }) => (
  <div>
    <img src={home.imageUrl} />
    <h2>{home.address}</h2>
    <p>{home.neighborhood} {home.city}</p>
  </div>
);

export default Items;
