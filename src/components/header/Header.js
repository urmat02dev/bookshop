import React, {useState} from 'react';
import "./Header.scss"
import logo from "../../assets/img/logo.svg"
import {NavLink} from "react-router-dom";
import {BsSearch} from "react-icons/bs";
import {useTranslation} from "react-i18next";
import Search from "./search/Search";
import {BiUser} from "react-icons/bi";
import Login from "../pages/Sign-in/Login";
import Menu from "../pages/BurgerMenu/Menu";
import {SlBasket} from "react-icons/sl";




const Header = () => {
    const [count, setCount] = useState(false)
    const {t, i18n} = useTranslation()
    const [regin, setRegin] = useState(false)
    const [menu, setMenu] = useState(false)
    const lang = localStorage.getItem("i18nextLng")

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };
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
                                    <Search/>
                                </div>

                            </div>
                            <div className="header--center__start1--basket">
                                <SlBasket/>
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
                            <button onClick={() => setCount(true)}>Search<BsSearch/></button>
                            <div style={{
                                display: count ? 'block' : 'none'
                            }}>
                                <Search/>
                            </div>

                        </div>
                        <div className="header--center__block">
                            <NavLink to='/catalog'>Catalog</NavLink>
                            <NavLink to='/payments'>Payments</NavLink>
                            <NavLink to='/delivery'>Delivery</NavLink>
                            <NavLink to='/basket'>Basket</NavLink>
                            <NavLink to='/contacts'>Contacts</NavLink>
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
                                <button onClick={() => setRegin(true)}><BiUser/></button>
                                <div style={{
                                    display: regin ? 'block' : 'none'
                                }}>
                                    <Login/>
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

