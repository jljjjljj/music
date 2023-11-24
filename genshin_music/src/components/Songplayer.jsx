import React, { useState, useRef } from "react";

const AudioPlayer = ({ songUrl }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "10px",
        marginBottom: "10px",
      }}
    >
      <audio
        ref={audioRef}
        controls={true}
        autoPlay={true}
        src={songUrl}
        style={{ width: "80%" }}
      >
        Your browser does not support the audio tag.
      </audio>
    </div>
  );
};

export default AudioPlayer;
