import React, {useEffect, useState} from 'react';
import "./Header.scss"
import logo from "../../assets/img/logo.svg"
import {NavLink} from "react-router-dom";
import {BsSearch} from "react-icons/bs";
import {useTranslation} from "react-i18next";
import Search from "./search/Search";
import {BiUser} from "react-icons/bi";
import Auth from "../pages/auth/Auth";
import Menu from "../pages/BurgerMenu/Menu";
import {SlBasket} from "react-icons/sl";
import {useSelector} from "react-redux";




const Header = () => {
    const [count, setCount] = useState(false)
    const {t, i18n} = useTranslation()
    const [regin, setRegin] = useState(false)
    const [menu, setMenu] = useState(false)
    const lang = localStorage.getItem("i18nextLng")
    const {user} = useSelector(s => s)
    const auth = JSON.parse(localStorage.getItem("auth"))
    console.log(auth)
    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };
    useEffect(() => {

    },[auth])
    return (
        <div id='header'>
            <div className="container">
                <div className="header">
                    <div className='header--menu'>
                        <div className="header--menu__adap" onClick={() => setMenu(!menu)}>
                            <div className="header--menu__adap--one"></div>
                            <div className="header--menu__adap--two"></div>
                            <div className="header--menu__adap--one"></div>
                        </div>

                        <div >
                            {
                                menu ?  <Menu menu={menu} setMenu={setMenu}/> : ""
                            }

                        </div>

                        <div className="header--menu__start1">
                            <div className="header--menu__start1--close" onClick={() => setCount(false)} style={{
                               display: count ? "block" : "none"
                            }}></div>
                            <div className="header--menu__start1--search" onClick={() => setCount(true)}>
                                <button> <BsSearch onClick={() => setCount(true)} className='icon'/></button>
                                <div style={{
                                    display: count ? 'block' : 'none'
                                }}>
                                    <Search count={count} setCount={setCount}/>
                                </div>

                            </div>
                                <div className="header--center__end--one">
                                    <select onChange={(e) => changeLanguage(e.target.value)} defaultValue={lang}>
                                        <option value={"en"}>EN</option>
                                        <option value={"ru"}>RU</option>
                                        <option value={"kg"}>KG</option>
                                    </select>
                                </div>
                        </div>
                    </div>


                    <div className="header--start">
                        <NavLink to={'/'}><img src={logo} alt=""/></NavLink>
                    </div>
                    <div className="header--center">
                        <div className="header--center__close" onClick={() => setCount(false)} style={{
                            display: count ? "block" : "none"
                        }}>

                        </div>
                        <div className="header--center__start" onClick={() => setCount(true)}>
                            <button onClick={() => setCount(true)}>{t('header.search')}<BsSearch/></button>
                            <div style={{
                                display: count ? 'block' : 'none'
                            }}>
                                <Search count={count} setCount={setCount}/>
                            </div>

                        </div>
                        <div className="header--center__block">
                            <NavLink to='/catalog'>{t('header.catalog')}</NavLink>
                            <NavLink to='/payments'>{t('header.Payments')}</NavLink>
                            <NavLink to='/delivery'>{t('header.Delivery')}</NavLink>
                            <NavLink to='/contacts'>{t('header.Contacts')}</NavLink>
                        </div>
                        <div className="header--center__end">
                            <div className="header--center__end--one">
                                <select onChange={(e) => changeLanguage(e.target.value)} defaultValue={lang}>
                                    <option value={"en"}>EN</option>
                                    <option value={"ru"}>RU</option>
                                    <option value={"kg"}>KG</option>
                                </select>
                            </div>
                            <div className="header--center__end--close" onClick={() => setRegin(false)}
                                 style={{
                                     display: regin ? "block" : "none"
                                 }}>
                            </div>
                            <div className="header--center__end--user">
                                <button onClick={() => setRegin(true)}>
                                          <BiUser className={"user-icon"}/>
                                </button>
                                <div style={{
                                    display: regin ? 'block' : 'none'
                                }}>
                                    <Auth/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;

