import { FC, lazy, Suspense, useEffect, useState } from 'react';

import { useSectionContext } from '../../components/templates/section/hooks/section.hook';
import NavbarToggle from './components/navbar-toggle';
import docs from './docs/part-1.docs.md';
import style from './style/part-1.module.css';

const CustomComponent = lazy(() => import(`./components/custom-component`));

/**
 * Code Splitting Part 1
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.10.14
 */
const CodeSplittingPart1: FC = () => {
  const [showCustomComponent, toggleShowCustomComponent] = useState(false);
  const {
    action: { setMarkdownURL }
  } = useSectionContext();

  useEffect(() => {
    setMarkdownURL(docs);
  }, [setMarkdownURL]);

  return (
    <div className={style[`part-1`]} data-testid="code-splitting-1">
      <NavbarToggle
        active={showCustomComponent}
        onToggle={toggleShowCustomComponent}
      />
      <Suspense fallback={<div>Loading...</div>}>
        {showCustomComponent && <CustomComponent />}
      </Suspense>
    </div>
  );
};

export default CodeSplittingPart1;
