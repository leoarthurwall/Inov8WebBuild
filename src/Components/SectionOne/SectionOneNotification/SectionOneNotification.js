import React from "react";
import styled from "styled-components";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { BsCalendar3 } from "react-icons/bs";

const NotificationContainer = styled.div`
  width: 32vw;
  height: 13vw;
  border: 2px solid #ffffff;
  border-radius: 15px;

  position: absolute;
  top: 70px;
  left: 70px;
  padding: 1.5%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

`;

const TopRowContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const TopRowLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
`;
const ReminderText = styled.h4`
  color: #fff;
  margin: 0;
  font-size: 1.1vw;
`;
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const NotificationText = styled.h3`
  color: #fff;
  font-weight: 600;
  font-family: sans-serif;
  font-size: 2.5vw;
  margin: 0;
  height: auto;
  line-height: 3vw;
`;

const SectionOneNotification = () => {
  return (
    <NotificationContainer>
      <TopRowContainer>
        <TopRowLeft>
          <BsCalendar3 size={40} color="#fff" />
          <ReminderText>REMINDER</ReminderText>
        </TopRowLeft>
        <AiOutlineCloseCircle size={40} color="#fff" />
      </TopRowContainer>
      <TextContainer>
        <NotificationText>6AM</NotificationText>
        <NotificationText>TEAMS MEETING</NotificationText>
      </TextContainer>
    </NotificationContainer>
  );
};

export default SectionOneNotification;
