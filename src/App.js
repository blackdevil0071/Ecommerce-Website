import React from "react";
import "./App.css";
import { CartProvider } from "./CartProvider";
import Header from "./Header";
import AvailableProducts from "./Products";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./About";

import Cart from "./Cart";
const App = () => {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<AvailableProducts />} />
            <Route path="/about" element={<About />} />
            <Route path="/cart" element={<Cart/>}/>
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;