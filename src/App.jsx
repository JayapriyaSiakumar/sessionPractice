import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Create from "./Pages/Create";
import NotFound from "./Pages/NotFound";
import Edit from "./Pages/Edit";

const App = () => {
  const [id, setId] = useState(0);
  return (
    <BrowserRouter>
      <div>
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home setId={setId} />} />
        <Route path="/create" element={<Create />} />
        <Route path="/edit/:id" element={<Edit id={id} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
