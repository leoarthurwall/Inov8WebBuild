import React from "react";
import styled from "styled-components";
import Button from "../Global/Button/Button";
import { useMediaQuery } from "react-responsive";
import { colors } from "../Global/globalStyles";

const SectionFiveContainer = styled.section`
  height: auto;
  width: 100%;
  padding-top: 15%;
  padding-bottom: 10%;
  background: ${colors.white};
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
  cursor: pointer;

  @media only screen and (max-width: 900px) {
    width: 40vw;
  }
  @media (max-width: 700px) {
    width: 80vw;
    max-width: 400px;
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
      {!isTabletOrMobile ? (
        <>
          <ImageWrapper>
            <Image
              src="/assets/desktop/parkclaw-black.jpg"
              alt=" directs to the parkclaw black running show page"
            />
            <Image
              src="/assets/desktop/parkclaw-blue.jpg"
              alt="directs to the parkclaw blue running show page"
            />
            <Image
              src="/assets/desktop/parkclaw-navy.jpg"
              alt="directs to the parkclaw navy running show page"
            />
            <Image
              src="/assets/desktop/parkclaw-red.jpg"
              alt="directs to the parkclaw red running show page"
            />
          </ImageWrapper>

          <ButtonContainer>
            <Button buttonText={"SHOP MEN"} bgColor={colors.green} color={colors.greenButtonText}  />
            <Button
              buttonText={"SHOP WOMEN"}
              bgColor={colors.green} 
              color={colors.greenButtonText} 
            />
          </ButtonContainer>
        </>
      ) : (
        <>
          <ImageWrapper>
            <Image
              src="/assets/desktop/parkclaw-navy.jpg"
              alt="directs to the parkclaw navy running show page"
            />
            <Image
              src="/assets/desktop/parkclaw-red.jpg"
              alt="directs to the parkclaw red running show page"
            />
            <ButtonContainer>
              <Button
                buttonText={"SHOP MEN"}
                bgColor="#00FF00"
                color="#161615"
              />
            </ButtonContainer>
            <Image
              src="/assets/desktop/parkclaw-black.jpg"
              alt="directs to the parkclaw black running show page"
            />
            <Image
              src="/assets/desktop/parkclaw-blue.jpg"
              alt="directs to the parkclaw blue running show page"
            />
          </ImageWrapper>

          <ButtonContainer>
            <Button
              buttonText={"SHOP WOMEN"}
              bgColor="#00FF00"
              color="#161615"
            />
          </ButtonContainer>
        </>
      )}
    </SectionFiveContainer>
  );
};

export default SectionFive;
