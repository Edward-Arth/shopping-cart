import React, { useState } from "react";
import { CiShoppingCart } from "react-icons/ci";
import { AiOutlinePlus} from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";

const ShoppingCart = ({ cartProducts = [], cartQuantity, addFromCart, removeFromCart, cartTotal }) => {

    const [isVisible, setIsVisible] = useState(false);

    const visibleThanks = () => {
        setIsVisible((prevVisible) => !prevVisible);
        setTimeout(() => {
            setIsVisible((prevVisible) => !prevVisible);
        }, 3000);
    };

    const handleClickOn = () => {
        const cartScreen = document.getElementById("cartScreen");
        cartScreen.style.display = "flex";
    };

    const handleClickOff = () => {
        const cartScreen = document.getElementById("cartScreen");
        cartScreen.style.display = "none";
    };

    return (
        <div id="cartContainer" className="sideHeader">
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
                                <div className="cartProdQuant"><AiOutlineMinus className="myCartIcons" onClick={() => removeFromCart({product})}/><AiOutlinePlus className="myCartIcons" onClick={() => addFromCart({product})}/><span id="quantText">Quantity: {product.product.number}</span></div>
                                <div className="cartProdPrice">${(Math.round((product.product.number * product.product.price) * 100) / 100).toFixed(2)}</div>
                            </div>
                            </div>
                    })
                    }
                    {cartProducts.length === 0 ? null : <div id="totalAndCheck"><div id="priceBreakdown">Subtotal: ${cartTotal.toFixed(2)}</div><button id="checkoutButt" onClick={visibleThanks}>Checkout</button><div id="thankYouDiv" className={`invisible-div ${isVisible ? 'visible' : ''}`}>Thank you for trying my demo!</div></div>}
                </div>
            </div>
        </div>
    );
};

export default ShoppingCart;