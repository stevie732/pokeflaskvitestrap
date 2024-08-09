import { useState, useEffect } from 'react';

const CatchPokemon = () => {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await fetch('/api/pokemon');
        const data = await response.json();
        if (response.ok) {
          setPokemon(data.pokemon);
        } else {
          console.error('Error fetching Pokemon:', data.error);
        }
      } catch (error) {
        console.error('Error fetching Pokemon:', error);
      }
    };

    fetchPokemon();
  }, []);

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Catch Pokemon</h1>
      {pokemon.length > 0 ? (
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {pokemon.map((poke) => (
            <div key={poke.id} className="col">
              <div className="card">
                <img src={poke.image} className="card-img-top" alt={poke.name} />
                <div className="card-body">
                  <h5 className="card-title">{poke.name}</h5>
                  <p className="card-text">{poke.description}</p>
                  <button className="btn btn-primary">Catch</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default CatchPokemon;
