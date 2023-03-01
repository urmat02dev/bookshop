import React from 'react';
import Hero from "./hero/Hero";
import About from "./about/About";
import Desc from "./desc/Desc";
import Bookstores from "./bookstores/Bookstores";
import "./MainPage.scss"
const MainPage = () => {
  return (
    <div>
      <Hero/>
      <About/>
      <Bookstores/>
        <Desc/>
    </div>
  );
};

export default MainPage;