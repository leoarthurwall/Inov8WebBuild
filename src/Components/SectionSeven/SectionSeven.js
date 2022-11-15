import React from "react";
import styled from "styled-components";

const SectionSevenContainer = styled.section`
  height: 100vh;
  width: 100%;
  background: #fff;
`;
const Header = styled.h2`
  color: #000000;
  font-size: 50px;
  font-weight: bold;
  font-family: sans-serif;
  text-align: left;
  padding: 50px;
  box-sizing: border-box;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-template-rows: 430px auto;
  grid-gap: 48px;
  padding: 50px;
`;

const Image = styled.div`
  height: auto;
  width: auto;
  background-size: cover;
  background-image: url(${(props) => props.bgImage});
`;
const Text = styled.h4`
  font-size: 20px;
  color: #000;
  font-family: sans-serif;
  padding-left: 35px;
  margin: 0;
  font-weight:300;
`;

const SectionSeven = () => {
  return (
    <SectionSevenContainer>
      <Header>PARKCLAW G 280 STORIES</Header>
      <GridContainer>
        <Image bgImage={"/assets/desktop/story-1.jpg"} />
        <Image bgImage={"/assets/desktop/story-2.jpg"} />
        <Image bgImage={"/assets/desktop/story-3.jpg"} />

        <Text>Behind the design of the Parkclaw G 280</Text>
        <Text>Top 10 London Parks to run in</Text>
        <Text>How to find and explore your local trails</Text>
      </GridContainer>
    </SectionSevenContainer>
  );
};

export default SectionSeven;
