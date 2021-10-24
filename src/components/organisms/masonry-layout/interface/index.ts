import { FC } from 'react';

/**
 * Grouping Masonry Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.10.15
 */
export interface IGroupingMasonry {
  item: IMasonryItem[];
  key: string;
}

/**
 * Masonry Hooks Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.10.24
 */
export interface IMasonryHooks {
  gridCount: number;
  item: IGroupingMasonry[];
}

/**
 * Masonry Item Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.10.15
 */
export interface IMasonryItem {
  item: Record<string, any>;
  key: string;
}

/**
 * Masonry Layout Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.10.15
 */
export interface IMasonryLayout {
  component: FC<any>;
  item: IMasonryItem[];
  maxGrid: number;
}
