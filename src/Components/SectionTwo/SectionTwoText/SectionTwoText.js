import React from "react";
import styled from "styled-components";

const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Header = styled.h2`
  font-size: 90px;
  font-weight: bold;
  font-family: sans-serif;
  color: #fff;
  margin: 0;
`;
const HeaderSpan = styled.span`
  font-weight: 200;
`;
const SubHeader = styled.h3`
  margin: 0;
  font-size: 40px;
  font-weight: 100;
  color: #fff;
`;
const Paragraph = styled.p`
color: white;
max-width: 716px;
font-size: 30px;
text-align: center;
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
