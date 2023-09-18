import React from "react";
import squat from "../images/squat.jpg";
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import pushups from '../images/pushups.jpg';
import smiling from '../images/smiling.jpg';
import pressing from '../images/pressing.jpg';

const Homepage = () => {
    return (
        <div id="homeBodyCon">
            <div className="heroCon">
                <div id="halfWithColor">
                    <div id="homeTextCon">
                        <div id="homeBigText">Push. Pull. Legs.</div>
                        <div id="homeSmallText">Ironclad your ambition with Ironworks. All new <span id="starbucks">Ironworks x Starbucks Preworkout</span> available now for limited time.</div>
                        <Link to="/shop?category=supplements" id="shopSupLink">
                            <button id="suppButt">Shop supplements</button>
                        </Link>
                    </div>
                </div>
                <div id="halfWithPicture">
                    <img src={squat} alt={"Man exercising"} id="homepageImage"/>
                </div>
            </div>
            <div className="featureSection">
                <Carousel className="carouselCon">
                    <Carousel.Item>
                        <img className="carouselImage" src={pushups} alt="First slide"/>
                        <Carousel.Caption className="carouselCaps"><h1>Equipment developed and tested by experts</h1></Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="carouselImage" src={smiling} alt="Second slide"/>
                        <Carousel.Caption className="carouselCaps"><h1>Exclusively organic ingredients</h1></Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="carouselImage" src={pressing} alt="Third slide"/>
                        <Carousel.Caption className="carouselCaps"><h1>Singleminded in improving client performance</h1></Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className="reviewCon">

            </div>
        </div>
    );
};

export default Homepage;