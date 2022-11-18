import React from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";

//SECTION - TECH

const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
`;


const SectionFour = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 428px)" });

  return (
    <>
      {isMobile ? (
        <Image
          src="/assets/mobile/tech.jpg"
          alt="The key technologies of the Inovate parkclaw running show"
        />
      ) : (
        <Image
          src="/assets/desktop/tech.jpg"
          alt="The key technologies of the Inovate parkclaw running show"
        />
      )}
    </>
  );
};

export default SectionFour;
