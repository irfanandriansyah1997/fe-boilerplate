import { FC } from 'react';
import { NavLink } from 'react-router-dom';

import { ISidebarProps } from '../interface';
import styles from '../style/desktop-layout.module.scss';

/**
 * Sidebar Desktop Layout
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.10.14
 */
const SidebarDesktopLayout: FC<ISidebarProps> = ({
  menu,
  onClickBack,
  onClickItem,
  subtitle,
  title
}) => (
  <div className={styles[`o-sidebar`]} data-testid="sidebar-dsite">
    <h6>
      <button
        type="button"
        className="material-icons"
        data-testid="sidebar-dsite-click-back"
        onClick={(e): void => {
          e.preventDefault();
          onClickBack();
        }}
      >
        arrow_back
      </button>
      {title}
    </h6>
    <p>{subtitle}</p>
    <div className={styles[`o-sidebar__menu`]}>
      {menu.map(({ isPrimary, text, to }) => (
        <NavLink
          to={to}
          key={`${to}-${text}`}
          data-testid="sidebar-dsite-item"
          className={styles[`o-sidebar__item`]}
          activeClassName={styles[`o-sidebar__item--active`]}
          onClick={(): void => {
            if (onClickItem) onClickItem({ isPrimary, text, to });
          }}
        >
          <span className="material-icons">done</span>
          {text}
        </NavLink>
      ))}
    </div>
  </div>
);

export default SidebarDesktopLayout;
