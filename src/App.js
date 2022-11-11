import styled from "styled-components";
import SectionOne from "./Components/SectionOne/SectionOne";

const AppComponent = styled.main`
width: 100vw;
height: 100%;
`

function App() {
  return (
   <AppComponent>
      <SectionOne />
   </AppComponent>
  );
}

export default App;
