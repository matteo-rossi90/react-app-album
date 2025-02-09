import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

  const photoUrl = 'https://picsum.photos/v2/list'

  //inizializzare lo state delle foto
  const [photos, setPhotos] = useState([])

  //useEffect per effettuare la chiamata dell'API attraverso fetch
  useEffect(() => {
    fetch(photoUrl)
         .then(res => res.json())
         .then(photos => {
          setPhotos(photos.slice(0, 50))
         })
  
    return () => {
      
    }
  }, [])
  
  //popolare la componente con le immagini usando il metodo map() e le proprietà dell'array dell'API
  return (
    <div className="App">
      <header className="App-header">
        <h1>ALBUMS</h1>
      </header>
      <main>
        <ul className="photos">
          {
            photos.map(photo => (
              <li key={photo.id}>
                <img src={photo.download_url} title={photo.author} alt={photo.id} />
              </li>
            ))
          }
        </ul>
      </main>
    </div>
  );
}

export default App;
