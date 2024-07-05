import imgRickMorty from './img/rick-morty.png';
import './App.css';

function App() {

  const reqApi = () => {
    console.log('clicked');
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
