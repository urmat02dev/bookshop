import React from 'react';
import "./Week.scss"
import axios from "axios";

const Week = () => {
   const url  = axios('https://motionbookshop.herokuapp.com/product/books/').then((data)=>
     console.log(data))
  console.log(url)

  return (
    <div>

    </div>
  );
};

export default Week;