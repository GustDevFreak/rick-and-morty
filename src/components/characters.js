export default function Characters(props) {
    // extraccion de datos mediante un array structuring
    const {characters} = props;
  return (
    <div className="characters">
        <h1>Personajes</h1>
        <span className="back-home">Volver a la Home</span>
        <div className="container-characters">
            {/* Recorriendo los datos que vienen de la API */}
            {characters.map((character, index) => ( // Return Implicito
                <div className="character-container" key={index}>
                    <p>{character.name}</p>
                </div>
            ))}
        </div>
    </div>
  )
}
