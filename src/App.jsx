import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Well from "./components/Well";
import Tap from "./components/Tap";
import Splash from "./components/Splash";
import Chart from "./components/Chart";
import Seedify from "./components/Seedify";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/seedify" element={<Seedify />} />
        <Route path="/bank" element={<Well />} />
        <Route path="/theatm" element={<Tap />} />
        <Route path="/cashP" element={<Splash />} />
        <Route path="/nftbank" element={<Splash />} />
        <Route path="/chart" element={<Chart />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
