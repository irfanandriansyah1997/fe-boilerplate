import { FC, useEffect } from 'react';

import { useAsync } from '../../../hooks/async.hooks';
import { IAsyncStatusEnum } from '../../../hooks/interface';
import { useForceRerender } from '../../../hooks/render.hooks';
import Autocomplete from './components/autocomplete';
import { getCityItems } from './helper/worker.helper';
import { useCombobox } from './hooks/combobox.hook';
import { ICity } from './interface';

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
  const { data: allItems, run } = useAsync<ICity[]>({
    data: [],
    status: IAsyncStatusEnum.pending
  });

  useEffect(() => {
    run(getCityItems(keyword));
  }, [keyword, run]);

  const items = allItems.slice(0, 100);

  return (
    <div
      style={{
        left: `50%`,
        position: `absolute`,
        top: `100px`,
        transform: `translateX(-50%)`
      }}
      data-testid="use-memo-2"
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

export default UseMemoPart2;
