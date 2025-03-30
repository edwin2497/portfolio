import { createTheme, ThemeProvider } from "@mui/material/styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer, NavBar } from "components";
import { About, Contact, Home } from "pages";

const App = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#1F2833",
      },
      background: {
        default: "#0B0C10",
        paper: "#1F2833",
      },
      text: {
        primary: "#66FCF1",
        secondary: "#C5C6C7",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
