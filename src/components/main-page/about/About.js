import React from 'react';
import "./About.scss"
import about from "../../../assets/img/фищге.png"
const About = () => {
  return (
    <div id={"about"}>
      <div className="container">
        <div className="about">
          <div className="about--img">
            <img src={about} alt=""/>
          </div>
          <div className="about--desc">
            <h1>Best Book Shop In Your Home Town</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;