import { objToString } from '@99/helper';
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

import { isSameObject } from '../../../../helper';
import { useDebounce } from '../../../../hooks/layout.hooks';
import { ICityV2 } from '../../interface';
import styles from './style/style.module.scss';
import { IAutocompleteV2ItemProps, IAutocompleteV2Props } from './interface';

/**
 * Autocomplete Item Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.10.30
 */
let AutocompleteItem: FC<IAutocompleteV2ItemProps> = ({
  active,
  country,
  id,
  lat,
  lng,
  name,
  onClick,
  style: { size, start }
}) => (
  <div
    key={id}
    className={objToString({
      [styles[`autocomplete__content-item`]]: true,
      [styles[`autocomplete__content-item--active`]]: active === true
    })}
    role="button"
    tabIndex={0}
    onKeyPress={undefined}
    style={{
      height: size,
      left: 0,
      position: `absolute`,
      top: 0,
      transform: `translateY(${start}px)`,
      width: `100%`
    }}
    onClick={(e): void => {
      e.preventDefault();

      if (onClick)
        onClick({
          country,
          id,
          isActive: true,
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

AutocompleteItem = memo(AutocompleteItem, (prevProps, nextProps): boolean =>
  isSameObject(prevProps, nextProps)
);

/**
 * Autocomplete Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.10.29
 */
const Autocomplete: FC<IAutocompleteV2Props> = ({
  children,
  items,
  keyword,
  listRef,
  resetSelectedItem,
  setKeyword,
  setSelectedItem,
  totalItems,
  virtualItems
}) => {
  const ref = useRef<HTMLInputElement>();
  const [input, setInput] = useState(() => keyword);

  useEffect(() => {
    if (keyword !== input) {
      setKeyword(input);

      if (ref && ref.current) ref.current.value = input;
    }
  }, [input, keyword, setKeyword]);

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
    (item: ICityV2): void => {
      setSelectedItem(item);

      if (ref && ref.current) ref.current.value = item.name;
    },
    [setSelectedItem]
  );

  return (
    <div>
      <div
        className={objToString({
          [styles.autocomplete__toggle]: true
        })}
      >
        {children && children}
        <div
          className={objToString({
            [styles[`autocomplete__toggle-input`]]: true,
            [styles[`autocomplete__toggle-input--with-item`]]:
              items.length > 0 && items[0].isActive === true
          })}
        >
          <input
            name="keyword"
            type="text"
            placeholder="Search City Name..."
            ref={ref as LegacyRef<HTMLInputElement>}
            onChange={onChangeHandler}
          />
          {items.length > 0 && items[0].isActive === true && (
            <button type="button" onClick={resetSelectedItem}>
              <span className="material-icons">clear</span>
            </button>
          )}
        </div>
      </div>
      <div className={styles.autocomplete__content} ref={listRef}>
        <div style={{ height: `${totalItems}px`, position: `relative` }}>
          {virtualItems.map(({ index, size, start }) => {
            const item = items[index];

            if (!item) return null;

            const { id, isActive, ...res } = item;

            return (
              <AutocompleteItem
                {...res}
                key={id}
                id={id}
                style={{
                  size,
                  start
                }}
                active={isActive}
                onClick={onClickItem}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default memo(Autocomplete);
