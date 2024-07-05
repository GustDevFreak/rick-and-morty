import imgRickMorty from './img/rick-morty.png';
import './App.css';
import { useState } from 'react';

function App() {  
  const [characters, setCharacters] = useState(null);

  const reqApi = async () => {
    const api = await fetch('https://rickandmortyapi.com/api/character');
    const characterApi = await api.json();
    setCharacters(characterApi.results);
  }

  console.log(characters);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className='title'>Rick & Morty</h1>
        <img src={imgRickMorty} className='img-home' alt='Rick & Morty' ></img>
        <button onClick={reqApi} className='btn-search'>Search Characters</button>
      </header>
    </div>
  );
}

export default App;