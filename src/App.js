import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import ProductPage from "./components/ProductPage";
import React, { useState } from "react";
import ShoppingCart from "./components/ShoppingCart";

const App = () => {

  const [cartProducts, setCartProducts] = useState([]);

  const addToCart = (product) => {
    setCartProducts([...cartProducts, product]);
  };

  return (
    <div id="appCon">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/shop" element={<ProductPage addToCart={addToCart}/>}/>
      </Routes>
      <ShoppingCart cartProducts={cartProducts}/>
    </div>
  )
}

export default App;