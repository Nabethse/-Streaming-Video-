import React from "react";
import VideoCard from "VideoCard";

const VideoList = ({ videos, onVideoClick }) => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      {videos.map((video) => (
        <VideoCard key={video.id} video={video} onClick={onVideoClick} />
      ))}
    </div>
  );
};

export default VideoList;