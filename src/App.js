import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./HomePages/Home";
import React, { useState } from "react";
import Overlybox from "./components/Overlybox";
import Backpack from "./Blogpages/Backpack";
import Footer from "./components/Footer";
import Faq from "./PageFaq/Faq";
import Contact from "./PageFaq/Contact";
const App = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <div>
      {isOpen && <Overlybox onClose={handleClose} />}

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Page" element={<Faq />} />
          <Route path="/Blog" element={<Backpack />} />
          <Route path="/Contact" element={<Contact />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
