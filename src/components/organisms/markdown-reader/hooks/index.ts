import { useCallback, useEffect, useRef, useState } from 'react';

import { useSafeDispatch } from '../../../../hooks/async.hooks';
import { appsCache } from '../../../../hooks/cache.hooks';
import { IMarkdownHooks } from '../interface';

/**
 * Generate Markdown Content
 * @param {string} url - url markdown
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.10.15
 */
export const getMarkdownContent = async (
  url: string
): Promise<IMarkdownHooks> => {
  const { getCache, saveCache } = appsCache();
  const data = await getCache(url);

  if (data) {
    return JSON.parse(data) as IMarkdownHooks;
  }

  return fetch(url)
    .then(
      async (res): Promise<IMarkdownHooks> => {
        const response = {
          content: await res.text(),
          status: res.status,
          url
        };

        await saveCache(url, JSON.stringify(response));
        return response;
      }
    )
    .catch(
      (): IMarkdownHooks => ({
        content: undefined,
        status: 500,
        url
      })
    );
};

/**
 * Markdown Reader Hooks
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.10.15
 */
export const useMarkdownReader = (url: string): Partial<IMarkdownHooks> => {
  const [content, setMarkdown] = useState<Partial<IMarkdownHooks>>({});
  const ref = useRef(true);
  const dispatch = useSafeDispatch(setMarkdown);

  useEffect(
    () => (): void => {
      ref.current = false;
    },
    []
  );

  /**
   * On Load Markdown
   * @param {string | undefined} value - value from api
   * @returns {void}
   * @author Irfan Andriansyah <irfan@99.co>
   * @since 2021.10.15
   */
  const setMarkdownContent = useCallback(
    (value: Partial<IMarkdownHooks>) => {
      if (content.content !== value.content && content.url !== value.url) {
        dispatch(value);
      }
    },
    [content.content, content.url, dispatch]
  );

  /**
   * On Load Markdown
   * @returns {void}
   * @author Irfan Andriansyah <irfan@99.co>
   * @since 2021.10.15
   */
  const onLoadMarkdown = useCallback((): void => {
    if (ref) {
      getMarkdownContent(url).then((response) => {
        setMarkdownContent({ ...response });
      });
    }
  }, [setMarkdownContent, ref, url]);

  useEffect(() => {
    const { url: urlState } = content;
    if (url !== urlState) {
      onLoadMarkdown();
    }
  }, [onLoadMarkdown, url, content]);

  return content;
};
