import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Home, Check } from "./pages";
import { themes } from "../src/styles/theme";
import GlobalStyle from "./styles/GlobalStyle";
import UserTestCodeProvider from "./contexts/userTestCode";
import Result from "./pages/result";

function App() {
  return (
    <ThemeProvider theme={themes.light}>
      <GlobalStyle />
      <UserTestCodeProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/check" element={<Check />} />
            <Route path="/result" element={<Result />} />
          </Routes>
        </BrowserRouter>
      </UserTestCodeProvider>
    </ThemeProvider>
  );
}

export default App;
