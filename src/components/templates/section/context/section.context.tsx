import { createContext, FC } from 'react';

import { NullAble } from '../../../../interface/general';
import { useSection } from '../hooks/section.hook';
import { ISectionContext } from '../interface';

/**
 * Section Context
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.10.27
 */
export const SectionContext = createContext<NullAble<ISectionContext>>(
  undefined
);

/**
 * Section Provider
 * @author Irfan Andriansyah <irfan@99.co>
 * @description section context provider
 * @since 2021.10.27
 */
export const SectionProvider: FC = ({ children }) => {
  const [markdownURL, setMarkdownURL] = useSection();

  return (
    <SectionContext.Provider
      value={{
        action: {
          setMarkdownURL
        },
        state: {
          markdownURL
        }
      }}
    >
      <div>{children}</div>
    </SectionContext.Provider>
  );
};
