import { useEffect, useState } from "react";
import { pokeInfoModel } from "../../types/pokeTypes";

const url = "https://pokeapi.co/api/v2/pokemon/";

type Response = {
  pokemonData: pokeInfoModel | null;
  loading: boolean;
  error: string;
};

const usePokemonSearch: (keyword: string) => Response = (keyword: string) => {
  const [pokemonData, setPokemonData] = useState<pokeInfoModel | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  //   if (!keyword) {
  //     return {
  //       pokemonData: null,
  //       loading: false,
  //       error: "",
  //     };
  //   }

  const searchPokemon = async () => {
    setPokemonData(null);
    setLoading(true);
    try {
      const response = await fetch(`${url}${keyword}`);
      console.log({ response, url });
      if (!response.ok) {
        throw new Error("Pokemon not found");
      }
      const data: pokeInfoModel = await response.json();
      setPokemonData(data);
    } catch (err: any) {
      setError(err.message);
      setPokemonData(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!keyword) {
      return;
    }
    searchPokemon();
  }, [keyword]);

  console.log({ pokemonData });
  return { pokemonData, loading, error };
};

export default usePokemonSearch;
