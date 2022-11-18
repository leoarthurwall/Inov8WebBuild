import React from "react";
import styled from "styled-components";
import Button from "../Global/Button/Button";
import SectionTwoText from "./SectionTwoText/SectionTwoText";
//SECTION - PARKCLAW

const SectionTwoContainer = styled.section`
  width: 100%;
  height: 100%;
  padding-top: 6%;
  padding-bottom: 10%;

  background-color: #ddad42;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media only screen and (max-width: 760px) {
    padding-top: 12%;
    padding-bottom: 20%;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  @media only screen and (max-width: 760px) {
    flex-direction: column;
  }
`;
const Image = styled.img`
  width: 44vw;
  height: auto;
  object-fit: cover;
  @media only screen and (max-width: 1280px) {
    width: 500px;
  }
  @media only screen and (max-width: 760px) {
    width: 75vw;
  }
  @media only screen and (max-width: 480px) {
    width: 90vw;
  }
`;
const SectionTwo = () => {
  return (
    <SectionTwoContainer>
      <SectionTwoText />
      <Image
        src="/assets/desktop/parkclaw-large.jpg"
        alt="the parkclaw running shoe in yellow"
      />
      <ButtonContainer>
        <Button buttonText={"SHOP MEN"} bgColor="#fff" color="#000" />
        <Button buttonText={"SHOP WOMEN"} bgColor="#fff" color="#000" />
      </ButtonContainer>
    </SectionTwoContainer>
  );
};

export default SectionTwo;
