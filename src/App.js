import styled from "styled-components";
import SectionFive from "./Components/SectionFive/SectionFive";
import SectionFour from "./Components/SectionFour/SectionFour";
import SectionOne from "./Components/SectionOne/SectionOne";
import SectionSeven from "./Components/SectionSeven/SectionSeven";
import SectionSix from "./Components/SectionSix/SectionSix";
import SectionThree from "./Components/SectionThree/SectionThree";
import SectionTwo from "./Components/SectionTwo/SectionTwo";

const AppComponent = styled.main`
  width: 100vw;
  height: 100%;
`;

function App() {
  return (
    <AppComponent>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <SectionSeven />
    </AppComponent>
  );
}

export default App;
