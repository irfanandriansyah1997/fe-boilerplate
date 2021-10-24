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
  const { gridCount, item: masonryItem } = useMasonry(item, maxGrid);

  return (
    <div
      className={styles[`o-masonry`]}
      style={{
        gridTemplateColumns: `repeat(${gridCount}, 1fr)`
      }}
    >
      {masonryItem.map(({ item: masonryChild, key }) => (
        <div key={key}>
          {masonryChild.map(({ item: masonryItemProps, key: keyItem }) => (
            <Component key={keyItem} {...masonryItemProps} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default MasonryLayout;
