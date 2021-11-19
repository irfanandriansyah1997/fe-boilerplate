import { FC, useMemo } from 'react';

import MasonryLayout from '../../components/organisms/masonry-layout';
import HomepageCard from './component/home-page-card';
import style from './style/homepage.module.scss';
import { generateAppMenu } from './helper';

/**
 * Homepage Layouting
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.10.15
 */
const Homepage: FC = () => {
  const { section } = useMemo(() => generateAppMenu(), []);

  return (
    <div className={style.homepage}>
      <div className={style.homepage__heading}>
        <h1 data-testid="homepage-title">React.js cheatsheet</h1>
        <p data-testid="homepage-description">
          React is a JavaScript library for building user interfaces. This guide
          targets React v15 to v16.
        </p>
      </div>
      {section.map(({ dataTestID, item, label }) => (
        <div
          className={style.homepage__section}
          data-testid={dataTestID}
          key={dataTestID}
        >
          <h2>{label}</h2>
          <MasonryLayout item={item} component={HomepageCard} maxGrid={4} />
        </div>
      ))}
    </div>
  );
};

export default Homepage;
