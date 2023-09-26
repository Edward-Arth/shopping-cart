import React from "react";
import { Link } from "react-router-dom";
import ShoppingCart from "./ShoppingCart";

const Header = ({ cartProducts = [], cartQuantity, addFromCart, removeFromCart, cartTotal }) => {
    return (
        <div id="headerCon">
            <div id="titleCon"><Link to="/" className="brandLink"><div id="titleText">Ironworks Fitness</div></Link></div>
            <div id="linksAndCart">
                <div id="linkNavCon" className="sideHeader">
                        <nav id="linkCon">
                            <Link to="/" id="homeLink">Home</Link>
                            <Link to="/shop" id="shopLink">Shop</Link>
                        </nav>
                    </div>
                <ShoppingCart cartProducts={cartProducts} cartQuantity={cartQuantity} addFromCart={addFromCart} removeFromCart={removeFromCart} cartTotal={cartTotal}/>
            </div>
        </div>
    );
};

export default Header;