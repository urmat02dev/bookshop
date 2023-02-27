import React from 'react';
import "./Layout.scss"
import Header from "../header/Header";
import Footer from "../footer/Footer";

const Layout = ({children}) => {
  return (
    <div>
      <Header/>
      <div>{children}</div>
      <Footer/>
    </div>
  );
};

export default Layout;