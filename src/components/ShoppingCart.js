import React from "react";
import { CiShoppingCart } from "react-icons/ci";

const ShoppingCart = ({ cartProducts = [] }) => {

    console.log(cartProducts)
    return (
        <div id="cartContainer">
            <div id="cartAndCount">
                <CiShoppingCart id="cartIcon"/>
                <div id="cartCount">{cartProducts.length}</div>
            </div>
            <div id="cartProductCon" style={{display: "none"}}>
                {cartProducts.map((product, index) => {
                    return <div className="cartProductDivs" key={product.product.productName + 'Cart' + index}><img src={product.product.image} alt={`Product ${index}`} className="cartProdPics"/></div>
                })}
            </div>
        </div>
    );
};

export default ShoppingCart;