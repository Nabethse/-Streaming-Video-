import React from "react";

const VideoCard = ({ video, onClick }) => {
  return (
    <div
      style={{
        width: "200px",
        margin: "10px",
        cursor: "pointer",
      }}
      onClick={() => onClick(video.id)}
    >
      <img
        src={video.thumbnail}
        alt={video.title}
        style={{ width: "100%", borderRadius: "8px" }}
      />
      <h3 style={{ color: "white" }}>{video.title}</h3>
    </div>
  );
};

export default VideoCard;