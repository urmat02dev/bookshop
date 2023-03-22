import React, {useEffect, useState} from 'react';
import "./Search.scss"
import {CiSearch} from "react-icons/ci";
import {useTranslation} from "react-i18next";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {GET_RESULTS, GET_SEARCH} from "../../../redux/Reducer/ActionTypes";

import {useNavigate} from "react-router-dom";

const Search = ({count}) => {
    const {t, i18n} = useTranslation()
  const dispatch = useDispatch()
  const {input} = useSelector(state => state)
  const navigate = useNavigate()



  const getSubmit = (e) => {
    if (e.key === "Enter") {
      if (e.key !== "") {
        dispatch({type: GET_SEARCH, payload: e.target.value})
        getSearch()
        e.target.value = ""
        navigate("/search-result")
      }
    }
  }

  const getSearch = async () => {
    try {
      const url = await axios(`https://bookshopmotion.herokuapp.com/product/books/?search=${input}`)
      const {data} = await url
      dispatch({type:GET_RESULTS,payload:data})
    } catch (e) {
      console.log(e)

    }
  }

  useEffect(() => {
    getSearch()
  },[])
    return (
      <div id='search'>
          <div className="container">
              <div className="search">
                  <div className='search--div'>
                      <input type="text" placeholder={t('search.placeholder')}
                             onKeyPress={(e) => getSubmit(e)}
                      />
                      <CiSearch className='search--div--icon'/>
                  </div>
                  <div className='search--block'></div>

              </div>
          </div>
      </div>
  );
};

export default Search;