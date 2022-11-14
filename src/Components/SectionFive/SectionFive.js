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
        <Button buttonText={"SHOP MEN"} />
        <Button buttonText={"SHOP WOMEN"} />
      </ButtonContainer>
    </SectionFiveContainer>
  );
};

export default SectionFive;
