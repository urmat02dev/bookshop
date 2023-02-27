import React, {useState} from 'react';
import "./Search.scss"
import {BsSearch} from "react-icons/bs";
const Search = ({count}) => {

  return (
      <>
          <div id='search'>
              <div className="container">
                  <div className="search">
                      <input type="text" placeholder='Enter the text'/>
                      <div className='search--icon'>
                          <BsSearch/>
                      </div>
                  </div>
              </div>
          </div>
      </>

  );
};

export default Search;