import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import Button from "./components/Button";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Button>test</Button>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
