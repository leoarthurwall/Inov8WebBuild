import styled from "styled-components";
import SectionOne from "./Components/Header/Header";
import ParkClaw from "./Components/ParkClaw/ParkClaw";

const AppComponent = styled.main`
width: 100vw;
height: 100%;

`

function App() {
  return (
   <AppComponent>
      <SectionOne />
      <ParkClaw />
   </AppComponent>

  );
}

export default App;
