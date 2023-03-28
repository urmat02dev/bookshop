import React, {useEffect, useState} from 'react';
import Bookcard from "../../bookcard/Bookcard";
import Slider from "react-slick";
import axios from "axios";
import "./Autographed.scss"
import {useTranslation} from "react-i18next";
import Loader from "../../../loader/Loader";

const Autographed = () => {
  const [books,setBooks] = useState([])
  const [loader,setLoader] = useState(false)
  window.scrollTo({
    top:0
  })
  const getBooks = async () => {
    try{
      setLoader(true)
      const url  = await axios('https://bookshopmotion.herokuapp.com/product/books/?category=889ee63c-94f0-4c52-b93a-dd742b990ba4')
      const {data} = url
      await setBooks(data)
      setLoader(false)
    }catch (e){
      console.log(e,"Error")
    }
  }


  useEffect(()=> {
    getBooks()
  },[])
  let settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1201,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 3,
          infinite: false,
          dots: true
        }
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
          infinite: false,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          dots: true
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: true
        }
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          dots: false
        }
      },
      {
        breakpoint: 376,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: false
        }
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: false
        }
      },
    ]
  };
  const {t} =useTranslation()
  return (
    <div id={"catalog"}>
      <div className="container">
        <h1>{t("genre.p1")}</h1>
      <div className={"catalog"}>
        {
          loader ? <div><Loader/></div> :
            <Slider {...settings}>
              {
                books.map(el=> {
                  return  <Bookcard el={el}
                          key={el.id}
                          />
                } )
              }
            </Slider>

        }
        </div>
      </div>
    </div>
  );
};

export default Autographed;