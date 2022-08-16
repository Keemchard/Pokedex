export type pokemonModel = {
  name: string;
  url: string;
};

//for pokeCard Model
export type pokeCardModel = {
  pokemon: pokemonsModel;
  loading: boolean;
};

//for pokeMain Model (actually same lang to with pokeCardModel iniba ko pa kase name proprty ng isa)
export type pokeMainModedl = {
  pokemonsData: pokemonsModel;
  loading: boolean;
};

//for pokeInfo Model
export type pokeInfoModel = {
  abilities: abilitiesModel;
  base_experience: number;
  height: number;
  weight: number;
  stats: statsModel;
  types: typesModel;
};

//for pokeApp Model
export type pokeAppModel = {
  name: string;
  id: number;
  sprites: smallSpriteModel;
};

//type pokemonsData below
export type pokemonsModel = {
  id?: number;
  name?: string;
  url?: string;
  sprites: spritesModel;
  abilites: abilitiesModel;
  base_experience?: number;
  height?: number;
  weight?: number;
  stats: statsModel;
  types: typesModel;
  map?: any;
};

//sub types
export type spritesModel = {
  other: {
    dream_world: {
      front_default?: string;
    };
  };
};
export type smallSpriteModel = {
  front_default?: string;
};
export type abilitiesModel = {
  ability: {
    name: string;
  };
};
export type statsModel = {
  base_stat: number;
  stat: {
    name: string;
  };
};
export type typesModel = {
  type: {
    name: string;
  };
};
