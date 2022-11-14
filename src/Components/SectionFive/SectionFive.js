import React from "react";
import styled from "styled-components";
import Button from "../Global/Button/Button";

const SectionFiveContainer = styled.section`
  height: 100vh;
  width: 100%;
  background: #fff;
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;
const SectionFive = () => {
  return (
    <SectionFiveContainer>
      <ButtonContainer>
        <Button buttonText={"SHOP MEN"} bgColor="#00FF00" color="#161615" />
        <Button buttonText={"SHOP WOMEN"} bgColor="#00FF00" color="#161615" />
      </ButtonContainer>
    </SectionFiveContainer>
  );
};

export default SectionFive;
