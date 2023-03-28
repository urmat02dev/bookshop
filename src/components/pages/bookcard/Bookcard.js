import React, {useEffect, useState} from 'react';
import "./Bookcard.scss"
import {NavLink} from "react-router-dom";
import axios from "axios";

const BookCard = ({el}) => {
  const [author, setAuthor] = useState({})
  const [loader,setLoader] = useState(false)
  const getAuthor = async () => {
    try{
      setLoader(true)
      const url  = await axios (`https://bookshopmotion.herokuapp.com/product/author/${el.author}`)
      const {data} = url
      await setAuthor(data)
      setLoader(false)
    }catch (e){
      console.log(e,"Error")
    }
  }
  function getLang () {
    const lang = localStorage.getItem("i18nextLng")
    if (lang === "en"){
      return <p>{el.name_en}</p>
    }
    if (lang === "ru"){
      return <p>{el.name}</p>
    }
    if (lang === "kg"){
      return <p>{el.name_ky}</p>
    }
  }

  useEffect(()=>{
    getLang()
    getAuthor()

  },[])

  return (
    <>
           <div  className={"bookcard"}>
            <NavLink to={`/detail-page/${el.id}`}>
              <img src={el.image}  alt="img"/>
            </NavLink>
            <div>
              {
                getLang(el)
              }
              <h4>{author.first_name} </h4>
              <h4>{author.last_name}</h4>
              <h3>{el.price} c.</h3>
              <h5>{el.new_price} c.</h5>
            </div>
          </div>
    </>
  );
};

export default BookCard;