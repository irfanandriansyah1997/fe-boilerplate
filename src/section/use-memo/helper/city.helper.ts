import { verifiedIsNotEmpty } from '@99/helper';
import { matchSorter } from 'match-sorter';

import { NullAble } from '../../../interface/general';
import cities from '../data/indonesia.json';
import { ICity, ICityV2 } from '../interface';

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

/**
 * Get City Items With Selected Item
 * @param {string} cityName - city name
 * @param {NullAble<ICity>} selectedItem - selected item from component
 * @returns {ICity[]}
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.10.28
 */
export const getCityItemsWithSelectedItem = (
  cityName: string,
  selectedItem: NullAble<ICityV2>
): ICityV2[] => {
  let city: ICityV2[] = [];

  if (!verifiedIsNotEmpty(cityName)) {
    city = ALL_CITY;
  } else {
    city = matchSorter(ALL_CITY, cityName, {
      keys: [`name`]
    });
  }

  if (selectedItem) {
    return [
      selectedItem,
      ...city.filter((item) => selectedItem.name !== item.name)
    ];
  }

  return city;
};
