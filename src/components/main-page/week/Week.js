import React, {useEffect, useState} from 'react';
import "./Week.scss"
import axios from "axios";

import Slider from "react-slick"
import Bookcard from "../../pages/bookcard/Bookcard";

const Week = () => {
  const [books,setBooks] = useState([])


   const getBooks = async () => {
     try{
       const url  = await axios.post('https://bookshopmotion.herokuapp.com/product/books/',{})
       const {data} = url
       await setBooks(data.results)
     }
     catch (e){
       console.log(e,"Error")
     }
   }

   useEffect(()=> {
     getBooks()

   },[])

  console.log(books)

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
      <div className="week">
          <Slider {...settings}>
            {
              books.map(el=> {

                return <Bookcard el={el} key={el.id} />

              } )
            }
          </Slider>
      </div>
    </div>
    </div>
  );
};

export default Week;