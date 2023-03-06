import "./Menu.scss"
import logo from "../../../assets/img/logo.svg"
import {NavLink} from "react-router-dom";
const BurgerMenu = ({burger, setBurger, menu, setMenu}) => {

    return (
        <>
                <div className='burger' onClick={() => setMenu(false)}>
                    <div className='container'>
                        <div className="burger--menu">
                        <div className="burger--menu__bg">
                            <img src={logo} alt=""/>
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