import React from "react";

const VideoDetails = ({ video }) => {
  if (!video) return <h2 style={{ color: "white" }}>Video not found</h2>;

  return (
    <div style={{ backgroundColor: "#000", color: "white", padding: "20px" }}>
      <h1>{video.title}</h1>
      <video
        src={video.url}
        controls
        style={{ width: "100%", borderRadius: "8px" }}
      ></video>
      <p>{video.description}</p>
    </div>
  );
};

export default VideoDetails;