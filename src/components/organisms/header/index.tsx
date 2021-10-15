/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
import { objToString, verifiedIsNotFalse } from '@99/helper';
import { FC } from 'react';
import { NavLink, useHistory } from 'react-router-dom';

import styles from './style/style.module.css';
import { IHeaderProps } from './interface';

/**
 * Header
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.10.14
 */
const Header: FC<IHeaderProps> = ({ menu }) => {
  const history = useHistory();

  return (
    <div className={styles[`o-header`]}>
      <h6
        role="button"
        tabIndex={0}
        onKeyPress={(): void => undefined}
        onClick={(e): void => {
          e.preventDefault();
          history.push(`/`);
        }}
      >
        React <span>Cheatsheet</span>
      </h6>
      <div className={styles[`o-header__menu`]}>
        {menu.map(({ isPrimary, text, to }) => (
          <NavLink
            to={to}
            key={`${to}-${text}`}
            className={objToString({
              [styles[`o-header__item`]]: true,
              [styles[`o-header__item--primary`]]: verifiedIsNotFalse(isPrimary)
            })}
            activeClassName={styles[`o-header__item--active`]}
          >
            {text}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Header;
