import React, { useRef, useState } from "react";
import "./VideoCard.css";
import VideoFooter from "./VideoFooter";
import VideoHeader from "./VideoHeader";

function VideoCard({ channel, avatarSrc, song, likes, url, shares }) {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef(null);

  const onVideoPress = () => {
    if (isVideoPlaying) {
      videoRef.current.pause();
      setIsVideoPlaying(false);
    } else {
      videoRef.current.play();
      setIsVideoPlaying(true);
    }
  };

  return (
    <div className="videoCard">
      <VideoHeader />
      <video
        className="video__player"
        src={url}
        alt="IG reels"
        loop={true}
        onClick={onVideoPress}
        ref={videoRef}
      />
      <VideoFooter
        channel={channel}
        likes={likes}
        shares={shares}
        song={song}
        avatarSrc={avatarSrc}
      />
    </div>
  );
}

export default VideoCard;
