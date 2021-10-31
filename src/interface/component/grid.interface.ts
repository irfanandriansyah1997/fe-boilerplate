/**
 * Grid Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.10.30
 */
export interface IGrid {
  column: number;
  ref?: any;
  row: number;
}

/**
 * Grid With Cells Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.10.31
 */
export interface IGridWithCell extends IGrid {
  cell: number;
}
