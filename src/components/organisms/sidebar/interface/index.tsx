import { IMenu } from '../../../../interface/component';

/**
 * Sidebar Props Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.10.22
 */
export interface ISidebarProps extends IMenu {
  onClickBack(): void;
}
