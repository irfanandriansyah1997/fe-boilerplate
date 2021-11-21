import { IMasonryItem } from '../../../components/organisms/masonry-layout/interface';

/**
 * App Menu List Item Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.11.17
 */
export interface IAppMenuListItem {
  dataTestID: string;
  item: IMasonryItem[];
  label: string;
}

/**
 * App Menu List Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.11.17
 */
export interface IAppMenuList {
  section: IAppMenuListItem[];
}
