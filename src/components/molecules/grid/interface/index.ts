import { FC } from 'react';

/**
 * Grid Props Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.10.30
 */
export interface IGridProps {
  Cell: FC<ICellProps>;
  column?: number;
  row?: number;
}

/**
 * Cell Props Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.10.30
 */
export interface ICellProps {
  column: number;
  row: number;
}
