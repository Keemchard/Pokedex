import React, { useEffect, useState } from "react";
import axios from "axios";
//style(s)
import "./pokemain.component.css";
//component(s)
import Pokecard from "./pokecard";
import Pokeinfo from "./Pokeinfo";

const Pokemain = () => {
  const [pokeData, setPokeData] = useState<any>([]);
  //loading
  const [loading, setLoading] = useState(true);
  //API URL
  const [apiUrl, setApiUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=20"
  );
  //data to be pass into the Pokeinfo component
  const [pokeinfo, setPokeinfo] = useState<any>();

  //button hooks
  const [nextUrl, setNextUrl] = useState<any>();
  const [previousUrl, setPreviousUrl] = useState<any>();

  const pokeFun = async () => {
    setLoading(true);
    const response = await axios.get(apiUrl);
    const { data } = response;
    const { results, next, previous } = data;
    // console.log(results);
    // console.log(data);
    // console.log(next);
    // console.log(previous);
    getPokemon(results);
    setNextUrl(next);
    setPreviousUrl(previous);
    setLoading(false);
    // console.log(pokeData);
  };

  const getPokemon = async (response: any) => {
    response.map(async (item: any) => {
      // console.log(items);
      const result = await axios.get(item.url);
      // const datas: any = [...pokeData]; //newly added data
      // datas.push(result.data);
      // setPokeData(datas);
      setPokeData((state: any) => {
        state = [...state, result.data];
        return state;
      });
    });
  };

  useEffect(() => {
    pokeFun();
  }, [apiUrl]);

  return (
    <>
      <div className="main-container">
        <div className="card">
          <div className="card-con">
            <Pokecard
              pokemon={pokeData}
              loading={loading}
              pokemonInfo={(pokemon: any) => {
                setPokeinfo(pokemon);
              }}
            />
          </div>
          <div className="card-btn">
            <button
              onClick={() => {
                setPokeData([]);
                setApiUrl(previousUrl);
              }}
            >
              PREVIOUS
            </button>
            {/* //---------// */}
            <button
              onClick={() => {
                setPokeData([]);
                setApiUrl(nextUrl);
              }}
            >
              NEXT
            </button>
          </div>
        </div>
        <div className="card-info">
          <Pokeinfo pokeinfo={pokeinfo} />
        </div>
      </div>
    </>
  );
};

export default Pokemain;
