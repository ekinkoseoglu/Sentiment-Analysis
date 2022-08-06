import React, { useState, useEffect } from 'react';
import '@jotforminc/jotform.css';
// eslint-disable-next-line no-restricted-imports
import '@jotforminc/jotform.css/animation.css';
import './Header.scss';
import { useSelector } from 'react-redux';

const Header = () => {
  const pageName = useSelector(state => state.pageName);

  return (
    <div className='bg-navy-700 '>
      <div className='border-b border-white border-opacity-40'>
        <div className=" flex-row flex p-2 items-center">
          <img
            className="pr-1 pl-2 max-h-10" src="https://www.jotform.com/resources/assets/logo-nb/jotform-logo-transparent-W-400x100.png" alt='logo'
          />
          <div className="dropdown flex items-center pl-2">
          <div className="border-l border-gray-200 border-opacity-20 color-white pl-2 pt-1">
           {/* page name */}
           {pageName.pageName}
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Header;
