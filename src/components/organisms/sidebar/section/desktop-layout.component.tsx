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
  subtitle,
  title
}) => (
  <div className={styles[`o-sidebar`]}>
    <h6>
      <button
        type="button"
        className="material-icons"
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
      {menu.map(({ text, to }) => (
        <NavLink
          to={to}
          key={`${to}-${text}`}
          className={styles[`o-sidebar__item`]}
          activeClassName={styles[`o-sidebar__item--active`]}
        >
          <span className="material-icons">done</span>
          {text}
        </NavLink>
      ))}
    </div>
  </div>
);

export default SidebarDesktopLayout;
