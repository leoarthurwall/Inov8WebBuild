import React from "react";
import styled from "styled-components";

const SectionThreeContainer = styled.section`
  height: 100vh;
  width: 100%;
  background: #fff;
`;
const ImageWrapper = styled.div`
  max-width: 1200px;
  width: 1200px;
  margin-left: auto;
  margin-right: auto;

  display: flex;
  justify-content: center;
  flex: wrap;
  align-items: center;
  background-color: grey;
`;
const Image = styled.div`
  height: 50%;
  width: 50%;
`;

const SectionThree = () => {
  const ImagePaths = [
    {
      name: "grid-1",
      bgImage: "/assets/desktop/grid-1.jpg",
    },
    {
      name: "grid-2",
      bgImage: "/assets/desktop/grid-2.jpg",
    },
    {
      name: "grid-3",
      bgImage: "/assets/desktop/grid-3.jpg",
    },
    {
      name: "grid-4",
      bgImage: "/assets/desktop/grid-4.jpg",
    },
  ];

  return (
    <SectionThreeContainer>
      <ImageWrapper>
        {ImagePaths.map((imagePath, i) => {
          return (
            <Image
              key={i}
              style={{ backgroundImage: `url(${imagePath.bgImage})` }}
            />
          );
        })}
      </ImageWrapper>
    </SectionThreeContainer>
  );
};

export default SectionThree;
