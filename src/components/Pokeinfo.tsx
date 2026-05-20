import { type } from "@testing-library/user-event/dist/type";
import axios from "axios";
import React, { FC, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
//types
import {
  pokeInfoModel,
  abilitiesModel,
  statsModel,
  typesModel,
} from "../types/pokeTypes";
import "./pokeinfo.component.css";

type Props = {
  searchPokemon?: pokeInfoModel | null;
};

const Pokeinfo: FC<Props> = (props) => {
  const { searchPokemon } = props;

  const { pokemonName, pokemonID } = useParams();
  const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonID}/`;

  const initialPokemonValue = {
    abilities: [{ ability: { name: "" } }],
    base_experience: 0,
    height: 0,
    weight: 0,
    stats: [
      {
        base_stat: 0,
        stat: {
          name: "",
        },
      },
    ],
    types: [{ type: { name: "" } }],
  };

  const [pokemonData, setPokemonData] = useState<pokeInfoModel>(
    searchPokemon ?? initialPokemonValue,
  );
  // console.log(pokemonData);

  useEffect(() => {
    if (searchPokemon && !pokemonID && !pokemonName) {
      setPokemonData(pokemonData);
      return;
    }
    axios.get(pokemonUrl).then((response) => {
      const pokeID = response.data.id;
      if (pokeID == pokemonID) {
        setPokemonData(response.data);
      }
    });
  }, [searchPokemon]);

  const {
    abilities,
    base_experience,
    height,
    weight,
    stats,
    types,
    id,
  }: pokeInfoModel = pokemonData;

  // console.log(pokemonData);
  return (
    <div className="pokeinfo-main">
      <div className="pokeinfo-con">
        <div className="pokeinfo-card">
          <div className="pokeinfo-front">
            <h2 className="pokeinfo-id">{pokemonID}</h2>

            <div className="pokeinfo-img">
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonID ?? id}.svg`}
                alt=""
              />
            </div>
            <div className="pokeinfo-name">
              <h1>{pokemonName?.toUpperCase()}</h1>
              <div className="types">
                {types?.map((items: typesModel) => {
                  return <h3 key={Math.random()}>{items.type.name}</h3>;
                })}
              </div>
            </div>
          </div>
          <div className="pokeinfo-back">
            <h3>Abilities:</h3>
            {abilities?.map((item: abilitiesModel) => {
              return <p key={Math.random()}>{item.ability.name}</p>;
            })}
            <h3>Height:</h3>
            <p>{height}</p>
            <h3>Weight:</h3>
            <p>{weight}</p>
            <h3>Base Experience:</h3>
            <p>{base_experience}</p>
            <h3>Stats:</h3>
            {stats?.map((item: statsModel) => {
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
      <Link to={`/`}>
        <button className="back-btn">Back</button>
      </Link>
    </div>
  );
};

export default Pokeinfo;
