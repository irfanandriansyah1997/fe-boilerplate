import { FC } from 'react';
import { NavLink } from 'react-router-dom';

import { IMenu } from '../../../../interface/component';
import styles from './style/style.module.css';

/**
 * Homepage Card Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.10.15
 */
const HomepageCard: FC<IMenu> = ({ menu, subtitle, title }) => (
  <div className={styles[`homepage-card`]}>
    <h6>{title}</h6>
    <div className={styles[`homepage-card__container`]}>
      <p>{subtitle}</p>
      <ul>
        {menu.map(({ text, to }) => (
          <li key={`${text}-${to}`}>
            <NavLink to={to}>
              <span className="material-icons">sticky_note_2</span>
              {text}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default HomepageCard;
