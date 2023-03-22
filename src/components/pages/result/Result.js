import React from 'react';
import "./Result.scss"
import Bookcard from "../bookcard/Bookcard";
import {useSelector} from "react-redux";
const Result = ({result}) => {
  const {results} = useSelector(s => s)
  console.log(results)
  return (
    <div id={"result"}>
      <div className="container">
        <div className="result">
          {
            results.map(el => (
              <Bookcard el={el}/>
            ))
          }
        </div>
      </div>

    </div>
  );
};

export default Result;