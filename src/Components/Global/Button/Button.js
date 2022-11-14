import styled from "styled-components";

const ButtonContainer = styled.button`
  width: 300px;
  height: 90px;
  background-color: ${(props) => props.bgColor};
  outline: none;
  border: none;
  color: ${(props) => props.color};
  font-weight: bold;
`;

const Button = ({ buttonText, bgColor, color }) => {
  return (
    <ButtonContainer color={color} bgColor={bgColor}>
      {buttonText}
    </ButtonContainer>
  );
};

export default Button;
