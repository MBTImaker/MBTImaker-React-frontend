import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Home, Check } from "./pages";
import { themes } from "../src/styles/theme";
import GlobalStyle from "./styles/GlobalStyle";
import UserTestCodeProvider from "./contexts/userTestCode";

function App() {
  return (
    <ThemeProvider theme={themes.light}>
      <GlobalStyle />
      <UserTestCodeProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/check" element={<Check />} />
          </Routes>
        </BrowserRouter>
      </UserTestCodeProvider>
    </ThemeProvider>
  );
}

export default App;
