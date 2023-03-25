import React, {useEffect, useState} from 'react';
import "./DetailPage.scss"
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import {useTranslation} from "react-i18next";
import Loader from "../../loader/Loader";
import {
  GET_BASKET,
} from "../../../redux/Reducer/ActionTypes";
import {useDispatch, useSelector} from "react-redux";
const DetailPage = () => {
  const {id} = useParams()
  const [detail, setDetail] = useState({})
  const [author, setAuthor] = useState({})
  const [categor , setCategor] = useState([])
  const [publisher , setPublisher] = useState([])
  const [loader,setLoader] = useState(false)
  const dispatch = useDispatch()
  const {basket} = useSelector(state => state)
  const navigate = useNavigate()
  const lang = localStorage.getItem("i18nextLng")
  window.scrollTo({
    top:0
  })
  const getDetail = async () => {
    try{
      setLoader(true)
      const url  = await axios (`https://bookshopmotion.herokuapp.com/product/books/${id}`)
      const {data} = url
      await setDetail(data)
    }catch (e){
      console.log(e,"Error")
    }
  }
  const getAuthor = async () => {
    try{
      setLoader(true)
      const url  = await axios (`https://bookshopmotion.herokuapp.com/product/author/${detail.author}`)
      const {data} = url
      await setAuthor(data)
    }catch (e){
      console.log(e,"Error")
    }
  }
  const getCategory = async () => {
    try{
      setLoader(true)
      const url  = await axios (`https://bookshopmotion.herokuapp.com/product/category/${detail.category}`)
      const {data} = url
      await setCategor(data.title)
      setLoader(false)
    }catch (e){
      console.log(e,"Error")
    }
  }
  const getPublisher = async () => {
    try{
      setLoader(true)
      const url  = await axios (`https://bookshopmotion.herokuapp.com/product/publisher/${detail.publisher}`)
      const {data} =  url
      await setPublisher(data.title)
      setLoader(false)
    }catch (e){
      console.log(e,"Error")
    }
  }
  function getLang (detail) {
    const lang = localStorage.getItem("i18nextLng")
    if (lang === "en"){
      return <h1>{detail.name_en}</h1>
    }
    if (lang === "ru"){
      return <h1>{detail.name}</h1>
    }
    if (lang === "kg"){
      return <h1>{detail.name_ky}</h1>
    }
  }
  function getDesc (detail) {
    const lang = localStorage.getItem("i18nextLng")
    if (lang === "en"){
      return  detail.desc_en ? detail.desc_en.slice(0,200) : detail.desc_en
    }
    if (lang === "ru"){
      return  detail.desc ? detail.desc.slice(0,200) : detail.desc

    }
    if (lang === "kg"){
      return  detail.desc_ky ? detail.desc_ky.slice(0,200) : detail.desc_ky

    }
  }
  function getBasket () {
    dispatch({type:GET_BASKET, payload:detail})
    if (basket.length){
      navigate("/payments")
    }
  }
  useEffect(() => {

    getDetail()
    getAuthor()
    getCategory()
    getPublisher()
  },[id,detail.author,detail.category, detail.publisher,])
  const {image, published_day,price,new_price} = detail
  const {t} =useTranslation()

  return (

      <>

        <div id={"detail-page"}>
          <div className="container">
            {
              loader ? <Loader/>
                : <div className="detail-page">

                  <div className="detail-page--img">
                    <img className="detail-page--img__book" src={image} alt=""/>
                  </div>
                  <div className="detail-page--desc1">
                    {
                      getLang(detail)
                    }
                    <p>{author.first_name} {author.last_name}</p>
                    <h2>{t("detailPage.h2")}</h2>
                    <p>{published_day}</p>

                    <h1>{t("detailPage.p")}</h1>
                    <p>{categor}</p>
                  </div>
                  <div className="detail-page--desc2">
                    <h2>{t("detailPage.h2-3")}</h2>
                    <p>{publisher}</p>
                    <p>{getDesc(detail)}</p>
                    <div className="detail-page--desc2__block">
                      <h4><span>{price} </span> Com</h4>
                      <h5>{new_price} Com</h5>
                      <button className="btn" onClick={() => getBasket()}>
                        {basket.length ? t("detailPage.btnTwo") : t("detailPage.btn")}
                      </button>
                    </div>

                  </div>
                </div>
            }
          </div>
        </div>
      </>
  );
};

export default DetailPage;