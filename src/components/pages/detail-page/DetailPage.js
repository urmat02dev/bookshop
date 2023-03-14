import React, {useEffect, useState} from 'react';
import "./DetailPage.scss"
import {useParams} from "react-router-dom";
import axios from "axios";
import {useTranslation} from "react-i18next";
const DetailPage = () => {
  const {id} = useParams()
  const [detail, setDetail] = useState({})
  const [author, setAuthor] = useState({})
  const lang = localStorage.getItem("i18nextLng")
  console.log(lang)
  const getDetail = async () => {
    try{
      const url  = await axios (`https://bookshopmotion.herokuapp.com/product/books/${id}`)
      const {data} = url
      await setDetail(data)
      console.log(url)
    }catch (e){
      console.log(e,"Error")
    }
  }
  const getAuthors = async () => {
    try{
      const url  = await axios (`https://bookshopmotion.herokuapp.com/product/author/${detail.author.toString()}`)
      const {data} = url
      await setAuthor(data)
      console.log(url)
    }catch (e){
      console.log(e,"Error")
    }
  }
  useEffect(() => {
    getDetail()
    getAuthors()
  },[id])
  console.log(detail.author)
  console.log(author)
  const {image,name, name_ky, name_en, published_day,category,publisher,desc,price,new_price} = detail
  const {t} =useTranslation()
  return (

      <>
        <div id={"detail-page"}>
          <div className="container">
            <div className="detail-page">

              <div className="detail-page--img">
                <img className="detail-page--img__book" src={image} alt=""/>
              </div>
              <div className="detail-page--desc1">
                <h1>{name}</h1>
                <p>{author.first_name + author.last_name}</p>
                <h2>{t("detailPage.h2")}</h2>
                <p>{published_day}</p>
                <h2>{t("detailPage.h2-2")}</h2>
                <p>{t("detailPage.p")}</p>
              </div>
              <div className="detail-page--desc2">
                <h2>{t("detailPage.h2-3")}</h2>
                <p>{publisher ? publisher : "NO"}</p>
                <p>{desc ? desc.slice(0,200) : 'No'}</p>
                <div className="detail-page--desc2__block">
                  <h4>{price} Com</h4>
                  <h5>{new_price} Com</h5>
                  <button className="btn">{t("detailPage.btn")}</button>
                </div>

              </div>
            </div>
          </div>
        </div>
      </>
  );
};

export default DetailPage;