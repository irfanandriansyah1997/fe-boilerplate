import { MouseEventHandler } from 'react';

/**
 * Grid Cell Props Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.10.31
 */
export interface IGridCellProps {
  cell: number;
  onClickCell: MouseEventHandler<HTMLButtonElement>;
}
