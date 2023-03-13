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
                           <div className="blocks">
                               <SlBasket className="icon"/>
                               <h2> {t("delivery.h2")}</h2>
                           </div>
                            <p className="text">{t("delivery.p")}</p>
                        </div>
                        <div className="basket2">
                            <div className="blocks">
                                <BsTruck className="icon"/>
                                <h2>{t("delivery.h2-2")}</h2>
                            </div>

                            <p className="text2">{t("delivery.p-2")}</p>

                        </div>
                    </div>
                    <div className="block2">
                        <div className="basket3">
                            <div className="blocks">
                                <TbPlayerTrackNext className="icon"/>
                                <h2>{t("delivery.h2-3")}</h2>
                            </div>

                            <p className="text3">{t("delivery.p-3")}</p>
                        </div>
                        <div className="basket4">
                            <div className="blocks">
                                <AiOutlineMail className="icon"/>
                                <h2>{t("delivery.h2-4")}</h2>
                            </div>

                            <p className="text4"> {t("delivery.p-4")}</p>
                        </div>
                    </div>
                    <h4>{t("delivery.h4")}</h4>
                    <h4>{t("delivery.h4-2")}</h4>
                </div>
            </div>
        </div>
    );
};

export default Delivery;