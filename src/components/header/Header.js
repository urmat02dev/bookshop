import React, {useState} from 'react';
import "./Header.scss"
import logo from "../../assets/img/logo.svg"
import {NavLink} from "react-router-dom";
import {BsSearch} from "react-icons/bs";
const Header = () => {
    const [count, setCount] = useState(false)
  return (
    <div id='header'>
        <div className="container">
            <div className="header">
                <div className="header--start">
                    <img src={logo} alt=""/>
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
                           <select>
                               <option>ENG</option>
                               <option>RUS</option>
                               <option>KYR</option>
                           </select>
                       </div>
                       <div className="header--center__end--two">
                           <div>maik</div>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Header;