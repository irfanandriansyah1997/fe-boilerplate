/**
 * Pokemon Form Props Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.11.19
 */
export interface IPokemonFormProps {
  initialPokemonName?: string;
  onSubmit(pokemonName: string): void;
  pokemonName: string;
}

/**
 * Pokemon Option Props Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.11.19
 */
export interface IPokemonOptionProps {
  onClick(pokemonName: string): void;
  pokemonName: string;
}
