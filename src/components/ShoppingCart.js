import React, { useState } from "react";
import { CiShoppingCart } from "react-icons/ci";

const ShoppingCart = () => {
    const [cartCount, setCartCount] = useState(0);

    const addToCart = () => {
        setCartCount(cartCount + 1); 
    };

    const subtractFromCart = () => {
        setCartCount(cartCount - 1);
    };

    const clickCart = () => {
        //take to cartdisplay
    }

    return (
        <div id="shoppingCartIcon">
            <CiShoppingCart id="cartIcon"/>
            <div id="cartCount">{cartCount}</div>
        </div>
    );
};

export default ShoppingCart;