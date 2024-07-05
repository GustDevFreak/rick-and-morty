import imgRickMorty from './img/rick-morty.png';
import './App.css';

function App() {

  const reqApi = async () => {
    // realizando la solicitud HTTP
    const api = await fetch('https://rickandmortyapi.com/api/character');
    // convirtiendo el objeto json a objeto javascrit
    const characterApi = await api.json();
    console.log(characterApi);
  }
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