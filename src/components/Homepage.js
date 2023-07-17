import React from "react";
import squat from "../images/squat.jpg";
import can from "../images/can.jpg";

const Homepage = () => {
    return (
        <div id="homeBodyCon">
            <div id="halfWithColor">
                <div id="homeTextCon">
                    <div id="homeBigText">Push. Pull. Legs.</div>
                    <div id="homeSmallText">Ironclad your ambition with Ironworks. All new <span id="starbucks">Ironworks x Starbucks Preworkout</span> available now for limited time.</div>
                    <button id="suppButt">Shop supplements</button>
                </div>
            </div>
            <div id="halfWithPicture">
                <div id="homeImageCon"><img src={squat} alt={"Man exercising"} id="homepageImage"/></div>
            </div>
        </div>
    );
};

export default Homepage;