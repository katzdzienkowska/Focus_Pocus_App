import React from 'react';
import '../index.css';

const Music = () => {

  return (
    <section>
    <h1 className='module-header'>Background Lo-Fi</h1>

      <iframe
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
}

export default Music;