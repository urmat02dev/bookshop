import React from 'react';
import "./Hero.scss"
import logos from "../../../assets/img/Vector (1).png"
import books from "../../../assets/img/books.png"

const Hero = () => {
    return (
        <div id="hero">
            <div className="container">
                <div className="hero">
                    <div className="words">
                        <h1 className="tittle">What Book Are You Looking For? </h1>
                        <p className="word">Not Sure What To Read Next? Explore Our Catalog</p>
                    </div>

                    <div className="logo">
                        <img src={logos} className="font" alt=""/>
                        <img src={books} className="font2" alt=""/>
                        <button className="btn">Order Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;