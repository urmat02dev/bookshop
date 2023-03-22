import React from 'react';
import "./Payments.scss"

import {useTranslation} from "react-i18next";
import {useSelector} from "react-redux";

const Payments = () => {
    const {t,i18n} =useTranslation()
    const {basket} = useSelector(s => s)
    console.log(basket)
    return (
        <div id="pay">
            <div className="container">
                <div className="pay">
                    <div className="card">
                        <div className="check">
                            <input type="checkbox"/>
                            <h1>I am a new customer</h1>
                        </div>
                        <div className="check">
                            <input type="checkbox"/>
                            <h1>I am already registered</h1>
                        </div>
                        <div className="in">
                            <input type="text" placeholder="Name*"/>
                            <p className="word">We will place an order in this name</p>
                        </div>

                        <div className="in">
                            <input type="text" placeholder="Phone number*"/>
                        </div>
                        <div className="in">
                            <input type="text" placeholder="Email*"/>
                            <p className="word2">We will send all the information about the order here</p>
                        </div>
                        <button>Continue</button>

                        <div className="tittle3">
                            <img src={basket.image} width="200px" alt=""/>
                            <h1>{basket.name}</h1>
                        </div>

                    </div>
                    <div className="book">

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payments;