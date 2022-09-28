import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import Button from "./components/Button";
import Hero from "./components/Hero";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
      </Router>
      <Hero />
    </>
    
  );
}

export default App;
