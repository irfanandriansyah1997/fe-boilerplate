/* eslint-disable react/no-array-index-key */
import { FC } from 'react';

import styles from './style/style.module.scss';
import { IGridProps } from './interface';

/**
 * Grid Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.10.30
 */
const Grid: FC<IGridProps> = ({ Cell, column = 30, row = 30 }) => (
  <div className={styles.grid} data-testid="grid-container">
    {Array.from({ length: row }).map((_, row) => (
      <div key={row} className={styles.grid__row} data-testid="grid-row">
        {Array.from({ length: column }).map((_, column) => (
          <div
            key={`${row}-${column}`}
            className={styles.grid__column}
            data-testid="grid-item"
          >
            <Cell row={row} column={column} />
          </div>
        ))}
      </div>
    ))}
  </div>
);

export default Grid;
