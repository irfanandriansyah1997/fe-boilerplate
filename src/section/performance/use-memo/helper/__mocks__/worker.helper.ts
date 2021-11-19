import { NullAble } from '../../../../../interface/general';
import { ICity, ICityV2 } from '../../interface';
import {
  getCityItems as getCity,
  getCityItemsWithSelectedItem as getCityItemsWithSelected
} from '../city.helper';

/**
 * Get City Items
 * @param {string} cityName - city name
 * @returns {ICity[]}
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.10.28
 */
export const getCityItems = (cityName: string): Promise<ICity[]> =>
  new Promise((resolve) => {
    resolve(getCity(cityName));
  });

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
): Promise<ICityV2[]> =>
  new Promise((resolve) => {
    resolve(getCityItemsWithSelected(cityName, selectedItem));
  });
