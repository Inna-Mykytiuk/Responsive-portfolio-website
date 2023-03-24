import React, { useState } from 'react';
import audio from '../assets/music/audio.mp3';

export const MusicButton = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleAudio = () => {
    const audio = document.getElementById('audio');
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleScroll = () => {
    const button = document.getElementById('music-button');
    const currentPosition = window.pageYOffset + 200;
    button.style.top = currentPosition + 'px';
  };

  window.addEventListener('scroll', handleScroll);

  return (
    <div id="music-button" onClick={toggleAudio}>
      {isPlaying ? 'Stop Music' : 'Play Music'}
      <audio id="audio">
        <source src={audio} type="audio/mpeg" />
      </audio>
    </div>
  );
};

// import React, { useState, useEffect } from 'react';
// import audio from '../assets/music/audio.mp3';

// export const MusicButton = () => {
//   const [isPlaying, setIsPlaying] = useState(false);

//   const toggleAudio = () => {
//     const audio = document.getElementById('audio');
//     if (isPlaying) {
//       audio.pause();
//     } else {
//       audio.play();
//     }
//     setIsPlaying(!isPlaying);
//   };

//   const handleScroll = () => {
//     const button = document.getElementById('music-button');
//     const currentPosition = window.pageYOffset;
//     button.style.top = currentPosition + 'px';
//   };

//   useEffect(() => {
//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <div id="music-button" onClick={toggleAudio}>
//       {isPlaying ? 'Stop Music' : 'Play Music'}
//       <audio id="audio">
//         <source src={audio} type="audio/mpeg" />
//       </audio>
//     </div>
//   );
// };
