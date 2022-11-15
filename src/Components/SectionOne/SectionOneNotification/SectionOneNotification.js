import React from "react";
import styled from "styled-components";
import {AiOutlineCloseCircle} from 'react-icons/ai'
import {BsCalendar3} from 'react-icons/bs'


const NotificationContainer = styled.div`
  top: 71px;
  left: 70px;
  width: 615px;
  height: 251px;
  border: 2px solid #ffffff;
  border-radius: 15px;

  position: absolute;
  top: 70px;
  left: 70px;
  padding: 37px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const TopRowContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;

`
const TextContainer = styled.div`
display:flex;
flex-direction: column;
gap: 12px;
`
const NotificationText = styled.h3`
  color: #fff;
  font-weight: 600;
  font-family: sans-serif;
  font-size: 54px;
  margin: 0;
  height: auto;
`;

const SectionOneNotification = () => {
  return (
    <NotificationContainer>
    <TopRowContainer>
    <BsCalendar3 />
    <AiOutlineCloseCircle />
    </TopRowContainer>
      <TextContainer>
        <NotificationText>6AM</NotificationText>
        <NotificationText>TEAMS MEETING</NotificationText>
      </TextContainer>
    </NotificationContainer>
  );
};

export default SectionOneNotification;
