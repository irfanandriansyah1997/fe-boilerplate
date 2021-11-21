import { verifiedIsNotEmpty } from '@99/helper';
import {
  createContext,
  FC,
  Suspense,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState
} from 'react';

import AppsError from '../../../components/molecules/error-boundary';
import PokemonCard from '../../../components/molecules/pokemon-card';
import PokemonForm from '../../../components/organisms/pokemon-form';
import PokemonInfo from '../../../components/organisms/pokemon-info';
import { getPokemon } from '../../../graphql';
import { createResource } from '../../../helper';
import { IResourcePayload, NullAble } from '../../../interface/general';
import { IPokemonDetail } from '../../../interface/pokemon';
import styles from './styles/part-1.module.scss';
import { IPokemonCache, IPokemonProviderProps } from './interface';

const PokemonResourceCacheContext = createContext<NullAble<IPokemonCache>>(
  undefined
);

/**
 * Create Pokemon Resource
 * @param {string} pokemonName - pokemon name
 * @returns {IResourcePayload<IPokemonDetail>}
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.11.19
 */
export const createPokemonResource = (
  pokemonName: string
): IResourcePayload<IPokemonDetail> =>
  createResource(getPokemon(pokemonName, false));

/**
 * Pokemon Provider Apps
 * @author Irfan Andriansyah <irfan@99.co>
 * @description provider pokemon cache on these component
 * @since 2021.11.21
 */
const PokemonProvider: FC<IPokemonProviderProps> = ({
  cacheTime = 5000,
  ...props
}) => {
  const cache = useRef<Record<string, IResourcePayload<IPokemonDetail>>>({});
  const expirations = useRef<Record<string, number>>({});

  useEffect(() => {
    const interval = setInterval(() => {
      Object.keys(expirations.current).forEach((name) => {
        const { [name]: time } = expirations.current;

        if (time < Date.now()) {
          delete cache.current[name];
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  /**
   * Get Pokemon Source
   * @author Irfan Andriansyah <irfan@99.co>
   * @description for the data we can use cache object or fetch to graphql endpoint if data not exists on cache
   * @since 2021.11.21
   */
  const getPokemonSource = useCallback(
    (pokemonName: string): IResourcePayload<IPokemonDetail> => {
      const formattedName = pokemonName.toLowerCase();
      let result = cache.current[formattedName];

      if (!verifiedIsNotEmpty(result)) {
        result = createPokemonResource(pokemonName);
        cache.current[formattedName] = result;
      }

      // Add process to add expirations delay
      expirations.current[formattedName] = Date.now() + cacheTime;

      return result;
    },
    [cacheTime]
  );

  return (
    <PokemonResourceCacheContext.Provider value={getPokemonSource} {...props} />
  );
};

/**
 * Use Pokemon Resource Cache Context
 * @descriptions get pokemon resource context value
 * @returns {typeof getPokemonSource}
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.11.21
 */
export const usePokemonResourceCache = (): IPokemonCache => {
  const value = useContext(PokemonResourceCacheContext);

  if (!value)
    throw new Error(
      `\`usePokemonResourceCache\` must be wrap PokemonProvider component`
    );

  return value;
};

/**
 * Part 4 Apps
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.11.17
 */
const CacheResourcePart4: FC = () => {
  const [pokemonName, setPokemonName] = useState<string>(``);
  const [pokemonResource, setPokemonResource] = useState<
    NullAble<IResourcePayload<IPokemonDetail>>
  >(undefined);
  const getPokemon = usePokemonResourceCache();

  useEffect(() => {
    if (!verifiedIsNotEmpty(pokemonName)) {
      setPokemonResource(undefined);
      return;
    }

    setPokemonResource(getPokemon(pokemonName));
  }, [getPokemon, pokemonName]);

  /**
   * Event Handler When Reset Error
   * @returns {void}
   */
  const onResetError = (): void => {
    setPokemonName(``);
  };

  /**
   * Event Handler When User Submit New Pokemon Name
   * @param {string} newPokemonName - pokemon name
   * @returns {void}
   */
  const onSubmitPokemonName = (newPokemonName: string): void => {
    setPokemonName(newPokemonName);
  };

  return (
    <div className={styles[`cache-resource`]}>
      <PokemonForm onSubmit={onSubmitPokemonName} pokemonName={pokemonName} />
      <AppsError onReset={onResetError} resetKeys={[pokemonName]}>
        <Suspense fallback={<PokemonCard.Fallback name={pokemonName} />}>
          {pokemonResource ? (
            <PokemonInfo resource={pokemonResource} />
          ) : (
            `Submit a pokemon`
          )}
        </Suspense>
      </AppsError>
    </div>
  );
};

/**
 * Part 4 Apps Wrap With Pokemon Provider
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.11.21
 */
const CacheResourcePart4WithCache: FC = () => (
  <PokemonProvider>
    <CacheResourcePart4 />
  </PokemonProvider>
);

export default CacheResourcePart4WithCache;
