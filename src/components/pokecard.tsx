import React from "react";
import { Link } from "react-router-dom";
import "./pokecard.component.css";
//types
import { pokeCardModel, pokemonsModel } from "../types/pokeTypes";

const Pokecard = ({ pokemon, loading }: pokeCardModel) => {
  //pokemon is just  the pokeData from Pokomain FC which is an array of pokemon info

  return (
    <>
      {loading ? (
        <h1>Loading...........</h1>
      ) : (
        pokemon.map((specificPokemonData: pokemonsModel) => {
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

          return (
            <>
              <Link to={`/pokemon/${pokemonName}/${pokemonID} `}>
                <div key={pokemonID} className="pokecard-container">
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
