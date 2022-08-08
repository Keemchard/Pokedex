import React from "react";
import { useParams } from "react-router-dom";
import { couldStartTrivia } from "typescript";

const Pokeinfo = ({ pokeinfo }: any) => {
  return (
    <>
      {!pokeinfo ? (
        ""
      ) : (
        <>
          <div className="pokeinfo-container">
            <img src={pokeinfo.sprites.front_default} alt={pokeinfo.name} />
            <p>{`ID: ${pokeinfo.id}`}</p>
            <h2>{`NAME: ${pokeinfo.name}`}</h2>
          </div>
          {pokeinfo.types.map((param: any) => {
            return <p key={Math.random()}>{`TYPE: ${param.type.name}`}</p>;
          })}
        </>
      )}
    </>
  );
};

export default Pokeinfo;
