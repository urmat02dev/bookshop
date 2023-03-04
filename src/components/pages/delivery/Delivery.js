import React from 'react';
import './Delivery.scss'
import {AiOutlineMail} from "react-icons/ai";
import {SlBasket} from "react-icons/sl";
import {BsTruck} from "react-icons/bs";
import {TbPlayerTrackNext} from "react-icons/tb";
import {useTranslation} from "react-i18next";

const Delivery = () => {
    const {t,i18n} =useTranslation()
    return (
        <div id="order">
            <div className="container">
                <div className="order">
                   <h1>{t("delivery.h1")}</h1>
                    <div className="block">
                        <div className="basket1">
                            <h2><SlBasket className="icon"/> {t("delivery.h2")}</h2>
                            <p className="text">{t("delivery.p")}</p>
                        </div>
                        <div className="basket2">
                            <h2><BsTruck className="icon"/> {t("delivery.h2-2")}</h2>
                            <p className="text2"> Delivery is carried out every day from 10:00 to 21:00. The delivery time is determined automatically when choosing  carrier <br/>company.
                               <br/> • The cost of delivery in Bishkek is 200 soms.
                               <br/> • When ordering from 3000 soms — for free.</p>
                        </div>
                    </div>
                    <div className="block2">
                        <div className="basket3">
                            <h2><TbPlayerTrackNext className="icon"/> Points of delivery of orders</h2>
                            <p className="text3">Delivery to one of the points of delivery of orders of the companies Beber logistics, Pyaterochka stores and others. The terms and cost of delivery are determined depending on the location of the pick-up point. Delivery time from 2 <br/>working days.</p>
                        </div>
                        <div className="basket4">
                            <h2><AiOutlineMail className="icon"/>Delivery in the Kyrgyz region and throughout the CIS</h2>
                            <p className="text4">Convenient delivery to all cities of Kyrgyzstan. When placing an order, specify your locality, and we will offer all available delivery options, indicating the terms and cost.</p>
                        </div>
                    </div>
                    <h4>Delivery abroad</h4>
                    <h4>Orders are delivered by DHL.</h4>
                </div>
            </div>
        </div>
    );
};

export default Delivery;