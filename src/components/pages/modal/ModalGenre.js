import React from 'react';
import "./ModalGenre.scss"

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
import {NavLink} from "react-router-dom";
import {useTranslation} from "react-i18next";

const ModalGenre = ({modal, setModal}) => {
  const {t} =useTranslation()
  return (
    <>
      {
        modal ?
          <>
            <div id={"window"} onClick={() => setModal(!modal)}/>
            <div id={"modal"} style={{
            }}>
              <div className="container">
                <div className="genre--img">
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
                </div>
              </div>
            </div>
          </>

          :
          <div>
          </div>
      }
    </>
  );
};

export default ModalGenre;