import React, {useEffect, useState} from 'react';
import "./Search.scss"
import {CiSearch} from "react-icons/ci";
import {useTranslation} from "react-i18next";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {GET_RESULTS, GET_SEARCH} from "../../../redux/Reducer/ActionTypes";

import {useNavigate} from "react-router-dom";

const Search = ({count,setCount}) => {
    const {t, i18n} = useTranslation()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const getSubmit = (e) => {
    if (e.key === "Enter") {
      if (e.target.value !== "") {
        dispatch({type: GET_SEARCH, payload: e.target.value})
        setCount(!count)
        e.target.value = ""
        navigate("/search-result")
      }
    }
  }

    return (
      <>
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

      </>

  );
};

export default Search;