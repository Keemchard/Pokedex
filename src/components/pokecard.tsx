import React from "react";
import { Link } from "react-router-dom";
import "./pokecard.component.css";

const Pokecard = ({ pokemon, loading }: any) => {
  //pokemon is just  the pokeData from Pokomain FC which is an array of pokemon info

  return (
    <>
      {loading ? (
        <h1>Loading...........</h1>
      ) : (
        pokemon.map((specificPokemonData: any) => {
          //destructure specific pokemon data below
          const {
            id: pokemonID,
            name: pokemonName,
            sprites: {
              other: {
                dream_world: { front_default: pokemonImage },
              },
            },
          } = specificPokemonData;

          console.log(pokemonImage);

          return (
            <>
              <Link
                to={`/pokemon/${pokemonName}/${pokemonID} `}
                key={pokemonID}
              >
                <div
                  className="pokecard-container"
                  // onClick={() => {
                  //   pokemonInfo(specificPokemonData);
                  // }}
                >
                  <h3 className="poke-id">{pokemonID}</h3>
                  <div className="poke-img">
                    <img
                      className="pokemon-img"
                      src={pokemonImage}
                      alt={pokemonName}
                    />
                  </div>
                  <div className="poke-name">
                    <h2 className="pokemon-name">{pokemonName}</h2>
                  </div>
                </div>
              </Link>
            </>
          );
        })
      )}
    </>
  );
};

export default Pokecard;
