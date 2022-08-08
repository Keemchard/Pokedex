import React from "react";
import "./pokecard.component.css";

const Pokecard = ({ pokemon, loading }: any) => {
  console.log(pokemon);
  return (
    <>
      {loading ? (
        <h1>Loading...........</h1>
      ) : (
        pokemon.map((pokemonParams: any) => {
          //nvm this code below
          const properPokemonNaming = `${pokemonParams.name[0].toUpperCase()} ${
            pokemonParams.name
          }`;
          //nvm this code above

          return (
            <div key={pokemonParams.id} className="pokecard-container">
              <h3>{pokemonParams.id}</h3>
              <img
                loading="lazy"
                className="pokemon-img"
                src={pokemonParams.sprites.other.dream_world.front_default}
                alt={pokemonParams.name}
              />
              <h2 className="pokemon-name">{pokemonParams.name}</h2>
            </div>
          );
        })
      )}
    </>
  );
};

export default Pokecard;
