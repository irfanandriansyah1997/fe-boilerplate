import { objToString, verifiedIsNotEmpty } from '@99/helper';
import {
  ChangeEvent,
  FC,
  LegacyRef,
  memo,
  useCallback,
  useEffect,
  useRef,
  useState
} from 'react';

import { isSameObject } from '../../../../../helper';
import { useDebounce } from '../../../../../hooks/layout.hooks';
import { ICity } from '../../interface';
import styles from './style/style.module.scss';
import { IAutocompleteItemProps, IAutocompleteProps } from './interface';

/**
 * Autocomplete Item Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.10.30
 */
let AutocompleteItem: FC<IAutocompleteItemProps> = ({
  active,
  country,
  id,
  lat,
  lng,
  name,
  onClick
}) => (
  <div
    key={id}
    className={objToString({
      [styles[`autocomplete__content-item`]]: true,
      [styles[`autocomplete__content-item--active`]]: active === true
    })}
    data-testid="autocomplete-item"
    role="button"
    tabIndex={0}
    onKeyPress={undefined}
    onClick={(e): void => {
      e.preventDefault();

      if (onClick)
        onClick({
          country,
          id,
          lat,
          lng,
          name
        });
    }}
  >
    {name}
    <span>
      <i className="material-icons">location_city</i>
      {country} {lat}, {lng}
    </span>
  </div>
);

AutocompleteItem = memo(AutocompleteItem);

/**
 * Autocomplete Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.10.29
 */
const Autocomplete: FC<IAutocompleteProps> = ({
  children,
  items,
  keyword,
  resetSelectedItem,
  selectedItem,
  setKeyword,
  setSelectedItem
}) => {
  const ref = useRef<HTMLInputElement>();
  const [input, setInput] = useState(() => keyword);

  useEffect(() => {
    if (keyword !== input) {
      setKeyword(input);

      if (ref && ref.current) ref.current.value = input;
    }
  }, [input, keyword, setKeyword]);

  useEffect(() => {
    if (selectedItem) {
      if (ref && ref.current) ref.current.value = selectedItem.name;
    }
  }, [selectedItem]);

  const onChangeHandler = useDebounce(
    (e: ChangeEvent<HTMLInputElement>): void => {
      e.persist();

      setInput(e.target.value);
    },
    500
  );

  /**
   * On Click Item
   * @author Irfan Andriansyah <irfan@99.co>
   * @since 2021.10.30
   */
  const onClickItem = useCallback(
    (item: ICity): void => {
      setSelectedItem(item);
    },
    [setSelectedItem]
  );

  return (
    <div data-testid="autocomplete">
      <div
        className={objToString({
          [styles.autocomplete__toggle]: true
        })}
      >
        {children && children}
        <div
          className={objToString({
            [styles[`autocomplete__toggle-input`]]: true,
            [styles[
              `autocomplete__toggle-input--with-item`
            ]]: verifiedIsNotEmpty(selectedItem)
          })}
        >
          <input
            name="keyword"
            type="text"
            aria-label="autocomplete-input"
            placeholder="Search City Name..."
            ref={ref as LegacyRef<HTMLInputElement>}
            onChange={onChangeHandler}
          />
          {selectedItem && (
            <button
              type="button"
              onClick={resetSelectedItem}
              data-testid="autocomplete-reset"
            >
              <span className="material-icons">clear</span>
            </button>
          )}
        </div>
      </div>
      <div className={styles.autocomplete__content}>
        {selectedItem && <AutocompleteItem {...selectedItem} active />}
        {items
          .filter((item) => !isSameObject(item, selectedItem))
          .map((item) => (
            <AutocompleteItem {...item} key={item.id} onClick={onClickItem} />
          ))}
      </div>
    </div>
  );
};

export default memo(Autocomplete);
