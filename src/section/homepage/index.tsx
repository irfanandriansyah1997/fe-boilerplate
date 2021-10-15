import { FC, useMemo } from 'react';

import MasonryLayout from '../../components/organisms/masonry-layout';
import HomepageCard from './component/home-page-card';
import style from './style/homepage.module.css';
import { generateSampleLink } from './helper';

/**
 * Homepage Layouting
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.10.15
 */
const Homepage: FC = () => {
  const response = useMemo(() => generateSampleLink(), []);

  return (
    <div className={style.homepage}>
      <div className={style.homepage__heading}>
        <h1>React.js cheatsheet</h1>
        <p>
          React is a JavaScript library for building user interfaces. This guide
          targets React v15 to v16.
        </p>
      </div>
      <div className={style.homepage__section}>
        <h2>Performance</h2>
        <MasonryLayout item={response} component={HomepageCard} maxGrid={4} />
      </div>
    </div>
  );
};

export default Homepage;
