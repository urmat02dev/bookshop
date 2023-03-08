import React from 'react';
import "./Genre.scss"
import genre1 from "../../../assets/img/genre1.png"
import genre2 from "../../../assets/img/genre2.png"
import genre3 from "../../../assets/img/genre3.png"
import genre4 from "../../../assets/img/genre4.png"
import genre5 from "../../../assets/img/genre5.png"
import genre6 from "../../../assets/img/genre6.jpg"
import genre7 from "../../../assets/img/genre7.png"
import genre8 from "../../../assets/img/genre8.jpeg"
import genre9 from "../../../assets/img/genre9.jpg"
import genre10 from "../../../assets/img/genre10.png"

import Slider from "react-slick";
import {NavLink} from "react-router-dom";
import {useTranslation} from "react-i18next";


const Genre = () => {
  let settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  const {t} =useTranslation()
  return (
    <div id={"genre"}>
      <div className="container">
        <div className="genre">
          <div className="genre--title">
            <h1>{t("genre.h1")}</h1>
            <button>{t("genre.btn")}</button>
          </div>
          <div className="genre--img">
            <Slider {...settings}>

              <div className="genre--img--one">
                <NavLink to={"/catalog"}>
                  <img src={genre1} alt=""/>
                  <p>{t("genre.p1")}</p>
                </NavLink>
              </div>
              <div className="genre--img--two">
                <img src={genre2} alt=""/>
                <p>{t("genre.p2")}</p>
              </div>
              <div className="genre--img--three">
                <img src={genre3} alt=""/>
                <p>{t("genre.p3")}</p>
              </div>
              <div className="genre--img--four">
                <img src={genre4} alt=""/>
                <p>{t("genre.p4")}</p>
              </div>
              <div className="genre--img--five">
                <img src={genre5} alt=""/>
                <p>{t("genre.p5")}</p>
              </div>
              <div className="genre--img--six">
                <img src={genre6} alt=""/>
                <p>{t("genre.p6")}</p>
              </div>
              <div className="genre--img--seven">
                <img src={genre7} alt=""/>
                <p>{t("genre.p7")}</p>
              </div>
              <div className="genre--img--eight">
                <img src={genre8} alt=""/>
                <p>{t("genre.p8")}</p>
              </div>
              <div className="genre--img--nine">
                <img src={genre9} alt=""/>
                <p>{t("genre.p9")}</p>
              </div>
              <div className="genre--img--ten">
                <img src={genre10} alt=""/>
                <p>{t("genre.p10")}</p>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Genre;