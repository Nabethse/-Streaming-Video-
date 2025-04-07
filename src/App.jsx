import React, { useState } from 'react';
import './App.css'; 

function App() {
  const categories = ['Populares', 'Nuevos Lanzamientos', 'Tendencias'];
  const videos = [
    { id: 1, title: 'Video 1', thumbnail: 'https://via.placeholder.com/150', url: 'https://www.w3schools.com/html/mov_bbb.mp4', type: 'series' },
    { id: 2, title: 'Video 2', thumbnail: 'https://via.placeholder.com/150', url: 'https://www.w3schools.com/html/movie.mp4', type: 'peliculas' },
    { id: 3, title: 'Video 3', thumbnail: 'https://via.placeholder.com/150', url: 'https://www.w3schools.com/html/mov_bbb.mp4', type: 'series' },
    { id: 4, title: 'Video 4', thumbnail: 'https://via.placeholder.com/150', url: 'https://www.w3schools.com/html/movie.mp4', type: 'peliculas' },
  ];

  const [selectedVideo, setSelectedVideo] = useState(null);
  const [currentSection, setCurrentSection] = useState('inicio'); 
  const [myList, setMyList] = useState([]); 

  const handleAddToList = (video) => {
    if (!myList.includes(video)) {
      setMyList([...myList, video]);
    }
  };

  const renderContent = () => {
    if (selectedVideo) {
      return (
        <div className="video-player">
          <button onClick={() => setSelectedVideo(null)}>Volver</button>
          <video controls autoPlay>
            <source src={selectedVideo.url} type="video/mp4" />
            Tu navegador no soporta el elemento de video.
          </video>
        </div>
      );
    }

    if (currentSection === 'series') {
      return (
        <div className="category">
          <h2>Series</h2>
          <div className="video-list">
            {videos
              .filter((video) => video.type === 'series')
              .map((video) => (
                <div
                  key={video.id}
                  className="video-card"
                  onClick={() => setSelectedVideo(video)}
                >
                  <img src={video.thumbnail} alt={video.title} />
                  <p>{video.title}</p>
                  <button onClick={(e) => { e.stopPropagation(); handleAddToList(video); }}>Agregar a Mi Lista</button>
                </div>
              ))}
          </div>
        </div>
      );
    }

    if (currentSection === 'peliculas') {
      return (
        <div className="category">
          <h2>Películas</h2>
          <div className="video-list">
            {videos
              .filter((video) => video.type === 'peliculas')
              .map((video) => (
                <div
                  key={video.id}
                  className="video-card"
                  onClick={() => setSelectedVideo(video)}
                >
                  <img src={video.thumbnail} alt={video.title} />
                  <p>{video.title}</p>
                  <button onClick={(e) => { e.stopPropagation(); handleAddToList(video); }}>Agregar a Mi Lista</button>
                </div>
              ))}
          </div>
        </div>
      );
    }

    if (currentSection === 'mi-lista') {
      return (
        <div className="category">
          <h2>Mi Lista</h2>
          <div className="video-list">
            {myList.map((video) => (
              <div
                key={video.id}
                className="video-card"
                onClick={() => setSelectedVideo(video)}
              >
                <img src={video.thumbnail} alt={video.title} />
                <p>{video.title}</p>
              </div>
            ))}
          </div>
        </div>
      );
    }

    return categories.map((category) => (
      <div key={category} className="category">
        <h2>{category}</h2>
        <div className="video-list">
          {videos.map((video) => (
            <div
              key={video.id}
              className="video-card"
              onClick={() => setSelectedVideo(video)}
            >
              <img src={video.thumbnail} alt={video.title} />
              <p>{video.title}</p>
              <button onClick={(e) => { e.stopPropagation(); handleAddToList(video); }}>Agregar a Mi Lista</button>
            </div>
          ))}
        </div>
      </div>
    ));
  };

  return (
    <div className="app">
      {/* Barra de navegación */}
      <nav className="navbar">
        <h1>Streaming Video</h1>
        <ul>
          <li onClick={() => setCurrentSection('inicio')}>Inicio</li>
          <li onClick={() => setCurrentSection('series')}>Series</li>
          <li onClick={() => setCurrentSection('peliculas')}>Películas</li>
          <li onClick={() => setCurrentSection('mi-lista')}>Mi Lista</li>
        </ul>
      </nav>

      {/* Contenido principal */}
      <div className="content">{renderContent()}</div>
    </div>
  );
}

export default App;