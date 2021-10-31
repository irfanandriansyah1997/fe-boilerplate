import { FC } from 'react';

import { ICellProps, IGridProps } from '../../../molecules/grid/interface';

/**
 * App Grid Props Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.10.30
 */
export interface IAppGridProps extends IGridProps {
  Cell: FC<ICellProps>;
  onForceRerender(): void;
  onUpdateGrid(): void;
}
