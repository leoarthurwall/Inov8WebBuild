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

  @media only screen and (max-width: 1280px) and (min-width: 429px) {
    width: 425px;
    height: 173px;
    padding: 19px;
  }
  @media only screen and (max-width: 550px) {
    top: 5%;
    left: 50%;
    transform: translate(-50%);

    width: 85vw;
    height: 35vw;
    padding: 4%;
  }
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
  @media only screen and (max-width: 1280px) {
    font-size: 14px;
  }
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
  @media only screen and (max-width: 1280px) {
    font-size: 32px;
    line-height: 36px;
  }
  @media only screen and (max-width: 480px) {
    font-size: 6.5vw;
    line-height: 7vw;
  }
`;
const IconIndividualContainer = styled.div`
  width: 2vw;
  @media only screen and (max-width: 1280px) {
    width: 24px;
  }
`;

const SectionOneNotification = () => {
  return (
    <NotificationContainer>
      <TopRowContainer>
        <TopRowLeft>
          <IconIndividualContainer>
            <BsCalendar3 size="auto" color="#fff" />
          </IconIndividualContainer>
          <ReminderText>REMINDER</ReminderText>
        </TopRowLeft>
        <IconIndividualContainer>
          <AiOutlineCloseCircle size="auto" color="#fff" />
        </IconIndividualContainer>
      </TopRowContainer>
      <TextContainer>
        <NotificationText>6AM</NotificationText>
        <NotificationText>TEAMS MEETING</NotificationText>
      </TextContainer>
    </NotificationContainer>
  );
};

export default SectionOneNotification;
