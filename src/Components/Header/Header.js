import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.section`
  width: 100%;
  height: 100vh;
  background-position: 50%;
  background-size: cover;
  position: relative;
  background-image: url(/assets/desktop/header.jpg);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Header = () => {
  return <HeaderContainer></HeaderContainer>;
};

export default Header;
