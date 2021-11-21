import {
  DEFAULT_LINK_PERFORMANCE_SECTION,
  DEFAULT_LINK_SUSPENSE_SECTION
} from '../constant';
import { IAppMenuList } from '../interface';

/**
 * Generate App Menu
 * @returns {IMasonryItem[]}
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.10.15
 */
export const generateAppMenu = (): IAppMenuList => ({
  section: [
    {
      dataTestID: `homepage-section`,
      item: DEFAULT_LINK_PERFORMANCE_SECTION.map((item, index) => ({
        item,
        key: `home-page-item-${index}`
      })),
      label: `Performance`
    },
    {
      dataTestID: `react-suspense-section`,
      item: DEFAULT_LINK_SUSPENSE_SECTION.map((item, index) => ({
        item,
        key: `react-suspense-${index}`
      })),
      label: `React Suspense`
    }
  ]
});
