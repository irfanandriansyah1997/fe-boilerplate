import { FC, useMemo } from 'react';

import { useForceRerender } from '../../hooks/render.hooks';
import Autocomplete from './components/autocomplete';
import { useCombobox } from './hooks/combobox.hook';
import { getCityItems } from './helper';

/**
 * Code Splitting Part 1
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.10.14
 */
const UseMemoPart1: FC = () => {
  const {
    keyword,
    resetSelectedItem,
    selectedItem,
    setKeyword,
    setSelectedItem
  } = useCombobox();
  const forceRendered = useForceRerender();

  const allItems = useMemo(() => getCityItems(keyword), [keyword]);
  const items = allItems.slice(0, 100);

  return (
    <div
      style={{
        left: `50%`,
        position: `absolute`,
        top: `100px`,
        transform: `translateX(-50%)`
      }}
      data-testid="use-memo-1"
    >
      <Autocomplete
        keyword={keyword}
        items={items}
        resetSelectedItem={resetSelectedItem}
        setKeyword={setKeyword}
        setSelectedItem={setSelectedItem}
        selectedItem={selectedItem}
      >
        <button type="button" onClick={forceRendered}>
          <span className="material-icons">refresh</span>
        </button>
      </Autocomplete>
    </div>
  );
};

export default UseMemoPart1;
