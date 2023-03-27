import React from 'react';
import "./Contacts.scss"
import {
    BsFacebook,
    BsFillTelephoneFill,
    BsLinkedin,
    BsTwitter
} from "react-icons/bs";

import {AiFillInstagram} from "react-icons/ai";
import {MdEmail} from "react-icons/md";

const Contacts = () => {

    return (
            <div id='contacts'>
                <div className="container">
                    <div className="contacts">
                        <div className="contacts--over">
                            <div className="contacts--over__start">
                                <h1>MIDNIGHTS</h1>
                                <p>The managing director & cluster head in Kyrgyz Republic at Bishkek City.</p>
                            </div>
                            <div className="contacts--over__center">
                                <h2>Contact Midnights!</h2>
                                <div className="contacts--over__center--email">
                                    <div className="contacts--over__center--email__icons">
                                        <MdEmail className='emails'/>
                                    </div>
                                    <div className="contacts--over__center--email__mail">
                                        <a href="Email">midnights@gmail.com</a>
                                    </div>
                                </div>
                                <div className="contacts--over__center--tel">
                                    <div className="contacts--over__center--tel__phone">
                                        <BsFillTelephoneFill className='tels'/>
                                    </div>
                                    <a href="tel:996 706364665">+996 706 364665</a>
                                </div>
                                <div className="contacts--over__center--web">
                                    <div className="contacts--over__center--web__inst">
                                        <AiFillInstagram className='icons'/>
                                        <p>Our Instagram!</p>
                                    </div>
                                    <div className="contacts--over__center--web__inst">
                                        <BsFacebook className='icons'/>
                                        <p>Our Facebook!</p>
                                    </div>
                                    <div className="contacts--over__center--web__inst">
                                        <BsLinkedin className='icons'/>
                                        <p>We are on Internet!</p>
                                    </div>
                                    <div className="contacts--over__center--web__inst">
                                        <BsTwitter className='icons'/>
                                        <p>Our Twitter!</p>
                                    </div>
                                </div>
                            </div>
                            <div className="contacts--over__end">
                                <h2>Store Locations</h2>
                                <p>Find your nearest Midnights! store with opening hours, location and contact detail</p>
                                <div className="contacts--over__end--blocks">
                                        <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2924.4051900739196!2d74.6109991!3d42.8642912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb7cb8bc0b1df%3A0x9b7004c0b8051973!2zMjUg0YPQuy4g0K7RgdGD0L_QsCDQkNCx0LTRgNCw0YXQvNCw0L3QvtCy0LAsINCR0LjRiNC60LXQug!5e0!3m2!1sru!2skg!4v1677751262505!5m2!1sru!2skg"
                                            width="90%" height="100%" allowFullScreen="" loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade"></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

    );
};

export default Contacts;