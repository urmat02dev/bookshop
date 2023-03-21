import React from 'react';
import "./Catalog.scss"
import Autographed from "./Autographed/Autographed";
import BusinessLiterature from "./Business literature/Business literature";
import ChildrenSBooks from "./Children\'s books/Children\'s books";
import Fantasy from "./Fantasy/Fantasy";
import HobbiesAndLeisure from "./Hobbies and leisure/Hobbies and leisure";
import Pedagogy from "./Pedagogy/Pedagogy";
import Publicism from "./Publicism/Publicism";
import Religion from "./Religion/Religion";
import SelfDevelopment from "./Self-development/Self-development";
import Sports from "./Sports/Sports";
import Loader from "../../loader/Loader";
const Catalog = () => {

  return (
    <div>

      <Autographed/>
      <Fantasy/>
      <BusinessLiterature/>
      <ChildrenSBooks/>

      <HobbiesAndLeisure/>
      <Pedagogy/>
      <Publicism/>
      <Religion/>
      <SelfDevelopment/>
      <Sports/>
    </div>
  );
};

export default Catalog;