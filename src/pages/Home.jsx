import React from "react";
import VideoList from "../components/VideoList";

const Home = ({ videos, onVideoClick }) => {
  return (
    <div style={{ backgroundColor: "#000", minHeight: "100vh", padding: "20px" }}>
      <VideoList videos={videos} onVideoClick={onVideoClick} />
    </div>
  );
};

export default Home;