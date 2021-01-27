/* eslint-disable */
import React from 'react';
import styled from 'styled-components';
import LikeItems from './likeItems.jsx';

const Background = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0 , 0.5);
  transform: scale(1.1);
  z-index: 20;
`;

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 1rem 1.5rem;
  width: 24rem;
  z-index: 21;
  border: 5px solid rgb(232, 233, 234);
  border-radius: 8px;
  background-color: white;
`;

const StyledBtn = styled.button`
  display: inline-flex;
  top: 0px;
  right: 0px;
  margin: 24px;
  border: 1px solid rgb(232, 233, 234);
  font-size: 20px;
  font-weight: bold;
  line-height: 1.5;
  padding: 8px 16px;
  color: rgb(0, 120, 130);
  background-color: rgb(255, 255, 255);
  border-radius: 8px;
  transition: 0.5s ease;
  &:hover {
    background-color: rgb(0, 120, 130);
    color: rgb(255, 255, 255);
  }
  position: absolute;
  z-index: 23;
`;




const LikedModal = ({ toggle, lists }) => (
  <Background>
    <Background onClick={() => { toggle(); }}></Background>
    <Wrapper>
      <StyledBtn onClick={() => { toggle(); }}>Close</StyledBtn>
      <h2>Add Like</h2>
      <LikeItems list={{title:"Create A New List", color: "rgb(206, 182, 255)" }} toggle={toggle}/>
      {lists.map( (list) => {
        return <LikeItems list={list} toggle={toggle}/>
      })}
    </Wrapper>
  </Background>
);

export default LikedModal;
