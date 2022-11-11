import styled from "styled-components";
import SectionFour from "./Components/SectionFour/SectionFour";
import SectionOne from "./Components/SectionOne/SectionOne";
import SectionThree from "./Components/SectionThree/SectionThree";
import ParkClaw from "./Components/SectionTwo/SectionTwo";

const AppComponent = styled.main`
width: 100vw;
height: 100%;

`

function App() {
  return (
   <AppComponent>
      <SectionOne />
      <ParkClaw />
      <SectionThree />
      <SectionFour />
   </AppComponent>

  );
}

export default App;
