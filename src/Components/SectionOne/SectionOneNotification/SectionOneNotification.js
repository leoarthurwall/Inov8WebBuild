import React from "react";
import styled from "styled-components";

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
`;
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
      <TextContainer>
        <NotificationText>6AM</NotificationText>
        <NotificationText>TEAMS MEETING</NotificationText>
      </TextContainer>
    </NotificationContainer>
  );
};

export default SectionOneNotification;
