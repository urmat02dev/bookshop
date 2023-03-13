import React, {useEffect, useState} from 'react';
import "./DetailPage.scss"
import {useParams} from "react-router-dom";
import Bookcard from "../bookcard";
import axios from "axios";
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
  const {image,name, name_ky, name_en, published_day,category,publisher,desc} = detail
  return (
    <>
      <div id={"detail-page"}>
        <div className="container">
          <div className="detail-page">
            <div className="detail-page--img">
              <img src={image} alt=""/>
            </div>
            <div className="detail-page--desc1">
              <h1>{name}</h1>
              <p>{author.first_name + author.last_name}</p>
              <h2>Originally published</h2>
              <p>{published_day}</p>
              <h2>Categories</h2>
              <p>{category ? category : "NO"}</p>
            </div>
            <div className="detail-page--desc2">
              <h2>Publisher</h2>
              <p>{publisher ? publisher : "NO"}</p>
              <p>{desc ? desc.slice(0,200) : 'No'}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailPage;