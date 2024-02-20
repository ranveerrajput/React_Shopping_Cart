import { useState } from "react";
import Header from "./components/Header.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home.jsx";
import Cart from "./components/Cart.jsx";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/cart" element={<Cart />} exact />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
