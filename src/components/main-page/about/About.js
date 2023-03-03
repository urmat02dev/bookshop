import React, { useState} from 'react';
import "./About.scss"
import about from "../../../assets/img/about.png"
import {useTranslation} from "react-i18next";

const About = () => {
  const [viewMore, setViewMore] = useState(false)

  const {t, i18n} = useTranslation()
  return (
    <div id={"about"}>
      <div className="container">
        <div className="about">
          <div className="about--img">
            <img src={about} alt=""/>
            <p>MIDNIGHTS</p>
          </div>
          <div className="about--desc">
            <h1>{t("about.title")}</h1>
            <h4>Lörem ipsum lov nypohorende, pon transpol. Losarade nipede ekobel. Ogisk bel, bevis dumpstra nev. Pabektig trekrod mipong neloligen. Gövis pronade. Du kan vara drabbad. </h4>
            <h4>Lörem ipsum lov nypohorende, pon transpol. Losarade nipede ekobel. Ogisk bel, bevis dumpstra nev. Pabektig trekrod mipong neloligen. Gövis pronade. Du kan vara drabbad. </h4>
            {
              viewMore ?
                  <h3>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci consequuntur et explicabo molestias non quidem sunt vitae. Aliquid asperiores aspernatur at corporis dicta dolorum eligendi minima neque quas vel. Corporis cumque delectus deserunt eligendi enim eos ex exercitationem explicabo fuga fugiat ipsa ipsam magnam minus molestiae natus odio quia, quidem quisquam quo sed veniam veritatis vitae! Animi consectetur cumque, dolores doloribus eos esse eveniet ex expedita, explicabo facilis fugiat hic in itaque, libero magnam minus molestias mollitia natus neque nihil nisi nobis nulla porro quaerat quam qui quidem quisquam quo ratione reiciendis sit tempora tempore totam vel veniam vero voluptatibus.
                  </h3>
                : ""
            }
            <button onClick={() => setViewMore(!viewMore)} style={{
              background: viewMore ? "red" : "#F54C0B"
            }}>{viewMore ? `${t("about.btn-close")}` : `${t("about.btn")}`}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;