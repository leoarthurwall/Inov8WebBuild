import React from 'react'
import styled from 'styled-components'
import Button from './Button/Button'
//SECTION - PARKCLAW

const SectionTwoContainer = styled.section`
  width: 100%;
  height: 100vh;
  background-position: 50%;
  background-size: cover;
  position: relative;
  background-image: url(/assets/desktop/parkclaw-large.jpg);
  display: flex;
  justify-content: center;
  align-items: center;
`

const SectionTwo = () => {
  return (
    <SectionTwoContainer>
    <Button ButtonName={"SHOP MEN"}/>
    <Button ButtonName={"SHOP WOMEN"}/>


    </SectionTwoContainer>

  )
}

export default SectionTwo