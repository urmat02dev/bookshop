import React, {useState} from 'react';
import "./Header.scss"
import "../pages/search/Search.scss"
import logo from '../../assets/img/logo.svg'
import {NavLink} from "react-router-dom";
import Search from "../pages/search/Search";
import {BsSearch} from "react-icons/bs";
import {FiUser} from "react-icons/fi";
import Regin from "../pages/Sign-in/Regin";
import SignUp from "../pages/Sign-in/SignUp";
const Header = () => {
    const [count, setCount] = useState(false)
    const [login, setLogin] = useState(false)
  return (
    <div id='header'>
        <div className="container">
            <div className="header">
                <div className="header--start">
                    <NavLink to={"/"}>
                        <img src={logo} alt=""/>
                    </NavLink>
                </div>
                <div className="header--center">
                    <div className='header--center__close'onClick={() => setCount(false)} style={{
                        display: count ? 'block' : 'none',
                    }}/>
                    <div className="header--center__start" onClick={() => setCount(true)}>
                        <button>Search <BsSearch/></button>
                        <div  className={"search"} style={{
                            display: count ? "block" : 'none',
                        }}>
                            <Search count={count} />
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
                           <select>
                               <option>ENG</option>
                               <option>RUS</option>
                               <option>KYR</option>
                           </select>
                       </div>
                       <div className="header--center__end--two">
                           <div className='header--center__end--two__close'onClick={() => setLogin(false)} style={{
                               display: login ? 'block' : 'none'
                           }}/>
                           <div className='header--center__end--two__user'>
                               <FiUser onClick={() => setLogin(true)}/>
                               <div style={{
                                   display: login ? 'block' : 'none'
                               }}>
                                   <Regin login={login}/>
                               </div>
                           </div>
                       </div>
                    </div>
                </div>
            </div>
        </div>
        {/*<SignUp/>*/}
    </div>
  );
};

export default Header;