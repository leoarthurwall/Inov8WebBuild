import React from "react";
import styled from "styled-components";
//SECTION - TECH

const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
`;

//need to change image for mobile

const SectionFour = () => {
  return <Image src="/assets/desktop/tech.jpg" alt="tech.jpg"/>;
};

export default SectionFour;
