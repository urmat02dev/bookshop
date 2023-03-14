import React, {useEffect, useState} from 'react';
import "./Bookcard.scss"
import {NavLink, useParams} from "react-router-dom";
import axios from "axios";

const BookCard = ({el,books}) => {
  const [author, setAuthor] = useState({})
  const getAuthors = async () => {
    try{
      const url  = await axios(`https://bookshopmotion.herokuapp.com/product/author/`)
      const {data} = url
      await setAuthor(data.results)
    }catch (e){
      console.log(e,"Error")
    }
  }
  useEffect(() => {

    getAuthors()
  },[])
  console.log(author)
  return (

      <div  className={"bookcard"}>
        <NavLink to={`/detail-page/${el.id}`}>
        <img src={el.image} width={"100px"} alt="img"/>
        </NavLink>
        <h6>{el.name}</h6>

        <p>{author.firts_name}</p>
        <h3>{el.price}</h3>
        <h3>{el.new_price}</h3>

      </div>

  );
};

export default BookCard;