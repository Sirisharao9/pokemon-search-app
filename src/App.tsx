import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import ItemCard from './components/ItemCard';

interface Pokemon {
  name: string;
  url: string;
}

const App: React.FC = () => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [filteredPokemon, setFilteredPokemon] = useState<Pokemon[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');

  // Fetch data from the API
  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=100')
      .then(response => {
        setPokemonList(response.data.results);
        setFilteredPokemon(response.data.results);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  // Filter by search term
  useEffect(() => {
    setFilteredPokemon(
      pokemonList.filter(pokemon =>
        pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, pokemonList]);

  return (
    <div className="container mx-auto p-4 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">Pokemon List</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
        {filteredPokemon.map(pokemon => (
          <ItemCard key={pokemon.name} name={pokemon.name} />
        ))}
      </div>
    </div>
  );
};

export default App;
