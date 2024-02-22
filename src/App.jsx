// App.js

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./components/layout/Mainlayout";
import AboutMe from "./components/Pages/AboutMe";
import Contact from "./components/Pages/Contact";
import Portfolio from "./components/Pages/Portfolio";
// import Resume from "../src/assets/MyResume.pdf";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/about" element={<AboutMe />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          {/* <Route path="/resume" element={<Resume />} /> */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
