import React, {useState} from 'react';
import "./Header.scss"
import logo from "../../assets/img/logo.svg"
import {NavLink} from "react-router-dom";
import {BsSearch} from "react-icons/bs";
import {useTranslation} from "react-i18next";

const Header = () => {
  const [count, setCount] = useState(false)
  const {t, i18n} = useTranslation()
  const changeLanguage = (language) =>{
    i18n.changeLanguage(language);
  };
   const valueLang = localStorage.getItem("i18nextLng")

  return (
    <div id='header'>
        <div className="container">
            <div className="header">
                <div className="header--start">
                    <NavLink to={"/"}><img src={logo} alt=""/></NavLink>
                </div>
                <div className="header--center">
                    <div className="header--center__start" onClick={() => setCount(true)}>
                        <button>Search <BsSearch/></button>
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
                           <select onChange={(e) => changeLanguage(e.target.value.toLowerCase())} defaultValue={valueLang}>
                             <option value={"en"}>EN</option>
                              <option value={"ru"}>RU</option>
                               <option value={"kg"}>KG</option>
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