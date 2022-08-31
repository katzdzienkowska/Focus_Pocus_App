import React from 'react';
import ThemeButton from './ThemeButton';
import productivity_girl from '../assets/header.jpeg';
import '../index.css';

const Header = () => {

  return (
    <div>
      
      <header>
        <img 
        src={productivity_girl} 
        alt='productivity girl' 
        width={300} />
        
        <div id='header-t'>
          <h1>Focus Pocus</h1>
          <p>...and get things done!</p>
        </div>
        
        <ThemeButton className='mode-toggle' />
      </header>
    
    </div>
  );
}

export default Header;