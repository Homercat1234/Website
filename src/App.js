import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' index element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </Router>
      <Router>
        <Footer />
      </Router>
    </>
  );
}

export default App;
