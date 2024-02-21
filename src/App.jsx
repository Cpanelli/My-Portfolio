import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AboutMe from "../src/components/Pages/AboutMe";
import Contact from "../src/components/Pages/Contact";
import Portfolio from "../src/components/Pages/Portfolio";
// import CustomResume from "../src/components/Pages/Resume";
import MainLayout from "../src/components/layout/Mainlayout";

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
        <Route path="/about" element={<AboutMe />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Portfolio" element={<Portfolio />} />
          {/* <Route path="/Resume" element={<CustomResume />} /> */}
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
