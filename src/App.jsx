import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import VideoDetails from "./pages/VideoDetails";

const App = () => {
  const [videos] = useState([
    {
      id: 1,
      title: "Video 1",
      thumbnail: "https://via.placeholder.com/200",
      url: "https://www.w3schools.com/html/mov_bbb.mp4",
      description: "This is the first video.",
    },
    {
      id: 2,
      title: "Video 2",
      thumbnail: "https://via.placeholder.com/200",
      url: "https://www.w3schools.com/html/mov_bbb.mp4",
      description: "This is the second video.",
    },
  ]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <div>
      <Navbar />
      {selectedVideo ? (
        <VideoDetails video={selectedVideo} />
      ) : (
        <Home videos={videos} onVideoClick={(id) => setSelectedVideo(videos.find((v) => v.id === id))} />
      )}
    </div>
  );
};

export default App;