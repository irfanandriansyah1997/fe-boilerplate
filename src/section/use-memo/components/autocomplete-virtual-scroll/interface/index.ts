import { LegacyRef, ReactNode, ReactText } from 'react';
import { VirtualItem } from 'react-virtual/types';

import { ICity, ICityV2 } from '../../../interface';

/**
 * Autocomplete V2 Props Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.10.29
 */
export interface IAutocompleteV2Props {
  children?: ReactNode;
  items: ICityV2[];
  keyword: string;
  listRef: LegacyRef<HTMLDivElement>;
  resetSelectedItem(): void;
  setKeyword(param: string): void;
  setSelectedItem(param: ICityV2): void;
  totalItems: number;
  virtualItems: VirtualItem[];
}

/**
 * Autocomplete V2 Item Props Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.10.30
 */
export interface IAutocompleteV2ItemProps extends ICity {
  active?: boolean;
  onClick?: (param: ICityV2) => void;
  style: IAutocompleteV2ItemStyling;
}

/**
 * Autocomplete V2 Item Styling Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.10.30
 */
export interface IAutocompleteV2ItemStyling {
  size: ReactText;
  start: number;
}
