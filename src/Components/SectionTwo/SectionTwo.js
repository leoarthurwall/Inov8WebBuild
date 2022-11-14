import React from "react";
import styled from "styled-components";
import Button from "../Global/Button/Button";
import SectionTwoText from "./SectionTwoText/SectionTwoText";
//SECTION - PARKCLAW

const SectionTwoContainer = styled.section`
  width: 100%;
  height: 100vh;

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
  margin-top: 115px;
`;
const Image = styled.div`
  width: 860px;
  height: 379px;

  background-image: url(/assets/desktop/parkclaw-large.jpg);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
`;
const SectionTwo = () => {
  return (
    <SectionTwoContainer>
      <SectionTwoText />
      <Image />
      <ButtonContainer>
        <Button buttonText={"SHOP MEN"} bgColor="#fff" color="#000" />
        <Button buttonText={"SHOP WOMEN"} bgColor="#fff" color="#000" />
      </ButtonContainer>
    </SectionTwoContainer>
  );
};

export default SectionTwo;
