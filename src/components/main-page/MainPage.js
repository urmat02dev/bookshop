import React from 'react';
import Hero from "./hero/Hero";
import About from "./about/About";
import Bookstores from "./bookstores/Bookstores";
import "./MainPage.scss"
const MainPage = () => {
  return (
    <div>
      <Hero/>
      <About/>
      <Bookstores/>
    </div>
  );
};

export default MainPage;