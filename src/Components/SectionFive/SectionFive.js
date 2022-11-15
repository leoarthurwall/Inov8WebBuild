import React from "react";
import styled from "styled-components";
import Button from "../Global/Button/Button";

const SectionFiveContainer = styled.section`
  height: 100vh;
  width: 100%;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;
const ImageWrapper = styled.div`
  width: 90%;
  height: 200px;
  margin-left: auto;
  margin-right: auto;

  z-index: 100;
  background-color: grey;

  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-gap: 20px;
`;
const Image = styled.div`
  height: auto;
  width: auto;
  background-color: blue;

  ${"" /* background-image: url(${(props) => props.bgImage}); */}
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
        <Image />
        <Image />
        <Image />
        <Image />
      </ImageWrapper>
      <ButtonContainer>
        <Button buttonText={"SHOP MEN"} bgColor="#00FF00" color="#161615" />
        <Button buttonText={"SHOP WOMEN"} bgColor="#00FF00" color="#161615" />
      </ButtonContainer>
    </SectionFiveContainer>
  );
};

export default SectionFive;
