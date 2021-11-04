import { FC } from 'react';

import Grid from '../../molecules/grid';
import styles from './style/style.module.scss';
import { IAppGridProps } from './interface';

/**
 * App Grid Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.10.30
 */
const AppGrid: FC<IAppGridProps> = ({
  Cell,
  onForceRerender,
  onUpdateGrid,
  ...res
}) => (
  <div className={styles[`app-grid`]} data-testid="app-grid">
    <div className={styles[`app-grid__button-container`]}>
      <button type="button" onClick={onUpdateGrid}>
        <span className="material-icons">update</span>
        Update Cells
      </button>
      <button type="button" onClick={onForceRerender}>
        <span className="material-icons">refresh</span>
        Force Re-render
      </button>
    </div>
    <Grid {...res} Cell={Cell} />
  </div>
);

export default AppGrid;
