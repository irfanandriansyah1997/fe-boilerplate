import { FC } from 'react';
import { NavLink } from 'react-router-dom';

import { IMenu } from '../../../interface/component';
import styles from './style/style.module.css';

/**
 * Sidebar Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.10.14
 */
const Sidebar: FC<IMenu> = ({ menu, subtitle, title }) => (
  <div className={styles[`o-sidebar`]}>
    <h6>{title}</h6>
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

export default Sidebar;
