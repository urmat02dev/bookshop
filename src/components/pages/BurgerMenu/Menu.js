import "./Menu.scss"
import logo from "../../../assets/img/logo.svg"
import {NavLink} from "react-router-dom";
import {BiUser} from "react-icons/bi";
import Login from "../Sign-in/Login";
import React from "react";
const BurgerMenu = ({burger, setBurger, menu, setMenu,}) => {

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
                                <img src={logo} alt=""/>
                                <hr/>
                                <NavLink to={"/about"} className="menu--menu__about" onClick={() => setBurger(!burger)}>
                                    <p>Catalog</p>
                                </NavLink>
                                <NavLink to={"/basket"} className="menu--menu__about" onClick={() => setBurger(!burger)}>
                                    <p>Payments</p>
                                </NavLink>
                                <NavLink to={"/faq"} className="menu--link--faq" onClick={() => setBurger(!burger)}>
                                    <p>Delivery</p>
                                </NavLink>
                                <NavLink to={"/faq"}  className="menu--link--faq" onClick={() => setBurger(!burger)}>
                                    <p>Contacts</p>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>


        </>

    );
};

export default BurgerMenu;