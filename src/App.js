import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
      </Router>
      <Hero />
      <Router>
        <Footer />
      </Router>
    </>
  );
}

export default App;
