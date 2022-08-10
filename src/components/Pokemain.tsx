import React, { useEffect, useState } from "react";
import axios from "axios";
import "./pokemain.component.css";
import Pokecard from "./pokecard";

const Pokemain = ({ pokemonsData, loading }: any) => {
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
