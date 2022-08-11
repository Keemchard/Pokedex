import React, { useEffect, useState } from "react";
import axios from "axios";
import "./pokemain.component.css";
import Pokecard from "./pokecard";
import { pokeMainModedl } from "../types/pokeTypes";

const Pokemain = ({ pokemonsData, loading }: pokeMainModedl) => {
  return (
    <>
      <div className="main-container">
        <div className="card-main">
          <div className="card-con">
            <Pokecard pokemon={pokemonsData} loading={loading} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Pokemain;
