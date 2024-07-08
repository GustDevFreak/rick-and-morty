import imgRickMorty from './img/rick-morty.png';
import './App.css';
import { useState } from 'react';
import Characters from './components/characters';

function App() {  
  const [characters, setCharacters] = useState(null);

  const reqApi = async () => {
    const api = await fetch('https://rickandmortyapi.com/api/character');
    const characterApi = await api.json();
    setCharacters(characterApi.results);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className='title'>Rick & Morty</h1>
        {/* 1. Si hay characters renderiza el componente Characters, caso contrario el JSX */}
        {characters ? (
          <Characters characters = {characters}/>
        ) : (
          // 2. Encapsulando este JSX en un fragment para que pueda ser renderizado
          <>
          <img src={imgRickMorty} className='img-home' alt='Rick & Morty' ></img>
          <button onClick={reqApi} className='btn-search'>Search Characters</button>
          </>
        )}
        
      </header>
    </div>
  );
}

export default App;