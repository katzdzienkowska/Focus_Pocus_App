import React from 'react';
import productivity_girl from '../assets/header.jpeg';
import '../index.css';

const Header = () => {

  return (
    <header>
      <img src={productivity_girl} alt='productivity girl' width={280}/>
      <div id='header-t'>
        <h1>Focus Pocus</h1>
        <p>enhance your productivity</p>
      </div>
    </header>
  );
}

export default Header;