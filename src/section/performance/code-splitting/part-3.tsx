import { FC, lazy, Suspense, useEffect, useState } from 'react';

import { useSectionContext } from '../../../components/templates/section/hooks/section.hook';
import NavbarToggle from './components/navbar-toggle';
import docs from './docs/part-3.docs.md';
import style from './style/part-2.module.css';

/**
 * Load Custom Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.10.14
 */
const loadCustomComponent = () =>
  import(/* webpackPrefetch: true */ `./components/custom-component`);

const CustomComponent = lazy(loadCustomComponent);

/**
 * Code Splitting Part 3
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.10.14
 */
const CodeSplittingPart3: FC = () => {
  const [showCustomComponent, toggleShowCustomComponent] = useState(false);
  const {
    action: { setMarkdownURL }
  } = useSectionContext();

  useEffect(() => {
    setMarkdownURL(docs);
  }, [setMarkdownURL]);

  return (
    <div className={style[`part-2`]} data-testid="code-splitting-3">
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

export default CodeSplittingPart3;
