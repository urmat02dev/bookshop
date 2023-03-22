import React, {useEffect, useState} from 'react';
import "./Week.scss"
import axios from "axios";

import Slider from "react-slick"
import Bookcard from "../../pages/bookcard/Bookcard";
import {GET_LOADER} from "../../../redux/Reducer/ActionTypes";
import {useDispatch} from "react-redux";
import Loader from "../../loader/Loader";

const Week = () => {
  const [books,setBooks] = useState([])
  const lang = localStorage.getItem("i18nextLng")
  const [loader,setLoader] = useState(false)
   const getBooks = async () => {
     try{
       setLoader(true)
       const url  = await axios('https://bookshopmotion.herokuapp.com/product/books/?category=1b6ce0bd-7e8d-4c81-a149-0ae12e543e8c')
       const {data} = url
       await setBooks(data)

     }catch (e){

       setLoader(false)
     }
     catch (e){

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

    <div id={"week"}>
    <div className="container">
      <div className={"week--title"}>
        <h1>Bestsellers Of The Week</h1>
        <button>See all</button>
      </div>
      {
        loader ? <Loader/> :
          <div className="week">
            <Slider {...settings}>
              {
                books.map(el=> {
                  return <Bookcard el={el} key={el.id} />
                } )
              }
            </Slider>
          </div>
      }
    </div>
    </div>
  );
};

export default Week;