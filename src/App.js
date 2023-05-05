import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./Routes/Home";
import About from "./Routes/About";
import Packages from "./Routes/Packages";
import Contact from "./Routes/Contact";
import "./App.css";
import Search from "./Components/Search/Search";

const App = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </div>
  );
};

export default App;
