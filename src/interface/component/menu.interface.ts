/**
 * Menu Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @description
 * @since 2021.10.15
 */
export interface IMenu {
  menu: IMenuItem[];
  subtitle: string;
  title: string;
}

/**
 * Menu Item Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.10.14
 */
export interface IMenuItem {
  isPrimary?: boolean;
  text: string;
  to: string;
}
