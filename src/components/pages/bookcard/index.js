import React from 'react';
import "./Bookcard.scss"
import {NavLink, useParams} from "react-router-dom";

const BookCard = ({el}) => {

  let settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
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

      <div  className={"bookcard"}>
        <NavLink to={`/detail-page/${el.id}`}>
        <img src={el.image} width={"100px"} alt="img"/>
        </NavLink>
        <p>{el.name}</p>

      </div>

  );
};

export default BookCard;