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


const ProductPage = () => {
    const allProducts = [
        {productName: "Barbell", image: barbell, category: "equipment"}, 
        {productName: "Dumbbell Set", image: dumbbells, category: "equipment"}, 
        {productName: "Kettlebell Set", image: kettlebells, category: "equipment"}, 
        {productName: "Squat Rack", image: squatRack, category: "equipment"},
        {productName: "Barbell Plate Set", image: plates, category: "equipment"}, 
        {productName: "Compression Set (Black)", image: compression, category: "clothes"}, 
        {productName: "Athlete Set (Pink)", image: redSet, category: "clothes"}, 
        {productName: "Signature Lifting Belt", image: belt, category: "clothes"}, 
        {productName: "Creatine Monohydrate", image: creatine, category: "supplements"}, 
        {productName: "Ginger Wellness Booster", image: ginger, category: "supplements"}, 
        {productName: "Ironworks X Starbucks Preworkout", image: preworkout, category: "supplements"}
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

    const filteredProducts = selectedCategory === "All"
    ? allProducts
    : allProducts.filter((product) => product.category === selectedCategory);

    return (
        <div id="shopBody">
            <div id="shopSidebar">
                <div id="checkboxes">
                    <label htmlFor="equipmentBox" className="checkboxLabels">
                        Equipment
                        <input type="checkbox" id="equipmentBox" className="checkboxInputs" name="equipmentBox" value="equipment" checked={selectedCategory === "equipment"} onClick={handleCheckboxes}/>
                    </label>
                    <label htmlFor="clothesBox" className="checkboxLabels">
                        Clothes 
                        <input type="checkbox" id="clothesBox" className="checkboxInputs" name="clothesBox" value="clothes" checked={selectedCategory === "clothes"} onClick={handleCheckboxes}/>
                    </label>
                    <label htmlFor="supplementsBox" className="checkboxLabels">
                        Supplements 
                        <input type="checkbox" id="supplementsBox" className="checkboxInputs" name="supplementsBox" value="supplements" checked={selectedCategory === "supplements"} onClick={handleCheckboxes}/>
                    </label>
                    <label htmlFor="allBox" className="checkboxLabels">
                        All 
                        <input type="checkbox" id="allBox" className="checkboxInputs" name="allBox" value="All" checked={selectedCategory === "All"} onClick={handleCheckboxes}/>
                    </label>
                </div>
            </div>
            <div id="shopMeat">
                <div id="productCon">
                    {filteredProducts.map((product, index) => {
                        return <div className="productDivs" key={product.productName}><img src={product.image} alt={`Product ${index}`} className="productPics"/><div className="productDesc">{product.productName}</div></div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default ProductPage;