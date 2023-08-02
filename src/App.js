import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import ProductPage from "./components/ProductPage";
import React, { useState } from "react";

const App = () => {
  const [cartProducts, setCartProducts] = useState([]);
  const [cartQuantity, setCartQuantity] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  const addToCart = (product) => {
    setCartTotal((prevTotal) => prevTotal + product.product.price);
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
    setCartTotal((prevTotal) => prevTotal + product.product.price);
    product.product.number += 1;
    setCartQuantity((prevQuantity) => prevQuantity + 1);
  };

  const removeFromCart = ({product}) => {
    setCartTotal((prevTotal) => prevTotal - product.product.price);
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
      <Header cartProducts={cartProducts} cartQuantity={cartQuantity} addFromCart={addFromCart} removeFromCart={removeFromCart} cartTotal={cartTotal}/>
      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/shop" element={<ProductPage addToCart={addToCart}/>}/>
      </Routes>
    </div>
  )
}

export default App;