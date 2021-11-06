import { FC, useEffect } from 'react';

import { useSectionContext } from '../hooks/section.hook';

it.todo(`Skip Its Just Mocked File`);

/**
 * Mock Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.11.06
 */
export const MockComponentSection: FC = () => {
  const {
    action: { setMarkdownURL }
  } = useSectionContext();

  useEffect(() => {
    setMarkdownURL(`sample-url`);
  });

  return <div>Hello World</div>;
};

/**
 * MOCK_FETCH
 * @returns {Promise<Response>}
 */
export const MOCK_FETCH_SECTION = (input: RequestInfo): Promise<Response> =>
  new Promise((resolve) => {
    if (input === `sample-url`)
      resolve(({
        status: 200,
        text: () => `### Hello World \n Sample Text On Markdown`
      } as unknown) as Response);

    throw new Error(`Content Not Found`);
  });
