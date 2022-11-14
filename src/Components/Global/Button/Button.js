import styled from "styled-components";

const ButtonContainer = styled.button`
 width: 300px;
 height: 90px;
 background: #fff;
 outline: none;
 border: none;
 color: black;
`;

const Button = ({ buttonText }) => {
  return <ButtonContainer>{buttonText}</ButtonContainer>;
};

export default Button;
