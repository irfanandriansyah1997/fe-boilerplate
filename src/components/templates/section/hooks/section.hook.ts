import { useCallback, useContext, useState } from 'react';

import { useSafeDispatch } from '../../../../hooks/async.hooks';
import { SectionContext } from '../context';
import {
  ISectionContext,
  ISectionHooks,
  ISectionHooksDispatch
} from '../interface';

/**
 * Section Hooks
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.10.27
 */
export const useSection = (): ISectionHooks => {
  const [markdown, setMarkdown] = useState<string | undefined>(undefined);
  const safeDispatch = useSafeDispatch(setMarkdown);

  /**
   * On Change Markdown
   * @param {ISectionHooksDispatchParameter} parameter - markdown url parameter, for the parameter can be undefined
   * @author Irfan Andriansyah <irfan@99.co>
   * @description prevent re-render if state is same with the parameter
   * @since 2021.10.27
   */
  const onChangeMarkdown: ISectionHooksDispatch = useCallback(
    (param): void => {
      if (typeof param === `function`) {
        safeDispatch(param);
      } else if (param !== markdown) safeDispatch(param);
    },
    [markdown, safeDispatch]
  );

  return [markdown, onChangeMarkdown];
};

/**
 * Use Section Context Hooks
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.10.27
 */
export const useSectionContext = (): ISectionContext => {
  const context = useContext(SectionContext);

  if (context === undefined)
    throw new Error(`[ERROR] section context is undefined`);

  return context;
};
