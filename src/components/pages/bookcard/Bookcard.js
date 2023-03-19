import React, {useEffect, useState} from 'react';
import "./Bookcard.scss"
import {NavLink, useParams} from "react-router-dom";

const BookCard = ({el,books}) => {
  const [author, setAuthor] = useState({})
  const lang = localStorage.getItem("i18nextLng")
  useEffect(()=> {
  },[lang])
  console.log(lang)
  return (

      <div  className={"bookcard"}>
        <NavLink to={`/detail-page/${el.id}`}>
        <img src={el.image} width={"100px"} alt="img"/>
        </NavLink>

        <p>{lang === "en" ? el.author : el.author_ru && lang === "ru" ? el.author_ru : ""}</p>
        <h3>{el.price}</h3>
        <h3>{el.author_ru}</h3>

      </div>

  );
};

export default BookCard;