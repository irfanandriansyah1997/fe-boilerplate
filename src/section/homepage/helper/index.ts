import { IMasonryItem } from '../../../components/organisms/masonry-layout/interface';
import { IMenu } from '../../../interface/component';
import { DEFAULT_LINK_SECTION } from '../constant';

/**
 * Generate Sample Link
 
 * @returns {IMasonryItem[]}
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.10.15
 */
export const generateSampleLink = (): IMasonryItem[] => {
  const response: IMenu[] = DEFAULT_LINK_SECTION;

  return [...response].map((item, index) => ({
    item,
    key: `home-page-item-${index}`
  }));
};
