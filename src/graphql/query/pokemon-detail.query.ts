export const POKEMON_DETAIL_QUERY = String.raw`
  query PokemonInfo($name: String) {
    pokemon(name: $name) {
      id
      number
      name
      image
      attacks {
        special {
          name
          type
          damage
        }
      }
    }
  }
`;
