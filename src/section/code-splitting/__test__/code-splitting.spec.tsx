/* eslint-disable import/no-extraneous-dependencies */
import { act, render, waitFor } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Route, Router } from 'react-router-dom';

import '../../../components/organisms/markdown-reader/__test__/markdown-reader-mock.spec';
import CodeSplitting from '..';

/**
 * MOCK_FETCH
 * @returns {Promise<Response>}
 */
const MOCK_FETCH = (): Promise<Response> =>
  new Promise((resolve) => {
    resolve(({
      status: 200,
      text: () => `### Hello World \n Sample Text On Markdown`
    } as unknown) as Response);
  });

describe(`Testing Code Splitting Router`, () => {
  describe(`Snapshot Testing`, () => {
    const tempFetch = global.fetch;

    beforeEach(() => {
      global.fetch = jest.fn().mockImplementation(MOCK_FETCH);
    });

    it(`Testing Routing Part 1, 2 & 3`, async () => {
      const history = createMemoryHistory();

      /**
       * Redirect To Part 1
       */
      act(() => {
        history.push(`/code-splitting/part-1`);
      });

      const { getByTestId, queryByTestId } = render(
        <Router history={history}>
          <Route path="/code-splitting">
            <CodeSplitting />
          </Route>
        </Router>
      );

      await waitFor(() => {
        expect(getByTestId(`code-splitting-1`)).toBeInTheDocument();
        expect(queryByTestId(`code-splitting-2`)).not.toBeInTheDocument();
        expect(queryByTestId(`code-splitting-3`)).not.toBeInTheDocument();

        expect(getByTestId(`code-splitting-1`)).toMatchSnapshot();
      });

      /**
       * Redirect To Part 2
       */
      act(() => {
        history.push(`/code-splitting/part-2`);
      });

      await waitFor(() => {
        expect(queryByTestId(`code-splitting-1`)).not.toBeInTheDocument();
        expect(getByTestId(`code-splitting-2`)).toBeInTheDocument();
        expect(queryByTestId(`code-splitting-3`)).not.toBeInTheDocument();

        expect(getByTestId(`code-splitting-2`)).toMatchSnapshot();
      });

      /**
       * Redirect To Part 3
       */
      act(() => {
        history.push(`/code-splitting/part-3`);
      });

      await waitFor(() => {
        expect(queryByTestId(`code-splitting-1`)).not.toBeInTheDocument();
        expect(queryByTestId(`code-splitting-2`)).not.toBeInTheDocument();
        expect(getByTestId(`code-splitting-3`)).toBeInTheDocument();

        expect(getByTestId(`code-splitting-3`)).toMatchSnapshot();
      });
    });

    afterEach(() => {
      global.fetch = tempFetch;
    });
  });
});
