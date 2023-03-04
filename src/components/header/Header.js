import React, {useState} from 'react';
import "./Header.scss"
import logo from "../../assets/img/logo.svg"
import {NavLink} from "react-router-dom";
import {BsSearch} from "react-icons/bs";
import {useTranslation} from "react-i18next";
import Regin from "../pages/Sign-in/Regin";
import Search from "../pages/search/Search";

const Header = () => {
  const [count, setCount] = useState(false)
  const {t, i18n} = useTranslation()
  const changeLanguage = (language) =>{
    i18n.changeLanguage(language);
  };
  return (
    <div id='header'>
        <div className="container">
            <div className="header">
                <div className="header--start">
                    <NavLink to={'/'}><img src={logo} alt=""/></NavLink>
                </div>
                <div className="header--center">
                    <div className="header--center__close" onClick={() => setCount(false)} style={{
                        display: count ? "block" : "none"
                    }}>

                    </div>
                    <div className="header--center__start"onClick={() => setCount(true)}>
                        <button onClick={() => setCount(true)}>Search <BsSearch/></button>
                        <div style={{
                            display: count ? 'block' : 'none'
                        }}>
                            <Search/>
                        </div>

                    </div>
                    <div className="header--center__block">
                        <NavLink to='/catalog'>{t("header.catalog")}</NavLink>
                        <NavLink to='/payments'>{t("header.payments")}</NavLink>
                        <NavLink to='/delivery'>Delivery</NavLink>
                        <NavLink to='/basket'>Basket</NavLink>
                        <NavLink to='/contacts'>Contacts</NavLink>
                    </div>
                    <div className="header--center__end">
                       <div className="header--center__end--one">
                           <select onChange={(e) => changeLanguage(e.target.value.toLowerCase())}>
                               <option>EN</option>
                               <option>RU</option>
                               <option>KG</option>
                           </select>
                       </div>
                       <div className="header--center__end--two">
                            <div>Mike</div>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Header;