import styled from "styled-components";

const ButtonContainer = styled.button`
 width: 300px;
 height: 90px
 color: #fff;
 outline: none;
 border: none;

`

const Button = ({ButtonText}) => {
  return (
    <ButtonContainer>{ButtonText}</ButtonContainer>
  )
}

export default Button