import React from "react";
import styled from "styled-components";

const SectionThreeContainer = styled.section`
  height: 1053px;
  width: 100%;
  background: #fff;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ImageWrapper = styled.div`
  width: 1200px;
  height: 1200px;
  margin-left: auto;
  margin-right: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;

  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 20px;
`;
const Image = styled.div`
  height: auto;
  width: auto;
  background-image: url(${(props) => props.bgImage});
`;

const SectionThree = () => {
  return (
    <SectionThreeContainer>
      <ImageWrapper>
        <Image bgImage={"/assets/desktop/grid-1.jpg"} />
        <Image bgImage={"/assets/desktop/grid-2.jpg"} />
        <Image bgImage={"/assets/desktop/grid-3.jpg"} />
        <Image bgImage={"/assets/desktop/grid-4.jpg"} />
      </ImageWrapper>
    </SectionThreeContainer>
  );
};

export default SectionThree;
