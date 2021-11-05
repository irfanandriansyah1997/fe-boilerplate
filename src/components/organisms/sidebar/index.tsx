import { FC } from 'react';

import { useLayout } from '../../../hooks/layout.hooks';
import SidebarDesktopLayout from './section/desktop-layout.component';
import SidebarMobileLayout from './section/mobile-layout.component';
import { ISidebarProps } from './interface';

/**
 * Sidebar Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.10.14
 */
const Sidebar: FC<ISidebarProps> = ({ ...props }) => {
  const type = useLayout();

  switch (type) {
    case `desktop`:
      return <SidebarDesktopLayout {...props} />;

    case `mobile`:
    case `small-desktop`:
    case `tablet`:
    default:
      return <SidebarMobileLayout {...props} />;
  }
};

export default Sidebar;
