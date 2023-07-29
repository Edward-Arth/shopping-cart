import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div id="headerCon">
            <div id="titleCon"><div id="titleText">Ironworks Fitness</div>
                <div id="linksAndCart">
                    <nav id="linkCon">
                        <Link to="/" id="homeLink">Home</Link>
                        <Link to="/shop" id="shopLink">Shop</Link>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Header;