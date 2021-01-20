/* eslint-disable */
import React from 'react';
import styled from 'styled-components';
import {Sign} from '@styled-icons/fa-solid/Sign';

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
`;

const TextDiv = styled.div`
  width: 224px;
  height: 160px;
  border-radius: 8px;
  background-color: rgb(232, 233, 234);
  border: 1px solid rgb(232, 233, 234);
  padding: 8px;
`;

const PostSign = styled(Sign)`
  width: 30px;
  height: 30px;
  color: rgb(134, 144, 153);
  display: inline-block;
  line-height: 0;
`

const PrimaryText = styled.div`
  font-size: 16px;
  line-height: 1.5;
  width: 224px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space:nowrap;
  padding-top: 8px;
  font-size: 18px;
  line-height: 1.5;
`;

const BoldText = styled.div`
  font-weight: bold;
  font-size: 20px;
  white-space: nowrap;
  overflow: hidden;
  test-overflow: ellipsis;
`

const SeeMore = styled.button`
  margin-top: 8px;
  border-radius: 8px;
  border-width: 1px;
  border-style: solid;
  border-color: transparent;
  cursor: pointer;
  display: inline-block;
  text-align: center;
  font-weight: bold;
  white-space: nowrap;
  font-size: 20px;
  line-height: 1.5;
  padding: 8px 16px;
  background-color: rgb(255, 255, 255);
  color: rgb(0, 120, 130);
  &:hover {
    background-color: rgb(0, 120, 130);
    color: rgb(255, 255, 255);
  }

`

const EndCard = () => {
  return (
    <StyledItem>
      <TextDiv>
        <PostSign />
        <PrimaryText>See more homes for sale in</PrimaryText>
        <BoldText>San Francisco</BoldText>
        <SeeMore>Take a look</SeeMore>
      </TextDiv>
    </StyledItem>
  )
}

export default EndCard;
