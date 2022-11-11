import React from 'react'
import styled from 'styled-components';
//SECTION - 

const SectionFourContainer = styled.section`
  width: 100%;
  height: 100vh;
  background-position: 50%;
  background-size: cover;
  position: relative;
  background-image: url(/assets/desktop/tech.jpg);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SectionFour = () => {
  return (
    <SectionFourContainer>SectionFour</SectionFourContainer>
  )
}

export default SectionFour