import React from "react";
import styled from "styled-components";

const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: center;
`;

const Header = styled.h2`
  font-size: 90px;
  font-weight: bold;
  font-family: sans-serif;
  color: #fff;
`;
const HeaderSpan = styled.span`
font-weight: 200;
`
const SectionTwoText = () => {
  return (
    <TextContainer>
      <Header>PARK<HeaderSpan>CLAW</HeaderSpan> G 280</Header>
    </TextContainer>
  );
};

export default SectionTwoText;
