import React from 'react';
import "./Bookstores.scss"
import {useTranslation} from "react-i18next";
const Bookstores = () => {
  const {t} =useTranslation()
  return (
    <div id="stores">
      <div className="container">
        <div className="stores">
          <h1>{t("bookstores.h1")}</h1>
          <div className="block">
            <div className="cards">
              <div className="shop">
                <div className="map">
                  <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2925.1314458538654!2d74.6324033!3d42.8489576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb65c6c87016f%3A0x79954cdd7efdaa61!2zOSwg0JHQuNGI0LrQtdC6!5e0!3m2!1sru!2skg!4v1677751714848!5m2!1sru!2skg"
                      width="90%" height="100%" allowFullScreen="" loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <h3>{t("bookstores.h3-1")}</h3>
              </div>
              <div className="shop">
                <div className="map">
                  <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2923.878791339383!2d74.6541547147464!3d42.875402410394166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb71a4865c72f%3A0x1cfa4043e54c6f8d!2zMTMg0L_RgNC-0YHQvy4g0KfRg9C5LCDQkdC40YjQutC10Lo!5e0!3m2!1sru!2skg!4v1677669273561!5m2!1sru!2skg"
                      width="90%" height="100%"  allowFullScreen="" loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <h3>{t("bookstores.h3-2")}</h3>
              </div>
              <div className="shop">
                <div className="map">
                  <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2924.4051900739196!2d74.6109991!3d42.8642912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb7cb8bc0b1df%3A0x9b7004c0b8051973!2zMjUg0YPQuy4g0K7RgdGD0L_QsCDQkNCx0LTRgNCw0YXQvNCw0L3QvtCy0LAsINCR0LjRiNC60LXQug!5e0!3m2!1sru!2skg!4v1677751262505!5m2!1sru!2skg"
                      width="90%" height="100%" allowFullScreen="" loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <h3>{t("bookstores.h3-3")}</h3>
              </div>
            </div>
            <div className="cards">
              <div className="shop">
                <div className="map">
                  <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2502.1709074485398!2d71.492302!3d51.1606385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x42458174ce456fe3%3A0xea009db772415529!2z0YPQuy4g0JzQsNC90LDRgSA5Nywg0JDRgdGC0LDQvdCwIDAxMDAwMCwg0JrQsNC30LDRhdGB0YLQsNC9!5e0!3m2!1sru!2skg!4v1677744134550!5m2!1sru!2skg"
                      width="90%" height="100%" allowFullScreen="" loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <h3>{t("bookstores.h3-4")}</h3>
              </div>
              <div className="shop">
                <div className="map">
                  <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2924.3031566574177!2d74.6180335!3d42.8664451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb7b5e7b6588f%3A0x22cf54da7bc48100!2zOSDRg9C7LiDQkdC-0LrQvtC90LHQsNC10LLQsCwg0JHQuNGI0LrQtdC6!5e0!3m2!1sru!2skg!4v1677751375895!5m2!1sru!2skg"
                      width="90%" height="100%" allowFullScreen="" loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <h3>{t("bookstores.h3-5")}</h3>
              </div>
              <div className="shop">
                <div className="map">
                  <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2923.9302132676476!2d74.6002846!3d42.8743171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb7dc090ef1d1%3A0x51ac99ec1d6e4ff8!2zMTEwINGD0LsuINCa0LjQtdCy0YHQutCw0Y8sINCR0LjRiNC60LXQug!5e0!3m2!1sru!2skg!4v1677744270455!5m2!1sru!2skg"
                      width="90%" height="100%" allowFullScreen="" loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <h3>{t("bookstores.h3-6")}</h3>
              </div>
            </div>
          </div>

          <p>{t("bookstores.p")}</p>
        </div>
      </div>
    </div>
  );
};

export default Bookstores;