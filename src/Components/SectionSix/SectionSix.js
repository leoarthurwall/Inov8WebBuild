import React from "react";
import styled from "styled-components";

const SectionSixContainer = styled.section`
  height: 100vh;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;
const VideoBox = styled.div`
  height: 100%;
  width: 90%;
  background: #ebebeb;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const VideoText = styled.h1`
    color: #707070;
    font-family: sans-serif; 
    ${'' /* font-family: DINPro; */}
    font-weight: bold;
    font-size: 100px;
`

const SectionSix = () => {
  return (
    <SectionSixContainer>
      <VideoBox>
        <VideoText>VIDEO</VideoText>
      </VideoBox>
    </SectionSixContainer>
  );
};

export default SectionSix;
