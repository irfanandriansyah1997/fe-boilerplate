import { IMenuItem } from '../../../../interface/component';

/**
 * Sidebar Props Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.10.14
 */
export interface ISidebarProps {
  menu: IMenuItem[];
  subtitle: string;
  title: string;
}
