import React, {useEffect, useState} from 'react';
import "./DetailPage.scss"
import {useParams} from "react-router-dom";
import Bookcard from "../bookcard";
import axios from "axios";
const DetailPage = () => {
  const {id} = useParams()
  const [detail, setDetail] = useState({})
  const getDetail = async () => {
    try{
      const url  = await axios (`https://bookshopmotion.herokuapp.com/product/books/`)
      const {data} = url
      await setDetail(data)
      console.log(url)
    }catch (e){
      console.log(e,"Error")
    }
  }
  useEffect(() => {
    getDetail()
  },[id])
  console.log(detail)
  return (
    <>
      <div id={"detail-page"}>
        <div className="container">
          <div className="detail-page">
              <h1>{detail.volumeInfo.authors[0]}</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailPage;