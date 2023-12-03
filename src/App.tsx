import styled from "@emotion/styled";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Popup from "./components/Popup";

function App() {
  return (
    <AppContainer>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/popup" element={<Popup />} />
      </Routes>
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;
