import { FC } from 'react';

import { IMenu } from '../../../interface/component';
import Sidebar from '../../organisms/sidebar';

/**
 * Section Templates
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.10.14
 */
const SectionTemplates = (Component: FC, sidebar: IMenu) => {
  /**
   * Inner Component
   * @author Irfan Andriansyah <irfan@99.co>
   * @since 2021.10.14
   */
  const InnerComponentTemplates: FC = (props) => (
    <div>
      <Sidebar {...sidebar} />
      <Component {...props} />
    </div>
  );

  return InnerComponentTemplates;
};

export default SectionTemplates;
