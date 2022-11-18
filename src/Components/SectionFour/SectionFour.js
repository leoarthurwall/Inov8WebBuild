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
  return <Image src="/assets/desktop/tech.jpg" alt="The key technologies of the Inovate parkclaw running show"/>;
};

export default SectionFour;
