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
        alt='productive girl with laptop and coffee' 
        width={300}
        height={179} />
        
        <div id='header-t'>
          <p id='app-name'>Focus Pocus</p>
          <p>...and get things done!</p>
        </div>
        
        <ThemeButton className='mode-toggle' />
      </header>
    
    </div>
  );
}

export default Header;