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

`;
const ImageWrapper = styled.div`
 
  margin-left: auto;
  margin-right: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;

  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 1vw;

`;
const Image = styled.img`
  width: 580px;
`;

const SectionThree = () => {
  return (
    <SectionThreeContainer>
      <ImageWrapper>
        <Image src="/assets/desktop/grid-1.jpg" alt="grid-1.jpg" />
        <Image src="/assets/desktop/grid-2.jpg" alt="grid-2.jpg" />
        <Image src="/assets/desktop/grid-3.jpg" alt="grid-3.jpg" />
        <Image src="/assets/desktop/grid-4.jpg" alt="grid-4.jpg" />
      </ImageWrapper>
    </SectionThreeContainer>
  );
};

export default SectionThree;
