import { render, waitFor } from '@testing-library/react';

import './markdown-reader-mock.spec';
import MarkdownReader from '..';

/**
 * MOCK_FETCH
 * @returns {Promise<Response>}
 */
const MOCK_FETCH = (input: RequestInfo): Promise<Response> =>
  new Promise((resolve) => {
    if (input === `sample-url`)
      resolve(({
        status: 200,
        text: () => `### Hello World \n Sample Text On Markdown`
      } as unknown) as Response);

    throw new Error(`Content Not Found`);
  });

describe(`Testing Markdown Reader`, () => {
  const tempFetch = global.fetch;

  beforeEach(() => {
    global.fetch = jest.fn().mockImplementation(MOCK_FETCH);
  });

  it(`Snapshot Testing`, async () => {
    const { getByTestId } = render(<MarkdownReader markdownUrl="sample-url" />);

    await waitFor(() => {
      expect(getByTestId(/markdown-code/)).toBeInTheDocument();
      expect(getByTestId(/markdown-code/)).toMatchSnapshot();
    });
  });

  afterEach(() => {
    global.fetch = tempFetch;
  });
});
