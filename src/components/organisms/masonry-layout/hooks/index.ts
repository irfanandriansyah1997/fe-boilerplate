import { useCallback, useEffect, useMemo, useState } from 'react';

import { IGroupingMasonry, IMasonryItem } from '../interface';

/**
 * Masonry Hooks
 * @author Irfan Andriansyah <irfan@99.co>
 * @description for generate masonry grid component
 * @since 2021.10.15
 */
export const useMasonry = (
  item: IMasonryItem[],
  maxGrid: number
): IGroupingMasonry[] => {
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

          if (index >= maxGrid) {
            const mod = index % maxGrid;
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
    [item, maxGrid]
  );

  const [grid, setGrid] = useState<IGroupingMasonry[]>(() =>
    generateMasonryGrid()
  );

  useEffect(() => {
    setGrid(generateMasonryGrid());
  }, [generateMasonryGrid, item, maxGrid]);

  return useMemo(() => grid, [grid]);
};
