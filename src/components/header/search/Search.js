import React from 'react';
import "./Search.scss"
import {CiSearch} from "react-icons/ci";
import {useTranslation} from "react-i18next";
const Search = ({count}) => {
    const {t, i18n} = useTranslation()

    return (
      <div id='search'>
          <div className="container">
              <div className="search">
                  <div className='search--div'>
                      <input type="text" placeholder={t('search.placeholder')} />
                      <CiSearch className='search--div--icon'/>
                  </div>
                  <div className='search--block'></div>
              </div>
          </div>
      </div>
  );
};

export default Search;