import { act, fireEvent, render, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import '../../../organisms/markdown-reader/__test__/markdown-reader-mock.spec';
import { simulateResize } from '../../../../helper';
import { IMenu } from '../../../../interface/component';
import SectionTemplates from '..';
import { MOCK_FETCH_SECTION, MockComponentSection } from './section-mock.spec';

const MOCK_MENU: IMenu = {
  menu: [
    {
      text: `Wrap Use Memo`,
      to: `/context/part-1`
    },
    {
      text: `Separate Context Value`,
      to: `/context/part-2`
    },
    {
      text: `Colocate State`,
      to: `/context/part-3`
    }
  ],
  subtitle: `Sample Subtitle`,
  title: `Sample Title`
};

const pushSpy = jest.fn();

jest.mock(`react-router-dom`, () => ({
  ...jest.requireActual(`react-router-dom`),
  useHistory: () => ({
    push: pushSpy
  })
}));

describe(`Testing Section HOC Render On Browser`, () => {
  const tempFetch = global.fetch;

  beforeEach(() => {
    global.fetch = jest.fn().mockImplementation(MOCK_FETCH_SECTION);
  });

  it(`Snapshot Testing`, async () => {
    const Component = SectionTemplates(MockComponentSection, MOCK_MENU);

    const { container, getByTestId, getByText } = render(
      <MemoryRouter initialEntries={[`/context/part-1`]}>
        <Component />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(getByTestId(/markdown-code/)).toBeInTheDocument();
      expect(fetch).toHaveBeenCalledWith(`sample-url`);
      expect(getByText(/^Hello World$/i)).toBeInTheDocument();
    });

    expect(container).toMatchSnapshot();
  });

  it(`Simulate User Click Back To Homepage`, async () => {
    const Component = SectionTemplates(MockComponentSection, MOCK_MENU);

    const { getByTestId, getByText } = render(
      <MemoryRouter initialEntries={[`/context/part-1`]}>
        <Component />
      </MemoryRouter>
    );

    /**
     * Simulate Resize Desktop Size
     */
    await act(simulateResize(1366));

    await waitFor(() => {
      expect(getByTestId(/markdown-code/)).toBeInTheDocument();

      /**
       * Expect Data From Local Storage Not Fetch API
       */
      expect(localStorage.getItem).toHaveBeenCalledWith(`sample-url`);
      expect(fetch).not.toHaveBeenCalled();
    });

    /**
     * Simulate User Click Back Button
     */
    const buttonBack = getByText(/arrow_back/);
    fireEvent.click(buttonBack);

    expect(pushSpy).toHaveBeenCalledWith(`/`);
  });

  afterEach(() => {
    jest.clearAllMocks();

    global.fetch = tempFetch;
  });
});
