import React from 'react';
import "./Week.scss"
import axios from "axios";
const Week = () => {
  const url = axios("http://books.cloudfoundry.com/data/books")
  console.log(url)
  return (
    <div>

    </div>
  );
};

export default Week;