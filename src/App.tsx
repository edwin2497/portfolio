import { AppBar } from "components";
import { useState, useMemo } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = useMemo(() => {
    return () => {
      setOpen(!open);
    };
  }, [open]);

  return (
    <>
      <BrowserRouter>
        <AppBar open={open} handleOpen={handleOpen} />
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
