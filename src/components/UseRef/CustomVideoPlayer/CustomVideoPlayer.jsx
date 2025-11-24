import React, { useRef, useState } from "react";
import video from "../../../assets/video/23-useRef.mp4";

const CustomVideoPlayer = () => {

  const videoRef = useRef(null);
  let [isPlay, setIsPlay] = useState(false);
  console.log(isPlay)

  const handleVolumeChange = (e) => {
    videoRef.current.volume = e.target.value;
    console.log("звук видео", videoRef.current.volume)
    console.log("значение инпута", e.target.value);
  }

  const handleVideoCurrentTime = (e) => {
    // videoRef.current.currentTime = e.target.value;
    console.log(videoRef.current.duration)
    let time = videoRef.current.duration / 100;
    time = time * e.target.value;
    videoRef.current.currentTime = time;
  }

  const handlePlay = () => { 
    videoRef.current.play();
    setIsPlay(true);
    console.log(videoRef.current.paused)
  }

  const handlePause = () => {
    videoRef.current.pause();
    setIsPlay(false);
    console.log("время остановки", videoRef.current.currentTime)
    console.log(videoRef.current.paused)
  }

  return (
    <div>
      <h2>CustomVideoPlayer</h2>
      <video ref={videoRef} width='800' controls>
        <source 
          src={video}
          type="video/mp4"
          />
      </video>
      {!isPlay ? <button onClick={handlePlay}>Play</button> : <button onClick={handlePause}>Pause</button>}
      {/* <button onClick={handlePlay}>Play</button> */}
      {/* <button onClick={handlePause}>Pause</button> */}
      <input type="range" min="0" max="1" step="0.05" defaultValue="0.5" onChange={handleVolumeChange} />
      <input type="range" min="0" max="100" step="1" defaultValue="0" onChange={handleVideoCurrentTime} />
    </div>
  );
};

export default CustomVideoPlayer;
