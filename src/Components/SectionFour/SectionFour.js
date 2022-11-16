import React from "react";
import styled from "styled-components";
//SECTION -

const SectionFourContainer = styled.img`
  width: 100%;
  height: auto;
  background-size: contain;
`;

const SectionFour = () => {
  return <SectionFourContainer src="/assets/desktop/tech.jpg" alt="tech.jpg"/>;
};

export default SectionFour;
