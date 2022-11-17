import React from "react";
import styled from "styled-components";
import Button from "../Global/Button/Button";
import { useMediaQuery } from "react-responsive";

const SectionFiveContainer = styled.section`
  height: auto;
  width: 100%;
  padding-top: 15%;
  padding-bottom: 10%;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  @media (max-width: 1700px) {
    padding-top: 10%;
  }
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
  @media (max-width: 700px) {
    grid-template-columns: auto;
  }
`;
const Image = styled.img`
  width: 401px;
  height: auto;
  object-fit: contain;
  @media only screen and (max-width: 900px) {
    width: 40vw;
  }
  @media (max-width: 700px) {
    width: 80vw;
  }
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding-top: 10%;
  @media (max-width: 1700px) {
    padding-top: 5%;
  }
`;

const SectionFive = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 700px)" });

  return (
    <SectionFiveContainer>
      <ImageWrapper>
        <Image
          src="/assets/desktop/parkclaw-black.jpg"
          alt="parkclaw-black.jpg"
        />
        <Image
          src="/assets/desktop/parkclaw-blue.jpg"
          alt="parkclaw-blue.jpg"
        />
        {isTabletOrMobile ? (
          <Button buttonText={"SHOP MEN"} bgColor="#00FF00" color="#161615" />
        ) : null}
        <Image
          src="/assets/desktop/parkclaw-navy.jpg"
          alt="parkclaw-navy.jpg"
        />
        <Image src="/assets/desktop/parkclaw-red.jpg" alt="parkclaw-red.jpg" />
      </ImageWrapper>
      {!isTabletOrMobile ? (
        <ButtonContainer>
          <Button buttonText={"SHOP MEN"} bgColor="#00FF00" color="#161615" />
          <Button buttonText={"SHOP WOMEN"} bgColor="#00FF00" color="#161615" />
        </ButtonContainer>
      ) : (
        <Button buttonText={"SHOP WOMEN"} bgColor="#00FF00" color="#161615" />
      )}
    </SectionFiveContainer>
  );
};

export default SectionFive;
