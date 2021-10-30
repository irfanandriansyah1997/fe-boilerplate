import { useCallback, useState } from 'react';

import { isSameObject } from '../../../helper';
import { NullAble } from '../../../interface/general';
import { ICity } from '../interface';
import { IComboboxHooks } from './interface';

/**
 * Combobox Hooks Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.10.28
 */
export const useCombobox = (): IComboboxHooks => {
  const [keyword, setterKeyword] = useState(``);
  const [selectedItem, setterSelected] = useState<NullAble<ICity>>();

  /**
   * Set Selected Item
   * @author Irfan Andriansyah <irfan@99.co>
   * @since 2021.10.28
   */
  const setSelectedItem = useCallback(
    (param: ICity): void => {
      if (
        (selectedItem && !isSameObject(param, selectedItem)) ||
        (selectedItem === undefined && param)
      ) {
        setterSelected(param);
      }
    },
    [selectedItem]
  );

  /**
   * Set Keyword
   * @author Irfan Andriansyah <irfan@99.co>
   * @since 2021.10.28
   */
  const setKeyword = useCallback(
    (param: string): void => {
      if (!isSameObject(param, keyword)) {
        setterKeyword(param);
      }
    },
    [keyword]
  );

  /**
   * Reset Selected Item
   * @returns {void}
   * @author Irfan Andriansyah <irfan@99.co>
   * @since 2021.10.28
   */
  const resetSelectedItem = useCallback((): void => {
    setterSelected(undefined);
  }, []);

  return {
    keyword,
    resetSelectedItem,
    selectedItem,
    setKeyword,
    setSelectedItem
  };
};
