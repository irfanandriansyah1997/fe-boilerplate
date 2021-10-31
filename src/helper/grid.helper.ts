import { IGrid } from '../interface/component';

/**
 * Update Grid State
 * @param {number[][]} grid - array of grid item
 * @returns {number[][]}
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.10.30
 */
export const updateGridState = (grid: number[][]): number[][] =>
  grid.map((rows) => rows.map(() => Math.floor(Math.random() * 100)));

/**
 * Update Grid Cell
 * @param {number[][]} grid - array of grid item
 * @param {IGrid} location - grid location
 * @returns {number[][]}
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.10.30
 */
export const updateGridCellState = (
  grid: number[][],
  { column, row }: IGrid
): number[][] =>
  grid.map((itemRow, indexRow) => {
    if (indexRow === row) {
      return itemRow.map((itemColumn, indexColumn) => {
        if (indexColumn === column) {
          return Math.floor(Math.random() * 100);
        }

        return itemColumn;
      });
    }

    return itemRow;
  });
