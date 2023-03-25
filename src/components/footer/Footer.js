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
import {useTranslation} from "react-i18next";
const Footer = () => {
    const navigate = useNavigate()
    const {t, i18n} = useTranslation()
  return (
    <div id='footer'>
      <div className="container">
        <div className="footer">
            <div className="footer--over">
                <div className="footer--over__start">
                    <h1>MIDNIGHTS</h1>
                    <p>{t("footer.pp")}</p>
                </div>
                <div className="footer--over__center">
                    <h2>{t("footer.h2")} Midnights!</h2>
                    <div className="footer--over__center--email">
                        <div className="footer--over__center--email__icons">
                            <MdEmail className='emails'/>
                        </div>
                        <div className="footer--over__center--email__mail">
                            <a href="https://motion-webllc.com/">midnights@gmail.com</a>
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
                            <a href="https://www.instagram.com/motion_web/"><AiFillInstagram className='iconst'/></a>
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
                    <h2>{t("footer.end")}</h2>
                    <p>{t("footer.p")}</p>
                    <div className="footer--over__end--blocks">
                        <button onClick={() => navigate("/basket")}>{t("footer.button")}<FaLocationArrow className='arrow'/></button>
                    </div>
                </div>
            </div>
        </div>
      </div>
        <div className="footer--res">
            <hr/>
            <div className='footer--res__news'>
                <p>©</p> <h5>{t("footer.finish")}</h5>
            </div>
        </div>
    </div>
  );
};

export default Footer;