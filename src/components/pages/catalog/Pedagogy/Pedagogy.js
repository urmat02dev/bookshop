import React, {useEffect, useState} from 'react';
import axios from "axios";
import Slider from "react-slick";
import Bookcard from "../../bookcard/Bookcard";
import "./Pedagogy.scss"
import Loader from "../../../loader/Loader";
import {useTranslation} from "react-i18next";

const Pedagogy = () => {
  const [books,setBooks] = useState([])
  const [loader,setLoader] = useState(false)
  window.scrollTo({
    top:0
  })
  const {t} =useTranslation()
  const getBooks = async () => {
    try{
      setLoader(true)
      const url  = await axios('https://bookshopmotion.herokuapp.com/product/books/?category=3645b278-407e-4051-ab69-3ea3bb22c22d')
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
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div id={"catalog"}>
      <div className="container">
        <h1>{t("genre.p8")}</h1>
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

export default Pedagogy;