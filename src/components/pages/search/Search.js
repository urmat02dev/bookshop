import React from 'react';
import "./Search.scss"
import {CiSearch} from "react-icons/ci";
const Search = ({count}) => {
  return (
      <>
          {
                <div id='search' style={{
                    top:count ? "-1000px" : "40%"
                }}>
                  <div className="container">
                      <div className="search">
                          <div className='search--div'>
                              <input type="text" placeholder='E n t e r  t h e  t e x t'/>
                              <CiSearch className='search--div--icon'/>
                          </div>
                      </div>
                  </div>
              </div>
          }
      </>

  );
};

export default Search;