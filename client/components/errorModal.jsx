/* eslint-disable */
import React from 'react';
import styled from 'styled-components';
import { BuildingHouse } from '@styled-icons/boxicons-regular/BuildingHouse';

const Orange = styled(BuildingHouse)`
  color: rgb(250, 140, 104);
`;
const Teal = styled(BuildingHouse)`
  color: rgb(0, 173, 187);
`;
const Lime = styled(BuildingHouse)`
  color: rgb(195, 214, 0);
`;
const Red = styled(BuildingHouse)`
  color: rgb(255, 94, 63);
`;

const Purple = styled(BuildingHouse)`
  color: rgb(206, 182, 255);
`;

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

const StyledImage = styled.img`
  height: 200px;
  width: 200px;
  object-fit: cover;
  border-radius: 50%;
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

const ErrorModal = ({ toggle }) => (
  <Background>
    <Wrapper>

      <StyledImage src="https://hrsf132carouselimages.s3-us-west-1.amazonaws.com/AXlia.png" />
      <StyledBtn onClick={() => { toggle(); }}>Close</StyledBtn>

      <h2>
        Uh-oh
        <Orange size="30px" />
        {' '}
        <Teal size="30px" />
        {' '}
        <Lime size="30px" />
        {' '}
        <Red size="30px" />
        {' '}
        <Purple size="30px" />
      </h2>
      <p>Unfortunately, we couldn't find any homes right now. Axolotls are losing their homes because of pollution and urban development.</p>
      <p>Axolotls are native to Lake Xochimilco and Lake Chalco in the Valley of Mexico. Lake Chalco no longer exists, having been drained as a flood control measure, and Lake Xochimilco remains a remnant of its former self, existing mainly as canals. Our neighbor, Mexico City, is growing alot so it's a bit of a squeeze right now. Also Axolotls really love their pure water and a nice sensible 68 degrees all year round.</p>
      <BoldText>Check again soon for new homes!</BoldText>
    </Wrapper>
  </Background>
);

export default ErrorModal;
