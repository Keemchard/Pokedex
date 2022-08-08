import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./pokeinfo.component.css";

const Pokeinfo = () => {
  const { pokemonName, pokemonID } = useParams();

  return (
    <div className="pokeinfo-main">
      <div className="pokeinfo-con">
        <div className="pokeinfo-card">
          <div className="pokeinfo-front">
            <h2 className="pokeinfo-id">{pokemonID}</h2>
            <div className="pokeinfo-img">
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonID}.svg`}
                alt=""
              />
            </div>
            <div className="pokeinfo-name">
              <h1>{pokemonName}</h1>
            </div>
          </div>
          <div className="pokeinfo-back">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae,
              repudiandae!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pokeinfo;
