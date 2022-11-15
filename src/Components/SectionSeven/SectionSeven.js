import React from 'react'
import styled from 'styled-components'

const SectionSevenContainer = styled.section`
    height: 100vh;
    width: 100%;
    background: #fff;
`
const Header = styled.h2`
  color: #000000;
  font-size: 50px;
  font-weight: bold;
  font-family: sans-serif;
  text-align: left;
  padding: 50px;
  box-sizing: border-box;


`



const SectionSeven = () => {
  return (
    <SectionSevenContainer>
    <Header>PARKCLAW G 280 STORIES</Header>
    </SectionSevenContainer>
  )
}

export default SectionSeven