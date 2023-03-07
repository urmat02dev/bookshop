import React, {useEffect, useState} from 'react';
import "./Week.scss"
import axios from "axios";

import Slider from "react-slick"
import Bookcard from "../../pages/bookcard";

const Week = () => {
  const [books,setBooks] = useState([])

   const getBooks = async () => {
     try{
       const url  = await axios ('https://www.googleapis.com/books/v1/volumes?q=fantasy&orderBy=newest&key=AIzaSyCV3qU8CNN7bqn6BJgpEtF2RdN16w_UJsg')
       const {data} = url
       await setBooks(data.items)
     }catch (e){
       console.log(e,"Error")
     }
   }

   useEffect(()=> {
     getBooks()
   },[])


  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };
  return (

    <div id={"week"}>

    <div className="container">
      <div className="week">

        <Slider {...settings}>
          <div>
            {
              books.map(el=> {

                return <Bookcard el={el} />

              })
            }
          </div>
        </Slider>

      </div>
    </div>
    </div>
  );
};

export default Week;