import React from 'react';
import "./Payments.scss"
import card from "../../../assets/img/image 19.png"
import card2 from "../../../assets/img/image 20.png"
import card3 from "../../../assets/img/image 21.png"
import {useTranslation} from "react-i18next";

const Payments = () => {
    const {t,i18n} =useTranslation()
    return (
        <div id="pay">
            <div className="container">
                <div className="pay">
                    <h1>{t("payments.h1")}</h1>
                    <div className="page">
                        <div className="tittle">
                            <h2>{t("payments.h1")}</h2>
                            <p className="words">{t("payments.p1")}</p>
                               <p> ✔ {t("payments.p2")}</p>
                               <p> ✔ {t("payments.p3")}</p>
                               <p> ✔ {t("payments.p4")}</p>
                            <p className="word">{t("payments.p5")}</p>
                            <div className="img">
                                <img src={card} className="card" alt=""/>
                                <img src={card2} className="card" alt=""/>
                                <img src={card3} className="card" alt=""/>
                            </div>

                        </div>
                        <div className="tittle2">
                            <h3>{t("payments.h3")}</h3>
                            <h4>{t("payments.h4")}</h4>
                            <p className="text">{t("payments.p6")}</p>
                            <p className="text2">{t("payments.p7")}</p>
                             <p className="text3"> {t("payments.p8")}</p>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Payments;