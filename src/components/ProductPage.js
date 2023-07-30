import React, { useState, useEffect } from "react";
import barbell from "../images/barbell.jpg";
import belt from "../images/belt.jpg";
import compression from "../images/compression.jpg";
import creatine from "../images/creatine.jpg";
import dumbbells from "../images/dumbbells.jpg";
import ginger from "../images/ginger.jpg";
import kettlebells from "../images/kettlebells.jpg";
import plates from "../images/plates.jpg";
import preworkout from "../images/preworkout.jpg";
import redSet from "../images/redSet.jpg";
import squatRack from "../images/squatRack.jpg";
import { AiOutlinePlusCircle } from "react-icons/ai";


const ProductPage = ({ addToCart }) => {
    const allProducts = [
        {productName: "Barbell", image: barbell, category: "equipment", number: 1, price: 74.95}, 
        {productName: "Dumbbell Set", image: dumbbells, category: "equipment", number: 1, price: 150.00}, 
        {productName: "Kettlebell Set", image: kettlebells, category: "equipment", number: 1, price: 263.00}, 
        {productName: "Squat Rack", image: squatRack, category: "equipment", number: 1, price: 505.00},
        {productName: "Barbell Plate Set", image: plates, category: "equipment", number: 1, price: 374.99}, 
        {productName: "Compression Set (Black)", image: compression, category: "clothes", number: 1, price: 86.35}, 
        {productName: "Athlete Set (Pink)", image: redSet, category: "clothes", number: 1, price: 75.00}, 
        {productName: "Signature Lifting Belt", image: belt, category: "clothes", number: 1, price: 113.25}, 
        {productName: "Creatine Monohydrate", image: creatine, category: "supplements", number: 1, price: 55.00}, 
        {productName: "Ginger Wellness Booster", image: ginger, category: "supplements", number: 1, price: 69.99}, 
        {productName: "Ironworks X Starbucks Preworkout", image: preworkout, category: "supplements", number: 1, price: 85.59}
    ];
    
    const [selectedCategory, setSelectedCategory] = useState("All");

    useEffect(() => {
        const getUrlCat = new URLSearchParams(window.location.search);
        const categoryParam = getUrlCat.get("category");
        if (categoryParam && categoryParam === "supplements") {
            setSelectedCategory("supplements");
        };
    }, []);

    const handleCheckboxes = (event) => {
        setSelectedCategory(event.target.value);
    };

    const handleProducts = (clickedProduct) => {
        addToCart(clickedProduct);
    };

    const filteredProducts = selectedCategory === "All"
    ? allProducts
    : allProducts.filter((product) => product.category === selectedCategory);

    return (
        <div id="shopBody">
            <div id="shopSidebar">
                <div id="checkboxes">
                    <label htmlFor="equipmentBox" className="checkboxLabels">
                        Equipment
                        <input 
                            type="checkbox" 
                            id="equipmentBox" 
                            className="checkboxInputs"
                            name="equipmentBox" 
                            value="equipment" 
                            checked={selectedCategory === "equipment"} 
                            onClick={handleCheckboxes}
                        />
                    </label>
                    <label htmlFor="clothesBox" className="checkboxLabels">
                        Clothes 
                        <input 
                            type="checkbox" 
                            id="clothesBox" 
                            className="checkboxInputs" 
                            name="clothesBox" 
                            value="clothes" 
                            checked={selectedCategory === "clothes"} 
                            onClick={handleCheckboxes}
                        />
                    </label>
                    <label htmlFor="supplementsBox" className="checkboxLabels">
                        Supplements 
                        <input 
                            type="checkbox" 
                            id="supplementsBox" 
                            className="checkboxInputs" 
                            name="supplementsBox" 
                            value="supplements" 
                            checked={selectedCategory === "supplements"} 
                            onClick={handleCheckboxes}
                        />
                    </label>
                    <label htmlFor="allBox" className="checkboxLabels">
                        All 
                        <input 
                            type="checkbox" 
                            id="allBox" 
                            className="checkboxInputs" 
                            name="allBox" value="All" 
                            checked={selectedCategory === "All"} 
                            onClick={handleCheckboxes}
                        />
                    </label>
                </div>
            </div>
            <div id="shopMeat">
                <div id="productCon">
                    {filteredProducts.map((product, index) => {
                        return <div className="productDivs" key={product.productName} onClick={() => handleProducts({product})}><img src={product.image} alt={`Product ${index}`} className="productPics"/><AiOutlinePlusCircle id="addIcon"/><div className="productDesc"><span className="productMarg">{product.productName}</span><span>${product.price}</span></div></div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default ProductPage;