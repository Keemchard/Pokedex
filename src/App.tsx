import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Pokemain from "./components/Pokemain";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pokecard from "./components/pokecard";
import Pokeinfo from "./components/Pokeinfo";

function App() {
  return (
    <>
      <Pokemain />
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Pokemain />} />
          <Route path="/pokemon/:pokeinfo" element={<Pokeinfo />} />
        </Routes>
      </BrowserRouter> */}
    </>
  );
}

export default App;
