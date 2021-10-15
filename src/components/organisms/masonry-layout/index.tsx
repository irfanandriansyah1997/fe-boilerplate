import { FC } from 'react';

import styles from './style/style.module.css';
import { useMasonry } from './hooks';
import { IMasonryLayout } from './interface';

/**
 * Masonry Layout Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.10.15
 */
const MasonryLayout: FC<IMasonryLayout> = ({
  component: Component,
  item,
  maxGrid
}) => {
  const grouping = useMasonry(item, maxGrid);

  return (
    <div
      className={styles[`o-masonry`]}
      style={{
        gridTemplateColumns: `repeat(${maxGrid}, 1fr)`
      }}
    >
      {grouping.map(({ item, key }) => (
        <div key={key}>
          {item.map(({ item, key: keyItem }) => (
            <Component key={keyItem} {...item} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default MasonryLayout;
