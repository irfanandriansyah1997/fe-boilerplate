/* eslint-disable react/no-array-index-key */
import { FC } from 'react';

import styles from './style/style.module.scss';
import { IGridProps } from './interface';

/**
 * Grid Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.10.30
 */
const Grid: FC<IGridProps> = ({ Cell }) => (
  <div className={styles.grid}>
    {Array.from({ length: 30 }).map((_, row) => (
      <div key={row} className={styles.grid__row}>
        {Array.from({ length: 30 }).map((_, column) => (
          <div key={`${row}-${column}`} className={styles.grid__column}>
            <Cell row={row} column={column} />
          </div>
        ))}
      </div>
    ))}
  </div>
);

export default Grid;
