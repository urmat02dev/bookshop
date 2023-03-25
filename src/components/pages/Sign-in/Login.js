import React, {useEffect, useState} from 'react';
import './Login.scss'
import logo from '../../../assets/img/logo.svg'
import read from '../../../assets/img/image 18.png'
import axios from "axios";
import {useTranslation} from "react-i18next";
const Login = () => {
    const [index, setIndex] = useState(1)
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [password_confirm, setPassword_confirm] = useState("")
    const [isDone, setIsDone] = useState("")
    const [tasks, setTasks] = useState([])
    const [loader, setLoader] = useState(false)
    const {t, i18n} = useTranslation()
    const newtTasks = {
        username: username,
        email:email,
        password:password,
    }
    localStorage.setItem("auth",JSON.stringify(tasks))
    async function getAuth () {
        const url  = await axios.post('https://641d7d8a4366dd7def3f1b25.mockapi.io/Auth',{
            username:username,
            email:email,
            password:password,
        })

        setTasks([...tasks,newtTasks])

    }


    useEffect(() => {

    },[])

    return (
        <div id='login'>
            <div className="container">
                <div className="login">
                    <div className="login--block">
                        <img src={logo} alt=""/>
                    </div>
                    <div className="login--sign">
                        <div className={`login--sign__one ${index === 0 ? "active" : null}`} onClick={() => setIndex(0)}>
                            <h2>LOGIN</h2>
                        </div>
                        <div className={`login--sign__two ${index === 1 ? "active" : null }`} onClick={() => setIndex(1)}>
                            <h3>SIGN IN</h3>
                        </div>
                    </div>
                    <div className={`login--login`} hidden={index === 1}>
                        <div className="login--login--regin" >
                            <input type="text" placeholder={t("sign in.place")}/>
                        </div>
                        <div className="login--login--regin--password" >
                            <input type="password" placeholder={t("sign in.password")}/>
                        </div>
                        <div className="login--login--password" >
                            <div className='login--login--password__checkbox' >
                                <input type="checkbox"/> <h5>{t("sign in.h5")}</h5>
                            </div>
                            <div className='login--login--password__forgot' >
                                <h5>{t("sign in.two")}</h5>
                            </div>

                        </div>
                        <div className="login--login--btns">

                            <button className={"btns"} onClick={() => getAuth()}>LOGIN</button>

                            <button className={"btns"}>{t("sign in.login")}</button>

                        </div>
                        <div className="login--login--read" >
                            <img src={read} alt=""/>
                        </div>
                    </div>
                    <div className={`login--signup`} hidden={index === 0}>
                        <div className="sign--regin" >
                            <input type="text" placeholder={'Name'} onChange={(e) => setUsername(e.target.value)}/>
                        </div>
                        <div className="sign--regin1" >
                            <input type="text" placeholder='Email or username' onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                        <div className="sign--regin2" >
                            <input type="password" placeholder='Create password' onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                        <div className="sign--password" >
                            <div className='sign--password__checkbox'>
                                <input type="checkbox" onChange={(event) => setIsDone(!false)}/> <h5>I agree with privacy</h5>
                            </div>
                        </div>
                        <div className="sign--btn" >
                            <button onClick={()=> getAuth()}>{loader ? "Loader.. " : "LOGIN"}</button>
                        </div>
                        <div className="sign--read" >
                            <img src={read} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;