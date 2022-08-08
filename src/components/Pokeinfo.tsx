import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { couldStartTrivia } from "typescript";

const Pokeinfo = () => {
  const { pokemonName, pokemonID } = useParams();

  return (
    <>
      <h1>{pokemonName}</h1>
      <h1>{pokemonID}</h1>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonID}.svg`}
        alt=""
      />
      {console.log(pokemonName)}
    </>
  );
};

export default Pokeinfo;
