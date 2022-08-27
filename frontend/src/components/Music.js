import React from 'react';

const Music = () => {

  return (
    <div>
      <iframe
            width="560"
            height="340"
            src='https://www.youtube.com/embed/jfKfPfyJRdk'
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
    </div>
  );
}

export default Music;