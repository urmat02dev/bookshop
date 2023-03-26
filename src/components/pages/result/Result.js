import React, {useEffect, useState} from 'react';
import "./Result.scss"
import Bookcard from "../bookcard/Bookcard";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import {useTranslation} from "react-i18next";
import Loader from "../../loader/Loader";
const Result = ({}) => {
  const dispatch = useDispatch()
  const {t} = useTranslation()
  const {input} = useSelector(state => state)
  const [results, setResults] = useState(false)
  const [loader,setLoader] = useState(false)
  const getSearch = async () => {
    try {
      setLoader(true)
      const url = await axios(`https://bookshopmotion.herokuapp.com/product/books/?search=${input}`)
      const {data} = await url
      setResults(data)
      setLoader(false)
    } catch (e) {
      console.log(e)

    }
  }
  useEffect(() => {
    getSearch()
  },[input])
  console.log(input)
  console.log(results)
  return (
    <>
      {
        loader ? <Loader/>
          : <div id={"result"}>
            <div className="container">
              <div className="result">
                {
                  results.length ?
                    results.map(el => (
                      <Bookcard el={el}/>
                    ))
                    : <div className={"not-result"}>

                      <h1>{t("search.not-books")}</h1>

                    </div>
                }
              </div>
            </div>

          </div>
      }
    </>
  );
};

export default Result;