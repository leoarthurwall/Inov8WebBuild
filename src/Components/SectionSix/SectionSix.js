import React from "react";
import styled from "styled-components";

const SectionSixContainer = styled.section`
  height: 100vh;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;

`;
const VideoContainer = styled.div`
  height: 100%;
  width: 100%;
  background-color: #ebebeb;

  display: flex;
  justify-content: center;
  align-items: center;

  margin: 50px;
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
      <VideoContainer>
        <VideoText>VIDEO</VideoText>
      </VideoContainer>
    </SectionSixContainer>
  );
};

export default SectionSix;
