import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../src/components/Home";
import Services from "../src/components/Services";
import Contact from "../src/components/Contact";
import ContactPage from "../src/components/ContactPage";
import Navigation from "../src/components/Navigation";
import Footer from "../src/components/Footer";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contactpage" element={<ContactPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
