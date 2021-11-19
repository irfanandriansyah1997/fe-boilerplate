/* eslint-disable jsx-a11y/label-has-associated-control */
import {
  ChangeEventHandler,
  FC,
  FormEventHandler,
  useEffect,
  useState
} from 'react';

import styles from './style/style.module.scss';
import { IPokemonFormProps, IPokemonOptionProps } from './interface';

/**
 * Pokemon Option Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.11.19
 */
const PokemonOption: FC<IPokemonOptionProps> = ({ onClick, pokemonName }) => (
  <button type="button" onClick={() => onClick(pokemonName)}>
    {pokemonName}
  </button>
);

/**
 * Pokemon Form Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.11.19
 */
const PokemonForm: FC<IPokemonFormProps> = ({
  onSubmit,
  pokemonName: externalPokemonName,
  initialPokemonName = externalPokemonName || ``
}) => {
  const [pokemonName, setPokemonName] = useState(initialPokemonName);

  useEffect(() => {
    if (typeof externalPokemonName === `string`) {
      setPokemonName(externalPokemonName);
    }
  }, [externalPokemonName]);

  /**
   * On Handle Change
   * @description event handle change input
   * @returns {void}
   */
  const onHandleChange: ChangeEventHandler<HTMLInputElement> = ({
    target: { value }
  }): void => {
    setPokemonName(value);
  };

  /**
   * On Handle Form Submit
   * @description event handle when user do submit form, this method will be invoked
   * @returns {void}
   */
  const onHandleSubmit: FormEventHandler<HTMLFormElement> = (e): void => {
    e.preventDefault();
    onSubmit(pokemonName);
  };

  /**
   * On Select Item
   * @param newPokemonName - new pokemon name
   * @returns {void}
   */
  const onSelectItem = (newPokemonName: string): void => {
    setPokemonName(newPokemonName);
    onSubmit(newPokemonName);
  };

  return (
    <form onSubmit={onHandleSubmit} className={styles[`pokemon-form`]}>
      <label htmlFor="pokemonName-input">Pokemon Name</label>
      <small>
        Try{` `}
        <PokemonOption onClick={onSelectItem} pokemonName="pikachu" />
        {`, `}
        <PokemonOption onClick={onSelectItem} pokemonName="charizard" />
        {`, or `}
        <PokemonOption onClick={onSelectItem} pokemonName="mew" />
      </small>
      <div>
        <input
          className="pokemonName-input"
          id="pokemonName-input"
          autoComplete="off"
          name="pokemonName"
          placeholder="Pokemon Name..."
          value={pokemonName}
          onChange={onHandleChange}
        />
        <button type="submit" disabled={!pokemonName.length}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default PokemonForm;
