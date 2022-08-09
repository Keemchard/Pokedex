import React, { useEffect, useState } from "react";
import axios from "axios";
//style(s)
import "./pokemain.component.css";
//component(s)
import Pokecard from "./pokecard";
import Pokeinfo from "./Pokeinfo";

const Pokemain = () => {
  const [loading, setLoading] = useState(true); //loading
  const [apiUrl, setApiUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=20"
  ); //API URL
  //button hooks
  const [nextUrl, setNextUrl] = useState<any>();
  const [previousUrl, setPreviousUrl] = useState<any>();

  const [pokemonsData, setPokemonsData] = useState<any>([]); //will hold an array of pokemon data

  const pokemon = async () => {
    setLoading(true);
    const response = await axios.get(apiUrl);
    const { data } = response;
    const { results, next, previous } = data;

    getPokemon(results);
    setNextUrl(next);
    setPreviousUrl(previous);
    setLoading(false);
  };

  const getPokemon = async (response: any) => {
    response.map(async (item: any) => {
      const result = await axios.get(item.url);
      const { data: newData } = result;

      setPokemonsData((data: any) => {
        //to pass in new set of datas upon clicking either next or previous
        data = [...data, newData];
        return data;
      });
    });
  };

  useEffect(() => {
    pokemon();
  }, [apiUrl]);

  return (
    <>
      <div className="main-container">
        <div className="card-main">
          <div className="card-con">
            <Pokecard pokemon={pokemonsData} loading={loading} />
          </div>
          <div className="card-btn">
            <button
              onClick={() => {
                setPokemonsData([]);
                setApiUrl(previousUrl);
              }}
            >
              PREVIOUS
            </button>

            <button
              onClick={() => {
                setPokemonsData([]);
                setApiUrl(nextUrl);
              }}
            >
              NEXT
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pokemain;
