import React from "react";
import styled from "styled-components";
import Button from "../Global/Button/Button";

const SectionFiveContainer = styled.section`
  height: 90vh;
  width: 100%;
  padding-top: 5%;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;
const ImageWrapper = styled.div`
  
  margin-left: auto;
  margin-right: auto;
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-gap: 45px;
  @media (max-width: 1700px) {
    grid-template-columns: auto auto;

  }
`;
const Image = styled.img`
  width: 401px;
  height: 193px;
  object-fit: cover;
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
      <ImageWrapper>
        <Image src="/assets/desktop/parkclaw-black.jpg" />
        <Image src="/assets/desktop/parkclaw-blue.jpg" />
        <Image src="/assets/desktop/parkclaw-navy.jpg" />
        <Image src="/assets/desktop/parkclaw-red.jpg" />
      </ImageWrapper>
      <ButtonContainer>
        <Button buttonText={"SHOP MEN"} bgColor="#00FF00" color="#161615" />
        <Button buttonText={"SHOP WOMEN"} bgColor="#00FF00" color="#161615" />
      </ButtonContainer>
    </SectionFiveContainer>
  );
};

export default SectionFive;
