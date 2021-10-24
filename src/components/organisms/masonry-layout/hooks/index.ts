import { useCallback, useEffect, useMemo, useState } from 'react';

import { useLayout } from '../../../../hooks/layout.hooks';
import { IGroupingMasonry, IMasonryHooks, IMasonryItem } from '../interface';

/**
 * Masonry Hooks
 * @author Irfan Andriansyah <irfan@99.co>
 * @description for generate masonry grid component
 * @since 2021.10.15
 */
export const useMasonry = (
  item: IMasonryItem[],
  maxGrid: number
): IMasonryHooks => {
  const [gridCount, setGridCount] = useState(maxGrid);
  const type = useLayout();

  /**
   * Generate Masonry Grid Helper
   * @author Irfan Andriansyah <irfan@99.co>
   * @since 2021.10.15
   */
  const generateMasonryGrid = useCallback(
    (): IGroupingMasonry[] =>
      item.reduce<IGroupingMasonry[]>(
        (prev, current, index): IGroupingMasonry[] => {
          const temp: IGroupingMasonry[] = [...prev];

          if (index >= gridCount) {
            const mod = index % gridCount;
            if (temp[mod])
              temp[mod] = {
                item: [...temp[mod].item, current],
                key: `${temp[mod].key}-${current.key}`
              };
            else
              temp[mod] = {
                item: [current],
                key: current.key
              };
          } else {
            temp[index] = {
              item: [current],
              key: current.key
            };
          }

          return temp;
        },
        []
      ),
    [item, gridCount]
  );

  const [grid, setGrid] = useState<IGroupingMasonry[]>(() =>
    generateMasonryGrid()
  );

  useEffect(() => {
    setGridCount(maxGrid);
  }, [maxGrid]);

  useEffect(() => {
    switch (type) {
      case `mobile`:
        setGridCount(1);
        break;

      case `tablet`:
        setGridCount(2);
        break;

      case `small-desktop`:
      case `desktop`:
        setGridCount(maxGrid);
        break;

      default:
        break;
    }
  }, [type, grid, maxGrid]);

  useEffect(() => {
    setGrid(generateMasonryGrid());
  }, [generateMasonryGrid, item, gridCount]);

  return useMemo(
    () => ({
      gridCount,
      item: grid
    }),
    [grid, gridCount]
  );
};
