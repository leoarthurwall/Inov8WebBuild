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
  
`;

const SectionSix = () => {
  return (
    <SectionSixContainer>
      <VideoBox></VideoBox>
    </SectionSixContainer>
  );
};

export default SectionSix;
