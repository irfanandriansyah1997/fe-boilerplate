import { FC, lazy, Suspense, useState } from 'react';

import SectionItemTemplates from '../../components/templates/section-item';
import NavbarToggle from './components/navbar-toggle';
import docs from './docs/part-2.docs.md';
import style from './style/part-2.module.css';

/**
 * Load Custom Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.10.14
 */
const loadCustomComponent = () => import(`./components/custom-component`);

const CustomComponent = lazy(loadCustomComponent);

/**
 * Code Splitting Part 2
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.10.14
 */
const CodeSplittingPart2: FC = () => {
  const [showCustomComponent, toggleShowCustomComponent] = useState(false);
  return (
    <div className={style[`part-2`]}>
      <NavbarToggle
        active={showCustomComponent}
        onFocus={loadCustomComponent}
        onMouseOver={loadCustomComponent}
        onToggle={toggleShowCustomComponent}
      />
      <Suspense fallback={<div>Loading...</div>}>
        {showCustomComponent && <CustomComponent />}
      </Suspense>
    </div>
  );
};

export default SectionItemTemplates(CodeSplittingPart2, docs);
