import React from 'react';
import "./Hero.scss"
import logos from "../../../assets/img/Vector (1).png"
import books from "../../../assets/img/books.png"
import {useTranslation} from "react-i18next";
import {useNavigate} from "react-router-dom";
const Hero = () => {
    const {t} =useTranslation()
    const nav = useNavigate()
    return (
        <div id="hero">
            <div className="container">
                <div className="hero">
                    <div className="words">
                        <h1 className="tittle">{t("hero.h1")}</h1>
                        <p className="word">{t("hero.p")}</p>
                    </div>

                    <div className="logo">
                        <img src={logos} className="font" alt=""/>
                        <img src={books} className="font2" alt=""/>
                        <button className="btn" onClick={() => nav("/payments")}>{t("hero.btn")}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;