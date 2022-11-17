import React from "react";
import styled from "styled-components";

const SectionSevenContainer = styled.section`
  height: 100%;
  width: 100%;
  background: #fff;
  margin-bottom: 5%;
`;
const Header = styled.h2`
  color: #000000;
  font-size: 40px;
  font-weight: bold;
  font-family: sans-serif;
  text-align: left;
  padding: 100px 50px 0 50px;
  box-sizing: border-box;
  margin: 0;
  @media (max-width: 480px) {
    font-size: 26px;
    padding: 75px 25px 0 25px;


  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto auto;
  grid-gap: 2.2vw;
  padding: 50px;
  overflow: scroll;
  @media (max-width: 1280px) {
    grid-gap: 30px;
  }
  @media (max-width: 480px) {
    padding: 35px;
  }
`;

const Image = styled.img`
  width: 100%;
  min-width: 344px;
  height: auto;
  object-fit: cover;

  @media (max-width: 480px) {
    width: 344px;
  }
`;
const Text = styled.h4`
  font-size: 20px;
  color: #000;
  font-family: sans-serif;
  padding-left: 35px;
  padding-right: 35px;

  margin: 0;
  font-weight: 300;
`;

const SectionSeven = () => {
  return (
    <SectionSevenContainer>
      <Header>PARKCLAW G 280 STORIES</Header>
      <GridContainer>
        <Image src="/assets/desktop/story-1.jpg" alt="story-1.jpg" />
        <Image src="/assets/desktop/story-2.jpg" alt="story-2.jpg" />
        <Image src="/assets/desktop/story-3.jpg" alt="story-3.jpg" />
        <Text>Behind the design of the Parkclaw G 280</Text>
        <Text>Top 10 London Parks to run in</Text>
        <Text>How to find and explore your local trails</Text>
      </GridContainer>
    </SectionSevenContainer>
  );
};

export default SectionSeven;
