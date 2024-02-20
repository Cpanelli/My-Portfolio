import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AboutMe from "./components/Pages/AboutMe";
import Contact from "./components/Pages/Contact";
import Portfolio from "./components/Pages/Portfolio";
import CustomResume from "./components/Pages/Resume";

import MainLayout from "./components/layout/Mainlayout";

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/about" element={<AboutMe />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/resume" element={<CustomResume />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
