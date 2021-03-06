/**
 * Navbar Toggle Props Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.10.14
 */
export interface INavbarToggleProps {
  active: boolean;
  onFocus?(): void;
  onMouseOver?(): void;
  onToggle(active: boolean): void;
}
