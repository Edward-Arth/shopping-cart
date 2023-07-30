import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import ProductPage from "./components/ProductPage";
import React, { useState } from "react";
import ShoppingCart from "./components/ShoppingCart";

const App = () => {
  const [cartProducts, setCartProducts] = useState([]);
  const [cartQuantity, setCartQuantity] = useState(0);

  const addToCart = (product) => {
    setCartQuantity((prevQuantity) => prevQuantity + 1);
    const seekerFun = cartProducts.find(element => element.product.productName === product.product.productName);
    if (seekerFun !== undefined) {
      seekerFun.product.number += 1;
      setCartProducts([...cartProducts])
    } else {
      setCartProducts([...cartProducts, product]);
    }
  };

  const addFromCart = ({product}) => {
    product.product.number += 1;
    setCartQuantity((prevQuantity) => prevQuantity + 1);
  };

  const removeFromCart = ({product}) => {
    if (product.product.number > 1) {
      product.product.number -= 1;
      setCartQuantity((prevQuantity) => prevQuantity - 1);
    } else {
      product.product.number -= 1;
      setCartQuantity((prevQuantity) => prevQuantity - 1);
      const newBasket = cartProducts.filter((cartProduct) => cartProduct.product.productName !== product.product.productName);
      setCartProducts(newBasket);
    };
  };

  return (
    <div id="appCon">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/shop" element={<ProductPage addToCart={addToCart}/>}/>
      </Routes>
      <ShoppingCart cartProducts={cartProducts} cartQuantity={cartQuantity} addFromCart={addFromCart} removeFromCart={removeFromCart}/>
    </div>
  )
}

export default App;