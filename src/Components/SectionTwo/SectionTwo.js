import React from "react";
import styled from "styled-components";
import Button from "../Global/Button/Button";
import SectionTwoText from "./SectionTwoText/SectionTwoText";
//SECTION - PARKCLAW

const SectionTwoContainer = styled.section`
  width: 100%;
  height: 100vh;
  background-position: 50%;
  background-size: cover;
  position: relative;
  background-image: url(/assets/desktop/parkclaw-large.jpg);
  background-color: #DDAD42;

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
const SectionTwo = () => {
  return (
    <SectionTwoContainer>
    <SectionTwoText />
      <ButtonContainer>
        <Button buttonText={"SHOP MEN"} bgColor="#fff" color="#000"/>
        <Button buttonText={"SHOP WOMEN"} bgColor="#fff" color="#000"/>
      </ButtonContainer>
    </SectionTwoContainer>
  );
};

export default SectionTwo;
