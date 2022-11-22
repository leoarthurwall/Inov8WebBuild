import React from "react";
import styled from "styled-components";
import { device, colors } from "../Global/globalStyles";

const SectionSixContainer = styled.section`
  height: 100vh;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.white};
  @media ${device.laptop} {
    height: 75vw;
    @media ${device.mobile} {
    height: 60vh;
  }
  }
`;
const VideoContainer = styled.div`
  height: 100%;
  width: 100%;
  background-color: ${colors.videoBackground};

  display: flex;
  justify-content: center;
  align-items: center;

  margin: 50px;
  cursor: pointer;

  @media ${device.mobile} {
    margin: 50px 0;

  }
`;

const VideoText = styled.h1`
  color: ${colors.videoText};
  font-family: sans-serif;
  ${"" /* font-family: DINPro; */}
  font-weight: bold;
  font-size: 100px;

  @media ${device.laptop} {
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
