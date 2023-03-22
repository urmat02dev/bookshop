import React, {useEffect, useState} from 'react';
import Hero from "./hero/Hero";
import About from "./about/About";
import Desc from "./desc/Desc";
import Bookstores from "./bookstores/Bookstores";
import "./MainPage.scss"
import Week from "./week/Week";
import Genre from "./genre/Genre";
import Comment from "./comment/Comment";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import {GET_BOOKS} from "../../redux/Reducer/ActionTypes";
const MainPage = () => {
  const dispatch = useDispatch()
  const [book,setBook] = useState([])
  const getBooks = async () => {
    try{
      const url  = await axios('https://bookshopmotion.herokuapp.com/product/books/')
      const {data} = url
      await setBook(data)
    }
    catch (e){
      console.log(e,"Error")
    }
  }
  useEffect(() => {
    getBooks()
    dispatch({type:GET_BOOKS,payload:[...book] })
  },[])
  return (
    <div>
      <Hero/>
      <About/>
      <Week/>
      <Desc/>
      <Genre/>
      <Comment/>
      <Bookstores/>

    </div>
  );
};

export default MainPage;