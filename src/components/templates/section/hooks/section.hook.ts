import { useCallback, useContext, useEffect, useRef, useState } from 'react';

import { NullAble } from '../../../../interface/general';
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
  const ref = useRef<NullAble<boolean>>();
  const [markdown, setMarkdown] = useState<string | undefined>(undefined);

  useEffect(() => {
    ref.current = true;

    return () => {
      ref.current = false;
    };
  }, []);

  /**
   * Safe Dispatch
   * @param {NullAble<string>} markdownURL - markdown url
   * @returns {void}
   * @author Irfan Andriansyah <irfan@99.co>
   * @since 2021.10.27
   */
  const safeDispatch = (markdownURL: NullAble<string>): void => {
    if (ref.current) setMarkdown(markdownURL);
  };

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
        const result = param(markdown);

        if (result !== markdown) safeDispatch(result);
      } else if (param !== markdown) safeDispatch(param);
    },
    [markdown]
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
