import { AppBar } from "components";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <AppBar />
        <Routes>
          <Route path="/" element={<></>} />
          <Route path="/about" element={<></>} />
          <Route path="/contact" element={<></>} />
          <Route path="/projects" element={<></>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
