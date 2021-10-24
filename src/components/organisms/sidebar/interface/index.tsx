import { IMenu } from '../../../../interface/component';

/**
 * Sidebar Mobile Menu Props Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.10.24
 */
export interface ISidebarMobilMenuProps extends ISidebarProps {
  show: boolean;
  toggleShow(show: boolean): void;
}

/**
 * Sidebar Props Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.10.22
 */
export interface ISidebarProps extends IMenu {
  onClickBack(): void;
}
