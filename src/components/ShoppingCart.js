import React from "react";
import { CiShoppingCart } from "react-icons/ci";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";

const ShoppingCart = ({ cartProducts = [], cartQuantity, addFromCart, removeFromCart }) => {

    const handleClickOn = () => {
        const cartScreen = document.getElementById("cartScreen");
        cartScreen.style.display = "flex";
    };

    const handleClickOff = () => {
        const cartScreen = document.getElementById("cartScreen");
        cartScreen.style.display = "none";
    };

    return (
        <div id="cartContainer">
            <div id="cartAndCount" onClick={handleClickOn}>
                <CiShoppingCart id="cartIcon"/>
                <div id="cartCount">{cartQuantity}</div>
            </div>
            <div id="cartScreen">
                <div id="cartClickOff" onClick={handleClickOff}></div>
                <div id="cartProductCon">
                    <div id="cartTitle">My cart</div>
                    {cartProducts.length === 0 ? <span style={{textAlign: "center"}}>Hmm, no products in your cart yet...Check out the shop!</span>
                    :
                    cartProducts.map((product, index) => {
                        return <div className="cartProductDivs" key={product.product.productName + 'Cart' + index}>
                            <img src={product.product.image} alt={`Product ${index}`} className="cartProdPics"/>
                            <div className="cartProdText">
                                <div className="cartProdName">{product.product.productName}</div>
                                <div className="cartProdQuant"><AiOutlineMinus onClick={() => removeFromCart({product})}/><AiOutlinePlus onClick={() => addFromCart({product})}/><span id="quantText">Quantity: {product.product.number}</span></div>
                                <div className="cartProdPrice">${Math.round((product.product.number * product.product.price) * 100) / 100}</div>
                            </div>
                            </div>
                    })
                    }
                    <div id="priceBreakdown"></div>
                </div>
            </div>
        </div>
    );
};

export default ShoppingCart;