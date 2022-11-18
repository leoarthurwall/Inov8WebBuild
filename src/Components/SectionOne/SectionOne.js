import React from "react";
import styled from "styled-components";
import SectionOneNotification from "./SectionOneNotification/SectionOneNotification";
//SECTION - HEADER

const SectionOneContainer = styled.section`
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  background-image: url(/assets/desktop/header.jpg);
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 761px) {
    background-position: 25%; 
    height: 100vh;
  }
  @media only screen and (max-width: 480px) {
    background-position: 25%; 
    height: 75vh;
  }
 
`;

const SectionOne = () => {
  return (
    <SectionOneContainer alt="three runners in a park looking at central London">
      <SectionOneNotification />
    </SectionOneContainer>
  );
};

export default SectionOne;
