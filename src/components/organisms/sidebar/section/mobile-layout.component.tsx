import { objToString, verifiedIsNotEmpty } from '@99/helper';
import { FC, useLayoutEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { NavLink } from 'react-router-dom';
import { Transition } from 'react-transition-group';

import { ISidebarMobilMenuProps, ISidebarProps } from '../interface';
import styles from '../style/mobile-layout.module.scss';

/**
 * Sidebar Mobile Menu Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.10.24
 */
const SidebarMobileMenu: FC<ISidebarMobilMenuProps> = ({
  menu,
  onClickBack,
  onClickItem,
  show,
  subtitle,
  title,
  toggleShow
}) =>
  createPortal(
    <Transition in={show} timeout={300} mountOnEnter unmountOnExit>
      {(state) => (
        <div
          className={objToString({
            [styles[`o-sidebar-mobile__dialog`]]: true,
            [styles[`o-sidebar-mobile__dialog--${state}`]]: verifiedIsNotEmpty(
              state
            )
          })}
        >
          <div className={styles[`o-sidebar-mobile__dialog-heading`]}>
            <h6>
              <button
                type="button"
                className="material-icons"
                onClick={(e): void => {
                  e.preventDefault();
                  toggleShow(false);
                }}
              >
                arrow_back
              </button>
              {title}
            </h6>
            <p>{subtitle}</p>
          </div>
          <div className={styles[`o-sidebar__menu`]}>
            {menu.map(({ isPrimary, text, to }) => (
              <NavLink
                to={to}
                key={`${to}-${text}`}
                className={styles[`o-sidebar__item`]}
                activeClassName={styles[`o-sidebar__item--active`]}
                onClick={(): void => {
                  toggleShow(false);

                  if (onClickItem) onClickItem({ isPrimary, text, to });
                }}
              >
                <span className="material-icons">done</span>
                {text}
              </NavLink>
            ))}
          </div>
          <button
            type="button"
            className={styles[`o-sidebar-mobile__back-button`]}
            onClick={(e): void => {
              e.preventDefault();
              toggleShow(false);

              setTimeout(() => {
                onClickBack();
              }, 300);
            }}
          >
            🏠&nbsp;Back To Homepage
          </button>
        </div>
      )}
    </Transition>,
    document.body
  );

/**
 * Sidebar Mobile Layout
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.10.24
 */
const SidebarMobileLayout: FC<ISidebarProps> = ({ title, ...props }) => {
  const [isScrolled, toggleScrolled] = useState(false);
  const [isShowedDrawer, toggleDrawer] = useState(false);

  /**
   * On Change Scroll
   * @author Irfan Andriansyah <irfan@99.co>
   * @since 2021.10.24
   */
  const onChangeScroll = (): void => {
    const { scrollY } = window;

    toggleScrolled(scrollY > 20);
  };

  useLayoutEffect(() => {
    window.addEventListener(`scroll`, onChangeScroll);

    return () => window.removeEventListener(`scroll`, onChangeScroll);
  }, []);

  return (
    <>
      <div className={styles[`o-sidebar-mobile`]}>
        <div
          className={objToString({
            [styles[`o-sidebar-mobile__navbar`]]: true,
            [styles[`o-sidebar-mobile__navbar--scrolled`]]: isScrolled
          })}
        >
          <button
            type="button"
            className="material-icons"
            onClick={(e): void => {
              e.preventDefault();
              toggleDrawer(true);
            }}
          >
            menu
          </button>
          <h6>{title}</h6>
        </div>
      </div>
      <SidebarMobileMenu
        {...props}
        title={title}
        show={isShowedDrawer}
        toggleShow={toggleDrawer}
      />
    </>
  );
};

export default SidebarMobileLayout;
