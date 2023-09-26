import React from "react";
import squat from "../images/squat.jpg";
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import pushups from '../images/pushups.jpg';
import smiling from '../images/smiling.jpg';
import pressing from '../images/pressing.jpg';
import Review from "./Review";
import Footer from "./Footer";

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
                    <Carousel.Item interval={3000}>
                        <img className="carouselImage" src={pushups} alt="First slide"/>
                        <Carousel.Caption className="carouselCaps"><h1>Equipment developed and tested by experts</h1></Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                        <img className="carouselImage" src={smiling} alt="Second slide"/>
                        <Carousel.Caption className="carouselCaps"><h1>Exclusively organic supplements</h1></Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                        <img className="carouselImage" src={pressing} alt="Third slide"/>
                        <Carousel.Caption className="carouselCaps"><h1>Single minded in improving client performance</h1></Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className="testimonialCon">
                <div className="reviewTitle">Testimonials</div>
                <Review author={"Leif Erikson"} content={'"The preworkout gave me a sick pump. Highly recommend it."'}/>
                <Review author={"Arnold Schwarzenegger"} content={'"I could have never been the terminator without Ironworks Fitness."'}/>
                <Review author={"Ronnie Coleman"} content={'"The most reliable organization in fitness today."'}/>
                <Review author={"Bob Smith"} content={'"Kitted out my entire home gym with Ironworks gear. Top notch!"'}/>
            </div>
            <Footer/>
        </div>
    );
};

export default Homepage;