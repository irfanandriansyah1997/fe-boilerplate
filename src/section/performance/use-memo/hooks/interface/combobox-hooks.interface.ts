import { ICity } from '../../interface';

/**
 * Combobox Hooks Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.10.28
 */
export interface IComboboxHooks {
  keyword: string;
  resetSelectedItem(): void;
  selectedItem?: ICity;
  setKeyword(param: string): void;
  setSelectedItem(param: ICity): void;
}
