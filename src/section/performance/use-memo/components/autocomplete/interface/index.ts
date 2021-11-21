import { ReactNode } from 'react';

import { ICity } from '../../../interface';

/**
 * Autocomplete Props Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.10.29
 */
export interface IAutocompleteProps {
  children?: ReactNode;
  items: ICity[];
  keyword: string;
  resetSelectedItem(): void;
  selectedItem?: ICity;
  setKeyword(param: string): void;
  setSelectedItem(param: ICity): void;
}

/**
 * Autocomplete Item Props Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.10.30
 */
export interface IAutocompleteItemProps extends ICity {
  active?: boolean;
  onClick?: (param: ICity) => void;
}
