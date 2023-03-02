import React from 'react';
import Hero from "./hero/Hero";
import About from "./about/About";
import Desc from "./desc/Desc";
import Bookstores from "./bookstores/Bookstores";
import "./MainPage.scss"
import Week from "./week/Week";
import Genre from "./genre/Genre";
import Comment from "./comment/Comment";
const MainPage = () => {
  return (
    <div>
      <Hero/>
      <About/>
      <Week/>
      <Desc/>
      <Genre/>
      <Comment/>
      <Bookstores/>

    </div>
  );
};

export default MainPage;