import React from 'react';
import styled from 'styled-components';

/* eslint-disable */

const List = styled.div`
  border-radius: 8px;
  margin: 8px 0px;
  border: 2px solid ${(props) => props.color};
  background-color: ${(props) => props.color};
  color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  transition: 0.5s ease-out;
  &:hover {
    box-shadow: 2px 2px 10px lightgrey;
    transform: scale(1.1);
  }
  cursor: pointer;
`;
const ListImg = styled.img`
  border-radius 8px;
  width: 50px;
  height: 50px;
  margin: 8px;
`;

const Text = styled.p`
  margin: 8px 0px;
  padding: 20px;
  font-weight: bold;
`;

const LikeItems = ({ list, toggle }) => (
  <List color={list.color} onClick={() => { toggle(); }}>
    <ListImg src="https://hrsf132carouselimages.s3-us-west-1.amazonaws.com/HappyAx.jpg" />
    <Text>{list.title}</Text>
  </List>
);

export default LikeItems;
