import React, {useState} from 'react';
import logo from "../../../assets/img/logo.svg";
import read from "../../../assets/img/image 18.png";
import './Signup.scss'
import {Route} from "react-router-dom";
import axios from "axios";

const SignUp = () => {
    // const [login, setLogin] = useState([])
    // const Login = async () => {
    //     const url = await axios.post(`https://motionbookshop.herokuapp.com/accounts/register/`)
    //     const {data} = await url
    //     await setLogin(data.results)
    //
    // }
    // console.log(Login)


    return (
        <div id='sign'>
            <div className="container">
                <div className="sign">
                    <div className="sign--block">
                        <img src={logo} alt=""/>
                    </div>
                    <div className="sign--sign">
                        <h2>LOGIN</h2>
                        <Route path='/sign' element={<SignUp/>}>SIGN UP</Route>
                    </div>
                    <div className="sign--regin">
                        <input type="text" placeholder={'Name'}/>
                    </div>
                    <div className="sign--regin1">
                        <input type="text" placeholder='Email or username'/>
                    </div>
                    <div className="sign--regin2">
                        <input type="password" placeholder='Create password'/>
                    </div>
                    <div className="sign--password">
                        <div className='sign--password__checkbox'>
                            <input type="checkbox"/> <h5>I agree with privacy</h5>
                        </div>
                    </div>
                    <div className="sign--btn">
                        <button>LOGIN</button>
                    </div>
                    <div className="sign--read">
                        <img src={read} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;