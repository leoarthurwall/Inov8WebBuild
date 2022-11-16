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
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;
const Image = styled.img`
  width: 44vw;
  height: auto;
  object-fit: cover;
`;
const SectionTwo = () => {
  return (
    <SectionTwoContainer>
      <SectionTwoText />
      <Image
        src="/assets/desktop/parkclaw-large.jpg"
        alt="parkclaw-large.jpg"
      />
      <ButtonContainer>
        <Button buttonText={"SHOP MEN"} bgColor="#fff" color="#000" />
        <Button buttonText={"SHOP WOMEN"} bgColor="#fff" color="#000" />
      </ButtonContainer>
    </SectionTwoContainer>
  );
};

export default SectionTwo;
