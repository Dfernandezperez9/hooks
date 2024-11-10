import useCustomHook from './hooks/useCustomHook';
import './App.css';

const urlPokemon = 'https://pokeapi.co/api/v2/pokemon/1';
const urlRick = 'https://rickandmortyapi.com/api/character/1';

const App = () => {
  const { data: pokemonData, error: pokemonError } = useCustomHook(urlPokemon);
  const { data: rickData, error: rickError } = useCustomHook(urlRick);

  if (pokemonError || rickError) {
    return <div>Error fetching data</div>;
  }

  if (!pokemonData || !rickData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <h2>Pokemon character</h2>
      <p>{pokemonData.name}</p>
      <img className="logo" src={pokemonData.sprites.front_default} alt={pokemonData.name} />

      <h2>Rick and Morty character</h2>
      <p>{rickData.name}</p>
      <img className="logo" src={rickData.image} alt={rickData.name} />
    </div>
  );
};

export default App;
