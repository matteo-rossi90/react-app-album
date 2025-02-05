import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

  const photoUrl = 'https://picsum.photos/v2/list'

  const [photos, setPhotos] = useState([])

  //useEffect per effettuare la chiamata dell'API attraverso fetch
  useEffect(() => {
    fetch(photoUrl)
         .then(res => res.json())
         .then(photos => {
          setPhotos(photos.slice(0, 20))
         })
  
    return () => {
      
    }
  }, [])
  

  return (
    <div className="App">
      <header className="App-header">
        <h1>ALBUMS</h1>
        <ul>
          {
            photos.map(photo =>(
              <li key={photo.id}>
                <img src={photo.download_url} title={photo.author} />
              </li>
            ))
          }
        </ul>
      </header>
    </div>
  );
}

export default App;
