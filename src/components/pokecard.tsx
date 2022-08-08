import React from "react";
import "./pokecard.component.css";

const Pokecard = ({ pokemon, loading, pokemonInfo }: any) => {
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
            <div
              className="pokecard-container"
              key={pokemonParams.id}
              onClick={() => {
                pokemonInfo(pokemonParams);
              }}
            >
              <h3 className="poke-id">{pokemonParams.id}</h3>
              <div className="poke-img">
                <img
                  loading="lazy"
                  className="pokemon-img"
                  src={pokemonParams.sprites.other.dream_world.front_default}
                  alt={pokemonParams.name}
                />
              </div>
              <div className="poke-name">
                <h2 className="pokemon-name">{pokemonParams.name}</h2>
              </div>
            </div>
          );
        })
      )}
    </>
  );
};

export default Pokecard;
