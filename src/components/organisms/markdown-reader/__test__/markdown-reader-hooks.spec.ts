import { act, renderHook } from '@testing-library/react-hooks';

import { getMarkdownContent, useMarkdownReader } from '../hooks';
import { IMarkdownHooks } from '../interface';

/**
 * MOCK_FETCH
 * @returns {Promise<Response>}
 */
const MOCK_FETCH = (input: RequestInfo): Promise<Response> =>
  new Promise((resolve) => {
    if (input === `sample-url`)
      resolve(({
        status: 200,
        text: () => `sample response fetch api`
      } as unknown) as Response);

    if (input === `another-sample-url`)
      resolve(({
        status: 200,
        text: () => `another sample response fetch api`
      } as unknown) as Response);

    throw new Error(`Content Not Found`);
  });

describe(`Testing Markdown Reader Hooks`, () => {
  describe(`Testing Get Markdown Content Helper`, () => {
    const tempFetch = global.fetch;

    beforeEach(() => {
      global.fetch = jest.fn().mockImplementation(MOCK_FETCH);
    });

    it(`Testing With Success Get Data From Fetch`, async () => {
      const response = await getMarkdownContent(`sample-url`);

      expect(fetch).toHaveBeenCalled();
      expect(fetch).toHaveBeenCalledWith(`sample-url`);
      expect(response).toStrictEqual({
        content: `sample response fetch api`,
        status: 200,
        url: `sample-url`
      });
    });

    it(`Testing With Success Get Data From Local Storage`, async () => {
      const response = await getMarkdownContent(`sample-url`);

      expect(fetch).not.toHaveBeenCalled();
      expect(response).toStrictEqual({
        content: `sample response fetch api`,
        status: 200,
        url: `sample-url`
      });
    });

    it(`Testing With Error Request`, async () => {
      const response = await getMarkdownContent(`sample-error-url`);

      expect(fetch).toHaveBeenCalled();
      expect(fetch).toHaveBeenCalledWith(`sample-error-url`);
      expect(response).toStrictEqual({
        content: undefined,
        status: 500,
        url: `sample-error-url`
      });
    });

    afterEach(() => {
      global.fetch = tempFetch;
    });
  });

  describe(`Testing Use Markdown Reader Hooks`, () => {
    const tempFetch = global.fetch;

    beforeEach(() => {
      global.fetch = jest.fn().mockImplementation(MOCK_FETCH);
      localStorage.clear();
    });

    it(`Testing With Success Get Data From Fetch`, async () => {
      const { rerender, result, unmount, waitForNextUpdate } = renderHook<
        string,
        Partial<IMarkdownHooks>
      >((props) => useMarkdownReader(props));

      /**
       * First Render
       */
      rerender(`sample-url`);
      await act(async () => {
        await waitForNextUpdate();
      });

      expect(result.current).toStrictEqual({
        content: `sample response fetch api`,
        status: 200,
        url: `sample-url`
      });
      expect(fetch).toHaveBeenCalledWith(`sample-url`);
      (fetch as jest.Mock).mockClear();

      /**
       * Second Render Simulate Change URL
       */
      rerender(`another-sample-url`);
      await act(async () => {
        await waitForNextUpdate();
      });

      expect(result.current).toStrictEqual({
        content: `another sample response fetch api`,
        status: 200,
        url: `another-sample-url`
      });
      expect(fetch).toHaveBeenCalledWith(`another-sample-url`);
      (fetch as jest.Mock).mockClear();

      /**
       * Simulate Unmount
       */
      await act(async () => {
        unmount();
        rerender(`sample-url`);

        expect(fetch).not.toHaveBeenCalled();
      });
    });

    afterEach(() => {
      global.fetch = tempFetch;
    });
  });
});
