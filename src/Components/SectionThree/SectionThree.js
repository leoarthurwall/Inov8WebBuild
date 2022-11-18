import React from "react";
import styled from "styled-components";

const SectionThreeContainer = styled.section`
  width: 100%;
  height: 1050px;
  background: #fff;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 1280px) {
   height: 85vw;
  }
  @media only screen and (max-width: 480px) {
    height: 100vw;
  }
`;
const ImageWrapper = styled.div`
  position: absolute;

  z-index: 100;

  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 1vw;
  @media only screen and (max-width: 1280px) {
   padding: 0 3%;
  }
  @media only screen and (max-width: 480px) {
   padding: 0;
  }
`;
const Image = styled.img`
  width: 100%;
  max-width: 580px;
`;

const SectionThree = () => {
  return (
    <SectionThreeContainer>
      <ImageWrapper>
        <Image src="/assets/desktop/grid-1.jpg" alt="A man running up stairs." />
        <Image src="/assets/desktop/grid-2.jpg" alt="A closeup of the yellow parkclaw running shoe being used by someone" />
        <Image src="/assets/desktop/grid-3.jpg" alt="A closeup from behind of the navy parkclaw running shoe being used by someone" />
        <Image src="/assets/desktop/grid-4.jpg" alt="Three trail runners in action wearing the parkclaw running shoes" />
      </ImageWrapper>
    </SectionThreeContainer>
  );
};

export default SectionThree;
