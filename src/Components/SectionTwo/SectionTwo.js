import React from "react";
import styled from "styled-components";
import Button from "../Global/Button/Button";
import SectionTwoText from "./SectionTwoText/SectionTwoText";
import { device, colors} from "../Global/globalStyles";

//SECTION - PARKCLAW

const SectionTwoContainer = styled.section`
  width: 100%;
  height: 100%;
  padding-top: 6%;
  padding-bottom: 10%;

  background-color: ${colors.orange};

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  
  @media ${device.tablet} {
    padding-top: 12%;
    padding-bottom: 20%;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  @media ${device.tablet} {
    flex-direction: column;
  }
`;
const Image = styled.img`
  width: 44vw;
  height: auto;
  object-fit: cover;
  @media ${device.laptop}{
    width: 500px;
  }
  @media ${device.tablet} {
    width: 75vw;
  }
  @media ${device.mobile} {
    width: 90vw;
  }
`;
const SectionTwo = () => {
  return (
    <SectionTwoContainer>
      <SectionTwoText />
      <Image
        src="/assets/desktop/parkclaw-large.jpg"
        alt="the parkclaw running shoe in yellow"
      />
      <ButtonContainer>
        <Button buttonText={"SHOP MEN"} bgColor={colors.white} color={colors.black} />
        <Button buttonText={"SHOP WOMEN"} bgColor={colors.white} color={colors.black} />
      </ButtonContainer>
    </SectionTwoContainer>
  );
};

export default SectionTwo;
