import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Create from "./components/Create";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Read from "./components/Read";

function App() {
  return (
    <>
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Create />} />
            <Route path="/read" element={<Read />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
