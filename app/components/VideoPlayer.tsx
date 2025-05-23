'use client';

import React from 'react';

interface VideoPlayerProps {
  src: string;
  poster?: string;
  className?: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src, poster, className }) => {
  return (
    <div className='flex justify-center mt-4 mb-4'>
      <video
        className={className}
        src={src}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
      />
    </div>
     );
};

export default VideoPlayer;
