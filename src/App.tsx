import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Home, Check } from "./pages";
import { themes } from "../src/styles/theme";
import GlobalStyle from "./styles/GlobalStyle";

function App() {
  return (
    <ThemeProvider theme={themes.light}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/check" element={<Check />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
