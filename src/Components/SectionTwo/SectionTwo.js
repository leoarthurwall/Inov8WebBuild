import React from "react";
import styled from "styled-components";
import Button from "./Button/Button";
//SECTION - PARKCLAW

const SectionTwoContainer = styled.section`
  width: 100%;
  height: 100vh;
  background-position: 50%;
  background-size: cover;
  position: relative;
  background-image: url(/assets/desktop/parkclaw-large.jpg);
  display: flex;
  justify-content: center;
  align-items: center;
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
      <ButtonContainer>
        <Button buttonName={"SHOP MEN"} />
        <Button buttonName={"SHOP WOMEN"} />
      </ButtonContainer>
    </SectionTwoContainer>
  );
};

export default SectionTwo;
