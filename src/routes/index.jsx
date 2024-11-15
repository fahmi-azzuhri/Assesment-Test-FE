import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import About from "../components/About";
import Tips from "../components/Tips";
import Show from "../components/Tips/Show";
import Details from "../components/Tips/Details";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/tips" element={<Tips />} />
      <Route path="/tips/show-all" element={<Show />} />
      <Route path="/tips/details" element={<Details />} />
    </Routes>
  );
}

export default AppRoutes;
