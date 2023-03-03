import React from 'react';
import "./Desc.scss"
import {useTranslation} from "react-i18next";

const Desc = () => {
    const {t,i18n} =useTranslation()
    return (
        <div id="card">
            <div className="container">
                <div className="card">
                    <h1>{t("desc.h1")}</h1>
                    <p>{t("desc.p")}</p>
                </div>
            </div>
        </div>
    );
};

export default Desc;