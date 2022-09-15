import React, { useContext } from 'react';
import { ThemeContext } from '../components/ThemeContext';
import '../index.css';

const Music = () => {

  const { theme } = useContext(ThemeContext);

  return (
    <section>
      <h1 className={theme ? 'module-header-dark' : 'module-header-light'}>Background Lo-Fi</h1>

      <iframe
        name='lofiMusic'
        className='lofi'
        width="420"
        height="240"
        src='https://www.youtube.com/embed/jfKfPfyJRdk'
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </section>
  );
};

export default Music;