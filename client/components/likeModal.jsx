/* eslint-disable */
import React from 'react';
import styled from 'styled-components';

const Background = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0 , 0.5);
  transform: scale(1.1);
  z-index: 60;
`;

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 1rem 1.5rem;
  width: 24rem;
  z-index: 120;
  border: 5px solid rgb(232, 233, 234);
  border-radius: 8px;
  background-color: white;
`;

const StyledBtn = styled.button`
  display: inline-flex;
  top: 0px;
  right: 0px;
  margin: 24px;
  border: 0;
  font-size: 20px;
  font-weight: bold;
  line-height: 1.5;
  padding: 8px 16px;
  color: rgb(0, 120, 130);
  background-color: rgb(255, 255, 255);
  border: 5px single rgb(0, 120, 130);
  border-radius: 8px;
  &:hover {
    background-color: rgb(0, 120, 130);
    color: rgb(255, 255, 255);
  }
  position: absolute;
  z-index: 500;
`;
const BoldText = styled.p`
  color: rgb(0, 173, 187);
  font-weight: bold;
  font-size: 18px;
`;

const List = styled.div`
 border-radius: 8px;
 margin: 8px;
 border: 2px solid rgb(224, 247, 248);
 display: flex;
 &:hover {
  box-shadow: 2px 2px 10px rgb(0, 120, 130);

}
`;
const ListImg = styled.div`
 border-radius 8px;
 background-color: rgb(224, 247, 248);
 width: 50px;
 height: 50px;
 margin: 8px;
 display: inline-block;
`;
const Text = styled.p`
  margin: 8px 0px;
  padding: 20px;
`;

const LikedModal = ({ toggle }) => (
  <Background>
    <Wrapper>

      <StyledBtn onClick={() => { toggle(); }}>Close</StyledBtn>
      <h2>Add Like</h2>
      <List>
        <ListImg />
        <Text>Create A New List</Text>
      </List>
      <List>
        <ListImg />
        <Text>Dream House</Text>
      </List>
      <List>
        <ListImg />
        <Text>Investment Properties</Text>
      </List>
    </Wrapper>
  </Background>
);

export default LikedModal;
