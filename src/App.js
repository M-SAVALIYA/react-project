import React from "react";
import Navbar from "./componet/Navbar";
import Home from "./componet/pages/Home";
import About from "./componet/pages/About";
import Product from "./componet/pages/Product";
import { Route, Routes } from "react-router-dom";
import Productdetail from "./componet/pages/Productdetail";
import Footer from "./componet/Footer";

function App() {
  return (
    <>

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/:id" element={<Productdetail />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
