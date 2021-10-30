import { verifiedIsNotEmpty } from '@99/helper';
import { matchSorter } from 'match-sorter';

import cities from '../data/indonesia.json';
import { ICity } from '../interface';

const ALL_CITY = cities.map(
  ({ country, lat, lng, name }, index): ICity => ({
    country,
    id: `${index}-${name}`,
    lat,
    lng,
    name
  })
);

/**
 * Get City Items
 * @param {string} cityName - city name
 * @returns {ICity[]}
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.10.28
 */
export const getCityItems = (cityName: string): ICity[] => {
  if (!verifiedIsNotEmpty(cityName)) {
    return ALL_CITY;
  }

  return matchSorter(ALL_CITY, cityName, {
    keys: [`name`]
  });
};
