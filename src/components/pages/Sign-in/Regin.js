import React from 'react';
import './Regin.scss'
import logo from '../../../assets/img/logo.svg'
import read from '../../../assets/img/image 18.png'
const Regin = () => {
    return (
        <div id='login'>
            <div className="container">
                <div className="login">
                    <div className="login--block">
                        <img src={logo} alt=""/>
                    </div>
                    <div className="login--sign">
                        <div className="login--sign__one">
                            <h2>LOGIN</h2>
                        </div>
                        <div className="login--sign__two">
                            <h2>SIGN UP</h2>
                        </div>
                    </div>
                    <div className="login--regin">
                        <input type="text" placeholder='Email or username'/>
                    </div>
                    <div className="login--regin">
                        <input type="password" placeholder='Password'/>
                    </div>
                    <div className="login--password">
                        <div className='login--password__checkbox'>
                            <input type="checkbox"/> <h5>Remember me</h5>
                        </div>
                        <div className='login--password__forgot'>
                            <h5>Forgot Password ?</h5>
                        </div>

                    </div>
                    <div className="login--btn">
                        <button>LOGIN</button>
                    </div>
                    <div className="login--read">
                        <img src={read} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Regin;