import React, {useState} from 'react';
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
import ModalGenre from "../../pages/modal/ModalGenre";


const Genre = () => {
  const [modal , setModal] = useState(false)
  let settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
          infinite: false,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          dots: true
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: true
        }
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          dots: false
        }
      },
      {
        breakpoint: 376,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          dots: false
        }
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: false
        }
      },
    ]
  };
  const {t} =useTranslation()
  return (
    <div id={"genre"}>
      <div className="container">
        <div className="genre">
          <div className="genre--title">
            <h1>{t("genre.h1")}</h1>
            <button onClick={() => setModal(!modal)}>{t("genre.btn")}</button>
          </div>
          <div className="genre--img">
            {
              modal ? <ModalGenre modal={modal} setModal={setModal}/>
                :
                <Slider {...settings}>
                  <div className="genre--img--one">
                    <NavLink to={"/catalog/autographed"}>
                      <img src={genre1} alt=""/>
                      <p>{t("genre.p1")}</p>
                    </NavLink>
                  </div>
                  <div className="genre--img--two">
                    <NavLink to={"/catalog/fantasy"}>
                      <img src={genre2} alt=""/>
                      <p>{t("genre.p2")}</p>
                    </NavLink>
                  </div>
                  <div className="genre--img--three">
                    <NavLink to={"/catalog/childrens-books"}>
                      <img src={genre3} alt=""/>
                      <p>{t("genre.p3")}</p>
                    </NavLink>
                  </div>
                  <div className="genre--img--four">
                    <NavLink to={"/catalog/business-literature"}>
                      <img src={genre4} alt=""/>
                      <p>{t("genre.p4")}</p>
                    </NavLink>
                  </div>
                  <div className="genre--img--five">
                    <NavLink to={"/catalog/hobbies-leiture"}>
                      <img src={genre5} alt=""/>
                      <p>{t("genre.p5")}</p>
                    </NavLink>
                  </div>
                  <div className="genre--img--six">
                    <NavLink to={"/catalog/religion"}>
                      <img src={genre6} alt=""/>
                      <p>{t("genre.p6")}</p>
                    </NavLink>
                  </div>
                  <div className="genre--img--seven">
                    <NavLink to={"/catalog/publicism"}>
                      <img src={genre7} alt=""/>
                      <p>{t("genre.p7")}</p>
                    </NavLink>
                  </div>
                  <div className="genre--img--eight">
                    <NavLink to={"/catalog/pedagogy"}>
                      <img src={genre8} alt=""/>
                      <p>{t("genre.p8")}</p>
                    </NavLink>
                  </div>
                  <div className="genre--img--nine">
                    <NavLink to={"/catalog/self-development"}>
                      <img src={genre9} alt=""/>
                      <p>{t("genre.p9")}</p>
                    </NavLink>
                  </div>
                  <div className="genre--img--ten">
                    <NavLink to={"/catalog/sports"}>
                      <img src={genre10} alt=""/>
                      <p>{t("genre.p10")}</p>
                    </NavLink>
                  </div>
                </Slider>
            }

          </div>
        </div>
      </div>
    </div>
  );
};

export default Genre;