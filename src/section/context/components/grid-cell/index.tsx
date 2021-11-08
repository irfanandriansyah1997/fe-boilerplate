import { FC } from 'react';

import style from './style/style.module.scss';
import { IGridCellProps } from './interface';

/**
 * Grid Cell Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.10.31
 */
const GridCell: FC<IGridCellProps> = ({ cell, onClickCell }) => (
  <button
    data-testid="grid-cell"
    type="button"
    onClick={onClickCell}
    className={style[`grid-cell`]}
    style={{
      backgroundColor: `rgba(0, 0, 0, ${cell / 100})`,
      color: cell > 50 ? `white` : `black`
    }}
  >
    {cell}
  </button>
);

export default GridCell;
