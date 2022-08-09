import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Pokemain from "./components/Pokemain";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pokecard from "./components/pokecard";
import Pokeinfo from "./components/Pokeinfo";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      {/* <Pokemain /> */}
      <BrowserRouter>
        <div className="app-container">
          <div className="side-bar">
            <Sidebar />
            {/* <div className="sidebar-header">
              <h1>Pokemon</h1>
            </div> */}
            {/* <div className="sidebar-con">
              <div className="sidebar-pokemon-list">
                <ul>
                  <li>pokemon1</li>
                  <li>pokemon2</li>
                  <li>pokemon3</li>
                </ul>
              </div>
            </div> */}
          </div>
          <div className="main-content">
            <Routes>
              <Route path="/" element={<Pokemain />} />
              <Route
                path="/pokemon/:pokemonName/:pokemonID"
                element={<Pokeinfo />}
              />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
