import { FC } from 'react';

import { useLayout } from '../../../hooks/layout.hooks';
import SidebarDesktopLayout from './section/desktop-layout.component';
import { ISidebarProps } from './interface';

/**
 * Sidebar Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.10.14
 */
const Sidebar: FC<ISidebarProps> = (props) => {
  const type = useLayout();

  if (type === `desktop`) return <SidebarDesktopLayout {...props} />;

  return null;
};

export default Sidebar;
