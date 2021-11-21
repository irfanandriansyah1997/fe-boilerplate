import { act, fireEvent, render, waitFor } from '@testing-library/react';

import { ISectionContext } from '../../../../components/templates/section/interface';
import CodeSplittingPart1 from '../part-1';

const setMarkdownURLSpy = jest.fn();
jest.mock(
  `../../../../components/templates/section/hooks/section.hook`,
  () => ({
    ...jest.requireActual(
      `../../../../components/templates/section/hooks/section.hook`
    ),
    useSectionContext: (): ISectionContext => ({
      action: {
        setMarkdownURL: setMarkdownURLSpy
      },
      state: {
        markdownURL: undefined
      }
    })
  })
);

describe(`Testing Part 1 Code Splitting Session`, () => {
  it(`Snapshot Testing`, () => {
    const { container } = render(<CodeSplittingPart1 />);

    expect(container).toMatchSnapshot();
  });

  it(`Custom component should show and hide`, async () => {
    const { container, getByTestId, queryByTestId } = render(
      <CodeSplittingPart1 />
    );

    expect(setMarkdownURLSpy).toHaveBeenCalledWith(expect.any(String));

    /**
     * Checking Element & Classname
     */
    expect(queryByTestId(/custom-component/)).not.toBeInTheDocument();
    expect(getByTestId(/navbar-toggle-button-inactive/)).toHaveClass(
      `navbar-toggle__button--active`
    );
    expect(getByTestId(/navbar-toggle-button-active/)).not.toHaveClass(
      `navbar-toggle__button--active`
    );

    /**
     * Simulate Click Active Button
     */
    act(() => {
      fireEvent.click(getByTestId(/navbar-toggle-button-active/));
    });

    await waitFor(() => {
      /**
       * Checking Element & Classname
       * After User Click Active Button
       */
      expect(getByTestId(/custom-component/)).toBeInTheDocument();
      expect(container).toMatchSnapshot();
      expect(getByTestId(/navbar-toggle-button-inactive/)).not.toHaveClass(
        `navbar-toggle__button--active`
      );
      expect(getByTestId(/navbar-toggle-button-active/)).toHaveClass(
        `navbar-toggle__button--active`
      );
    });

    /**
     * Simulate Click Inactive Button
     */
    act(() => {
      fireEvent.click(getByTestId(/navbar-toggle-button-inactive/));
    });

    /**
     * Checking Element & Classname
     * After User Click Inactive Button
     */
    expect(queryByTestId(/custom-component/)).not.toBeInTheDocument();
    expect(getByTestId(/navbar-toggle-button-inactive/)).toHaveClass(
      `navbar-toggle__button--active`
    );
    expect(getByTestId(/navbar-toggle-button-active/)).not.toHaveClass(
      `navbar-toggle__button--active`
    );
  });
});
