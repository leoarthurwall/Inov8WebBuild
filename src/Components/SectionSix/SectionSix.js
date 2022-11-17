import React from "react";
import styled from "styled-components";

const SectionSixContainer = styled.section`
  height: 100vh;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  @media (max-width: 1280px) {
    height: 75vw;
    @media (max-width: 480px) {
    height: 60vh;
  }
  }
`;
const VideoContainer = styled.div`
  height: 100%;
  width: 100%;
  background-color: #ebebeb;

  display: flex;
  justify-content: center;
  align-items: center;

  margin: 50px;
  @media only screen and (max-width: 480px) {
    margin: 50px 0;

  }
`;

const VideoText = styled.h1`
  color: #707070;
  font-family: sans-serif;
  ${"" /* font-family: DINPro; */}
  font-weight: bold;
  font-size: 100px;
  @media (max-width: 1280px) {
    font-size: 8vw;
  }
`;

const SectionSix = () => {
  return (
    <SectionSixContainer>
      <VideoContainer>
        <VideoText>VIDEO</VideoText>
      </VideoContainer>
    </SectionSixContainer>
  );
};

export default SectionSix;
