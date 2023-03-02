import React from 'react';
import "./Footer.scss"
import {
    BsFacebook,
    BsFillTelephoneFill,
    BsLinkedin,
    BsTwitter
} from "react-icons/bs";
import {AiFillInstagram} from "react-icons/ai";
import {MdEmail} from "react-icons/md";
import {FaLocationArrow} from "react-icons/fa";
import {useNavigate} from "react-router-dom";
const Footer = () => {
    const navigate = useNavigate()
  return (
    <div id='footer'>
      <div className="container">
        <div className="footer">
            <div className="footer--over">
                <div className="footer--over__start">
                    <h1>MIDNIGHTS</h1>
                    <p>The managing director & cluster head in Kyrgyz Republic at Bishkek City.</p>
                </div>
                <div className="footer--over__center">
                    <h2>Contact Midnights!</h2>
                    <div className="footer--over__center--email">
                        <div className="footer--over__center--email__icons">
                            <MdEmail className='emails'/>
                        </div>
                        <div className="footer--over__center--email__mail">
                            <a href="Email">midnights@gmail.com</a>
                        </div>
                    </div>
                    <div className="footer--over__center--tel">
                        <div className="footer--over__center--tel__phone">
                            <BsFillTelephoneFill className='tels'/>
                        </div>
                         <a href="tel:996 706364665">+996 706 364665</a>
                    </div>
                    <div className="footer--over__center--web">
                        <div className="footer--over__center--web__inst">
                            <AiFillInstagram className='iconst'/>
                        </div>
                        <div className="footer--over__center--web__inst">
                            <BsFacebook className='icons'/>
                        </div>
                        <div className="footer--over__center--web__inst">
                            <BsLinkedin className='icons'/>
                        </div>
                        <div className="footer--over__center--web__inst">
                            <BsTwitter className='icons'/>
                        </div>
                    </div>
                </div>
                <div className="footer--over__end">
                    <h2>Store Locations</h2>
                    <p>Find your nearest Midnights! store with opening hours, location and contact detail</p>
                    <div className="footer--over__end--blocks">
                        <button onClick={() => navigate("/basket")}>FIND MY BOOKSHOP <FaLocationArrow className='arrow'/></button>
                    </div>
                </div>
            </div>
        </div>
      </div>
        <div className="footer--res">
            <hr/>
            <div className='footer--res__news'>
                <p>©</p> <h5> All rights reserved</h5>
            </div>
        </div>
    </div>
  );
};

export default Footer;