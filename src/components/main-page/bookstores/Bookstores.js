import React from 'react';
import "./Bookstores.scss"
import shop from "../../../assets/img/shop.png"
import shop2 from "../../../assets/img/shop2.png"
import shop3 from "../../../assets/img/shop3.png"
import shop4 from "../../../assets/img/shop4.png"
import shop5 from "../../../assets/img/shop5.png"
import shop6 from "../../../assets/img/shop6.png"
const Bookstores = () => {
  return (
    <div id="stores">
      <div className="container">
        <div className="stores">
          <h1>Bookstores</h1>
          <div className="block">
            <div className="cards">
              <div className="shop">
                <img src={shop} className="shop-img" alt=""/>
                <h3>Dzerjinskogo street 11</h3>
              </div>
              <div className="shop">
                <img src={shop2} className="shop-img" alt=""/>
                <h3>Chuy 19 street</h3>
              </div>
              <div className="shop">
                <img src={shop3} className="shop-img" alt=""/>
                <h3>Abdrahmanova 25</h3>
              </div>
            </div>
            <div className="cards">
              <div className="shop">
                <img src={shop4} className="shop-img" alt=""/>
                <h3>Manasa street 97</h3>
              </div>
              <div className="shop">
                <img src={shop5} className="shop-img" alt=""/>
                <h3>Bokonbaeva 9</h3>
              </div>
              <div className="shop">
                <img src={shop6} className="shop-img" alt=""/>
                <h3>Kievskaya 110</h3>
              </div>
            </div>
          </div>

          <p>Click to view on the map</p>
        </div>
      </div>
    </div>
  );
};

export default Bookstores;