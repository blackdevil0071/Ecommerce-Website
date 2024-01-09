import React from "react";
import "./App.css";
import { CartProvider } from "./CartProvider";
import Header from "./Header";
import AvailableProducts from "./ProductsList";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./About";
import Cart from "./Cart";
import Home from "./Home";
import ContactUs from "./ContactUs";
import Products from "./Products";

const App = () => {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<AvailableProducts />} />
            <Route path="/products" element={<AvailableProducts />} />
            <Route path="/products/:productTitle" element={<Products />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/contactus" element={<ContactUs />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;
