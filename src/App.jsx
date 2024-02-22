import React from "react";
import { BrowserRouter as Router, Routes, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

import AboutMe from "./components/Pages/AboutMe";
import Contact from "./components/Pages/Contact";
import Portfolio from "./components/Pages/Portfolio";
// import CustomResume from "../src/components/Pages/Resume";
import MainLayout from "./components/layout/Mainlayout";

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<MainLayout />}>
    <Route path="/about" element={<AboutMe />} />
    <Route path="/Contact" element={<Contact />} />
    <Route path="/Portfolio" element={<Portfolio />} />
    {/* <Route path="/Resume" element={<CustomResume />} /> */}
  </Route>
))
function App() {
  return <RouterProvider router={router} />
}
export default App;