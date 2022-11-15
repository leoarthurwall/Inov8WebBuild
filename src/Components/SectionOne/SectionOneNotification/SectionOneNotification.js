import React from "react";
import styled from "styled-components";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { BsCalendar3 } from "react-icons/bs";

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
  font-size: 20px;
`;
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
const NotificationText = styled.h3`
  color: #fff;
  font-weight: 600;
  font-family: sans-serif;
  font-size: 64px;
  margin: 0;
  height: auto;
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
