import React from "react";
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
          {console.log(pokeinfo.id)}
        </>
      )}
    </>
  );
};

export default Pokeinfo;
