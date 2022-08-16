import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Pokemain from "./components/Pokemain";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Pokeinfo from "./components/Pokeinfo";
//types
import { pokemonsModel, pokemonModel, pokeAppModel } from "./types/pokeTypes";

import axios from "axios";

function App() {
  const [loading, setLoading] = useState<boolean>(true); //loading
  const [apiUrl, setApiUrl] = useState<string>(
    "https://pokeapi.co/api/v2/pokemon?limit=20"
  ); //API URL
  //button hooks
  const [nextUrl, setNextUrl] = useState<string>("");
  const [previousUrl, setPreviousUrl] = useState<string>("");

  const [pokemonsData, setPokemonsData] = useState<any>([]); //will hold an array of pokemon data
  // console.log(pokemonsData);
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

  const getPokemon = async (response: pokemonsModel) => {
    // console.log(response);
    response.map(async (item: pokemonModel) => {
      const result = await axios.get(item.url);
      const { data: newData } = result;

      setPokemonsData((data: any) => {
        data = [...data, newData];
        return data;
      });
      // console.log(newData);
    });
  };

  // console.log(pokemonsData);

  useEffect(() => {
    pokemon();
  }, [apiUrl]);
  return (
    <>
      <BrowserRouter>
        <div className="app-container">
          <div className="side-bar">
            <div className="sidebar-header">
              <Link className="logo" to={`/ `}>
                <h1>Pokemon</h1>
              </Link>
            </div>
            <div className="sidebar-con">
              <div className="sidebar-pokemon-list">
                <ul>
                  {pokemonsData.map((items: pokeAppModel) => {
                    return (
                      <Link
                        className="sidebar-link"
                        to={`/pokemon/${items.name}/${items.id}`}
                      >
                        <li key={items.id}>
                          <img src={items.sprites.front_default} alt="" />
                          {items.name.toUpperCase()}
                        </li>
                      </Link>
                    );
                  })}
                </ul>
                <div className="sidebar-btn">
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
            <div className="cred">&copy; keemchard 2022</div>
          </div>
          <div className="main-content">
            <div className="search">
              <input type="text" placeholder="Enter Pokemon name" />
              <button>Search</button>
            </div>
            <Routes>
              <Route
                path="/"
                element={
                  <Pokemain pokemonsData={pokemonsData} loading={loading} />
                }
              />
              <Route
                path="/pokemon/:pokemonName/:pokemonID"
                element={<Pokeinfo />}
              />
            </Routes>
            <div className="extra">
              <div className="content-btn">
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
              <div className="content-cred">&copy; keemchard 2022</div>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
