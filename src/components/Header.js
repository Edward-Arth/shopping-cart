import React from "react";
import ShoppingCart from "./ShoppingCart";
import { Link, Route, Routes } from "react-router-dom";

const Header = (props) => {
    return (
        <div id="headerCon">
            <div id="titleCon"><div id="titleText">Ironworks Fitness</div>
                <div id="linksAndCart">
                    <nav id="linkCon">
                        <Link to="/" id="homeLink">Home</Link>
                        <Link to="/shop" id="shopLink">Shop</Link>
                        <ShoppingCart id="cartIcon"/>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Header;