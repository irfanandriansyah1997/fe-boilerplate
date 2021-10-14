/**
 * Header Item Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.10.14
 */
export interface IHeaderItem {
  text: string;
  to: string;
}

/**
 * Header Props Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.10.14
 */
export interface IHeaderProps {
  menu: IHeaderItem[];
}
