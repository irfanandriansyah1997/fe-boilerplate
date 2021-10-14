import { FC } from 'react';

import styles from './style/style.module.css';

/**
 * Custom Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.10.14
 */
const CustomComponent: FC = () => (
  <div className={styles[`custom-component`]}>
    This Is Sample Custom Component
  </div>
);

export default CustomComponent;
