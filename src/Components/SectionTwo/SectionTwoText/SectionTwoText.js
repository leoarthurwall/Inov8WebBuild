import React from "react";
import styled from "styled-components";
import { device, colors, fonts } from "../../Global/globalStyles";

const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media ${device.tablet} {
    width: 90%;
  }
`;

const Header = styled.h2`
  font-size: 4.3vw;
  font-weight: bold;
  font-family: ${fonts.font};
  color: ${colors.white};
  margin: 0;
  @media ${device.laptop} {
    font-size: 55px;
  }
  @media only screen and (max-width: 550px) {
    font-size: 9vw;
  }
`;
const HeaderSpan = styled.span`
  font-family: ${fonts.font};
  font-weight: 200;
  @media ${device.laptop} {
    font-size: 55px;
  }
  @media only screen and (max-width: 550px) {
    font-size: 9vw;
  }
`;
const SubHeader = styled.h3`
  margin: 0;
  font-size: 2.05vw;
  font-weight: 300;
  font-family: ${fonts.font};
  color: ${colors.white};
  @media ${device.laptop} {
    font-size: 26px;
  }
  @media ${device.mobile} {
    font-size: 5.5vw;
  }
`;
const Paragraph = styled.p`
  color: ${colors.white};
  font-family: ${fonts.font};
  max-width: 40vw;
  font-size: 1.5vw;
  text-align: center;
  @media ${device.laptop} {
    max-width: 500px;
    font-size: 20px;
  }

  @media ${device.mobile} {
    font-size: 5.5vw;
  }
`;
const SectionTwoText = () => {
  return (
    <TextContainer>
      <Header>
        PARK<HeaderSpan>CLAW</HeaderSpan> G 280
      </Header>
      <SubHeader>ESCAPE THE GREY</SubHeader>
      <Paragraph>
        The ultimate road-to-trail running shoe, designed for adventure from the
        door. The PARKCLAW G 280 with Graphene – turn off the road, escape the
        grey, and unearth your inner wild side.
      </Paragraph>
    </TextContainer>
  );
};

export default SectionTwoText;
