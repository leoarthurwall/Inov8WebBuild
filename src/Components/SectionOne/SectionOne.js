import styled from "styled-components";
import SectionOneNotification from "./SectionOneNotification/SectionOneNotification";
import { useMediaQuery } from "react-responsive";

//SECTION - HEADER

const SectionOneContainer = styled.section`
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  background-image: ${({ isMobile }) => (isMobile ? "url(/assets/mobile/header.jpg)" : "url(/assets/desktop/header.jpg)")};
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 768px) {
    height: 100vh;
  }
  @media only screen and (max-width: 428px) {
    height: 75vh;
  }
`;

const SectionOne = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 428px)" });
  



  return (
    <SectionOneContainer isMobile={isMobile} alt="three runners in a park looking at central London">
      <SectionOneNotification />
    </SectionOneContainer>
  );
};

export default SectionOne;
