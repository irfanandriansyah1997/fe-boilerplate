import { FC, LegacyRef, useCallback, useEffect, useRef } from 'react';
import { useVirtual } from 'react-virtual';

import { useAsync } from '../../../hooks/async.hooks';
import { IAsyncStatusEnum } from '../../../hooks/interface';
import { useForceRerender } from '../../../hooks/render.hooks';
import Autocomplete from './components/autocomplete-virtual-scroll';
import { getCityItemsWithSelectedItem } from './helper/worker.helper';
import { useCombobox } from './hooks/combobox.hook';
import { ICityV2 } from './interface';

/**
 * Code Splitting Part 2
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.10.14
 */
const UseMemoPart2: FC = () => {
  const {
    keyword,
    resetSelectedItem,
    selectedItem,
    setKeyword,
    setSelectedItem
  } = useCombobox();
  const forceRendered = useForceRerender();
  const { data: items, run } = useAsync<ICityV2[]>({
    data: [],
    status: IAsyncStatusEnum.pending
  });

  const listRef = useRef<HTMLDivElement>();
  useEffect(() => {
    run(getCityItemsWithSelectedItem(keyword, selectedItem));
  }, [keyword, run, selectedItem]);

  const { totalSize, virtualItems } = useVirtual({
    estimateSize: useCallback(() => 65, []),
    overscan: 10,
    parentRef: listRef,
    size: items.length
  });

  return (
    <div
      style={{
        left: `50%`,
        position: `absolute`,
        top: `100px`,
        transform: `translateX(-50%)`
      }}
      data-testid="use-memo-3"
    >
      <Autocomplete
        keyword={keyword}
        items={items}
        totalItems={totalSize}
        listRef={listRef as LegacyRef<HTMLDivElement>}
        virtualItems={virtualItems}
        resetSelectedItem={resetSelectedItem}
        setKeyword={setKeyword}
        setSelectedItem={setSelectedItem}
      >
        <button type="button" onClick={forceRendered}>
          <span className="material-icons">refresh</span>
        </button>
      </Autocomplete>
    </div>
  );
};

export default UseMemoPart2;
