import React from 'react';
import productivity_girl from '../assets/header.jpeg';

const Header = () => {

  return (
    <header>
      <img src={productivity_girl} alt='productivity girl' width={250}/>
      <h1>Focus Pocus</h1>
    </header>
  );
}

export default Header;