import React from 'react';
import "./Search.scss"
import {CiSearch} from "react-icons/ci";
const Search = ({count}) => {
  return (
      <div id='search'>
          <div className="container">
              <div className="search">
                  <div className='search--div'>
                      <input type="text" placeholder='Enter the text' />
                      <CiSearch className='search--div--icon'/>
                  </div>
                  <div className='search--block'></div>
              </div>
          </div>
      </div>
  );
};

export default Search;