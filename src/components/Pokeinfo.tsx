import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./pokeinfo.component.css";

const Pokeinfo = () => {
  const { pokemonName, pokemonID } = useParams();

  const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonID}/`;

  const [pokemonData, setPokemonData] = useState<any>([]);
  console.log(pokemonName);

  useEffect(() => {
    axios.get(pokemonUrl).then((response) => {
      const pokeID = response.data.id;
      if (pokeID == pokemonID) {
        setPokemonData(response.data);
      }
    });
  }, []);

  const { abilities, base_experience, height, weight, stats, types }: any =
    pokemonData;

  console.log(pokemonData);
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
              <h1>{pokemonName?.toUpperCase()}</h1>
              <div className="types">
                {types?.map((items: any) => {
                  return <h3 key={Math.random()}>{items.type.name}</h3>;
                })}
              </div>
            </div>
          </div>
          <div className="pokeinfo-back">
            <h3>Abilities:</h3>
            {abilities?.map((item: any) => {
              return <p key={Math.random()}>{item.ability.name}</p>;
            })}
            <h3>Height:</h3>
            <p>{height}</p>
            <h3>Weight:</h3>
            <p>{weight}</p>
            <h3>Base Experience:</h3>
            <p>{base_experience}</p>
            <h3>Stats:</h3>
            {stats?.map((item: any) => {
              return (
                <p
                  key={Math.random()}
                >{`${item.stat.name}: ${item.base_stat}`}</p>
              );
            })}
          </div>
        </div>
      </div>
      <p style={{ marginTop: "20px", color: "gray" }}>
        (hover/click the card to see more)
      </p>
    </div>
  );
};

export default Pokeinfo;
