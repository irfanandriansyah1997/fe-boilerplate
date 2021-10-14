import { FC } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './style/style.module.css';
import { IHeaderProps } from './interface';

/**
 * Header
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.10.14
 */
const Header: FC<IHeaderProps> = ({ menu }) => (
  <div className={styles[`o-header`]}>
    <h6>
      React <span>Cheatsheet</span>
    </h6>
    <div className={styles[`o-header__menu`]}>
      {menu.map(({ text, to }) => (
        <NavLink
          to={to}
          key={`${to}-${text}`}
          className={styles[`o-header__item`]}
          activeClassName={styles[`o-header__item--active`]}
        >
          {text}
        </NavLink>
      ))}
    </div>
  </div>
);

export default Header;
