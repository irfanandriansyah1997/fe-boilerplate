import { objToString } from '@99/helper';
import { FC, MouseEventHandler } from 'react';

import style from './style/style.module.css';
import { INavbarToggleProps } from './interface';

/**
 * Navbar Toggle Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.10.14
 */
const NavbarToggle: FC<INavbarToggleProps> = ({
  active,
  onFocus,
  onMouseOver,
  onToggle
}) => {
  /**
   * Event Handler On Click Button
   * @param {boolean} show - payload toogle on click button
   * @returns {MouseEventHandler<HTMLButtonElement>}
   */
  const onClickButton = (
    show: boolean
  ): MouseEventHandler<HTMLButtonElement> => (e) => {
    e.preventDefault();

    if (active !== show) onToggle(show);
  };

  return (
    <div className={style[`navbar-toggle`]}>
      <div className={style[`navbar-toggle__text`]}>
        <h6>Toggle Custom Component</h6>
        <p>
          Set active for showing custom component and inactive for remove custom
          component
        </p>
      </div>
      <button
        type="button"
        onFocus={onFocus}
        onMouseEnter={onMouseOver}
        onClick={onClickButton(true)}
        className={objToString({
          [style[`navbar-toggle__button`]]: true,
          [style[`navbar-toggle__button--active`]]: active
        })}
      >
        Active
      </button>
      <button
        type="button"
        onFocus={onFocus}
        onMouseEnter={onMouseOver}
        onClick={onClickButton(false)}
        className={objToString({
          [style[`navbar-toggle__button`]]: true,
          [style[`navbar-toggle__button--active`]]: !active
        })}
      >
        Inactive
      </button>
    </div>
  );
};

export default NavbarToggle;
