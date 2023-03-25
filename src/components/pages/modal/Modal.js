import React, {useEffect, useState} from 'react';
import "./Modal.scss"
import axios from "axios";
import {useTranslation} from "react-i18next";
import Bookcard from "../bookcard/Bookcard";
import Loader from "../../loader/Loader";

const Modal = ({modal, setModal}) => {
  const [books,setBooks] = useState([])
  const [loader,setLoader] = useState(false)
  const getBooks = async () => {
    try{
      setLoader(true)
      const url  = await axios('https://bookshopmotion.herokuapp.com/product/books/?category=1b6ce0bd-7e8d-4c81-a149-0ae12e543e8c')
      const {data} = url
      await setBooks(data)
      setLoader(false)
    }
    catch (e){

      console.log(e,"Error")
    }
  }
  const {t} =  useTranslation()
  useEffect(()=> {
    getBooks()
  },[])
  return (
    <>
      {
        modal ?
          <>
            <div id={"window"} onClick={() => setModal(!modal)}/>
            <div id={"modal"}>
              <div className="container">
                {
                  loader ?
                    <Loader/>
                    : <div className="modal">
                      {
                        books.map(el => (
                          <Bookcard el={el}/>
                        ))
                      }
                    </div>
                }

              </div>
            </div>
          </>
          :
          <div>
          </div>
      }
    </>
  );
};

export default Modal;