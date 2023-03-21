import React, {useEffect, useState} from 'react';
import axios from "axios";
import Slider from "react-slick";
import Bookcard from "../../bookcard/Bookcard";
import "./Fantasy.scss"

const Fantasy = () => {
  const [books,setBooks] = useState([])
  const getBooks = async () => {
    try{
      const url  = await axios('https://bookshopmotion.herokuapp.com/product/books/?category=889ee63c-94f0-4c52-b93a-dd742b990ba4')
      const {data} = url
      await setBooks(data)
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
    <div>
      <Slider {...settings}>
        {
          books.map(el=> {

            return <Bookcard el={el} key={el.id}/>

          } )
        }
      </Slider>
    </div>
  );
};

export default Fantasy;