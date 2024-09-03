import { useEffect, useState } from "react";
import "./PokemonList.css";

export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  const [page, setPage] = useState(0);
  const [pagination, setPagination] = useState({
    next: null,
    previous: null,
  });

  const handlePrevPage = () => {
    if (pagination.previous) {
      setPage((prev) => prev - 1);
    }
  };

  const handleNextPage = () => {
    if (pagination.next) {
      setPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    async function loadPokemon() {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon?offset=${page * 20}`
        );
        const data = await response.json();
        setPokemon(data.results);
        setPagination({
          next: data.next,
          previous: data.previous,
        });
      } catch (error) {
        console.log(error);
      }
    }

    loadPokemon();
  }, [page]);

  return (
    <main>
      {pagination.previous && (
        <button type="button" className="button" onClick={handlePrevPage}>
          Previous Page
        </button>
      )}
      {pagination.next && (
        <button type="button" className="button" onClick={handleNextPage}>
          Next Page
        </button>
      )}

      <ul>
        {pokemon.map(({ name }) => (
          <li key={name} className="pokemon">
            {name}
          </li>
        ))}
      </ul>
    </main>
  );
}
