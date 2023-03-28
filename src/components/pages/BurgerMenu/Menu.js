import "./Menu.scss"
import logo from "../../../assets/img/logo.svg"
import {NavLink} from "react-router-dom";
import {BiUser} from "react-icons/bi";
import Auth from "../auth/Auth";
import React from "react";
import {useTranslation} from "react-i18next";
const BurgerMenu = ({burger, setBurger, menu, setMenu,}) => {
    const {t, i18n} = useTranslation()
    return (
        <>
            <div id='burger' style={{
                    left:menu ? "-1000px" : "0"}}>

                    <div className='container'>
                        <div className="burger--menu" >
                            <div className="burger--menu__bg" style={{
                                left:!menu ? "-1000px" : "0",
                            }}>
                                <div className="burger--menu__bg--none" onClick={() => setMenu(!menu)} style={{
                                }}>
                                    &times;
                                </div>
                                <NavLink to={'/'} onClick={() => setBurger(!burger)}>
                                    <img src={logo} alt=""/>
                                </NavLink>
                                <hr/>
                                <NavLink to={"/catalog"} className="menu--menu__about" onClick={() => setBurger(!burger)}>
                                    <p>{t("menu.catalog")}</p>
                                </NavLink>
                                <NavLink to={"/payments"} className="menu--menu__about" onClick={() => setBurger(!burger)}>
                                    <p>{t("menu.Payments")}</p>
                                </NavLink>
                                <NavLink to={"/delivery"} className="menu--link--faq" onClick={() => setBurger(!burger)}>
                                    <p>{t("menu.Delivery")}</p>
                                </NavLink>
                                <NavLink to={"/contacts"}  className="menu--link--faq" onClick={() => setBurger(!burger)}>
                                    <p>{t("menu.Contacts")}</p>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>


        </>

    );
};

export default BurgerMenu;