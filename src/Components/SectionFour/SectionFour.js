import React from "react";
import styled from "styled-components";
//SECTION - 

const SectionFourContainer = styled.section`
  width: 100%;
  height: 1430px;
  background-image: url(/assets/desktop/tech.jpg);
  background-position: 50%;
  background-size: cover;
`;

const SectionFour = () => {
  return <SectionFourContainer />;
};

export default SectionFour;
