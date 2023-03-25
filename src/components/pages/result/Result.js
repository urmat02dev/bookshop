import React, {useEffect, useState} from 'react';
import "./Result.scss"
import Bookcard from "../bookcard/Bookcard";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import {GET_RESULTS} from "../../../redux/Reducer/ActionTypes";
import {useTranslation} from "react-i18next";
const Result = ({}) => {
  const dispatch = useDispatch()
  const {t} = useTranslation()
  const {input} = useSelector(state => state)
  const [results, setResults] = useState(false)
  const getSearch = async () => {
    try {
      const url = await axios(`https://bookshopmotion.herokuapp.com/product/books/?search=${input}`)
      const {data} = await url
      setResults(data)
    } catch (e) {
      console.log(e)

    }
  }
  useEffect(() => {
    getSearch()
  },[input])
  console.log(input)
  return (
    <div id={"result"}>
      <div className="container">
        <div className="result">
          {
            results ?
            results.map(el => (
              <Bookcard el={el}/>
            ))
              : <div>
              Not Searching
              </div>
          }
        </div>
      </div>

    </div>
  );
};

export default Result;