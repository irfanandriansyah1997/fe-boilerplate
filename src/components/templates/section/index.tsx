import { FC } from 'react';

import Sidebar from '../../organisms/sidebar';
import { ISidebarProps } from '../../organisms/sidebar/interface';

/**
 * Section Templates
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.10.14
 */
const SectionTemplates = (Component: FC, sidebar: ISidebarProps) => {
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
