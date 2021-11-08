import { act, fireEvent, render, waitFor } from '@testing-library/react';

import { ICity } from '../../../interface';
import Autocomplete from '..';

const MOCK_ITEM: ICity[] = [
  {
    country: `US`,
    id: `Bay Minette`,
    lat: `30.88296`,
    lng: `-87.77305`,
    name: `Bay Minette`
  },
  {
    country: `US`,
    id: `Edna`,
    lat: `28.97859`,
    lng: `-96.64609`,
    name: `Edna`
  },
  {
    country: `US`,
    id: `Bayou La Batre`,
    lat: `30.40352`,
    lng: `-88.24852`,
    name: `Bayou La Batre`
  },
  {
    country: `US`,
    id: `Henderson`,
    lat: `32.15322`,
    lng: `-94.79938`,
    name: `Henderson`
  },
  {
    country: `US`,
    id: `Natalia`,
    lat: `29.18968`,
    lng: `-98.86253`,
    name: `Natalia`
  },
  {
    country: `US`,
    id: `Bear Creek`,
    lat: `34.27482`,
    lng: `-87.70058`,
    name: `Bear Creek`
  }
];

// Tell Jest to mock all timeout functions
jest.useFakeTimers();

describe(`Testing Autocomplete Item`, () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(global.console, `error`).mockImplementation();
  });

  describe(`Snapshot Testing`, () => {
    it(`Testing Initial Render`, () => {
      const resetSelectedItemSpy = jest.fn();
      const setKeywordSpy = jest.fn();
      const setSelectedItemSpy = jest.fn();

      const { getByTestId, queryByTestId } = render(
        <Autocomplete
          items={MOCK_ITEM}
          keyword=""
          resetSelectedItem={resetSelectedItemSpy}
          setKeyword={setKeywordSpy}
          setSelectedItem={setSelectedItemSpy}
        >
          <div>Sample Children Props</div>
        </Autocomplete>
      );

      expect(queryByTestId(/^autocomplete$/i)).toBeInTheDocument();
      expect(getByTestId(/^autocomplete$/i)).toMatchSnapshot();
    });

    it(`Testing When Keyword Is Not Empty`, () => {
      const resetSelectedItemSpy = jest.fn();
      const setKeywordSpy = jest.fn();
      const setSelectedItemSpy = jest.fn();

      const { getByTestId, queryByTestId } = render(
        <Autocomplete
          items={MOCK_ITEM}
          keyword="sample-keyword"
          resetSelectedItem={resetSelectedItemSpy}
          setKeyword={setKeywordSpy}
          setSelectedItem={setSelectedItemSpy}
        >
          <div>Sample Children Props</div>
        </Autocomplete>
      );

      expect(queryByTestId(/^autocomplete$/i)).toBeInTheDocument();
      expect(getByTestId(/^autocomplete$/i)).toMatchSnapshot();
    });

    it(`Testing When Selected Item Is Defined`, async () => {
      const resetSelectedItemSpy = jest.fn();
      const setKeywordSpy = jest.fn();
      const setSelectedItemSpy = jest.fn();

      const { getByTestId, queryByTestId } = render(
        <Autocomplete
          items={MOCK_ITEM}
          keyword=""
          selectedItem={MOCK_ITEM[0]}
          resetSelectedItem={resetSelectedItemSpy}
          setKeyword={setKeywordSpy}
          setSelectedItem={setSelectedItemSpy}
        >
          <div>Sample Children Props</div>
        </Autocomplete>
      );

      // Fast-forward time
      jest.runAllTimers();

      await waitFor(() => {
        expect(queryByTestId(/^autocomplete$/i)).toBeInTheDocument();
        expect(getByTestId(/^autocomplete$/i)).toMatchSnapshot();
      });
    });
  });

  it(`\`setKeyword\` props should be called when user typing`, () => {
    const resetSelectedItemSpy = jest.fn();
    const setKeywordSpy = jest.fn();
    const setSelectedItemSpy = jest.fn();

    const { getByLabelText } = render(
      <Autocomplete
        items={MOCK_ITEM}
        keyword=""
        resetSelectedItem={resetSelectedItemSpy}
        setKeyword={setKeywordSpy}
        setSelectedItem={setSelectedItemSpy}
      >
        <div>Sample Children Props</div>
      </Autocomplete>
    );

    act(() => {
      fireEvent.change(getByLabelText(/autocomplete-input/), {
        target: {
          value: `Callifornia`
        }
      });
    });

    // Fast-forward time
    jest.runAllTimers();
    expect(setKeywordSpy).toHaveBeenCalledWith(`Callifornia`);
  });

  it(`\`setSelectedItem\` props should be called when user click some of autocomplete item`, () => {
    const resetSelectedItemSpy = jest.fn();
    const setKeywordSpy = jest.fn();
    const setSelectedItemSpy = jest.fn();

    const { queryAllByTestId, queryByTestId } = render(
      <Autocomplete
        items={MOCK_ITEM}
        keyword=""
        resetSelectedItem={resetSelectedItemSpy}
        setKeyword={setKeywordSpy}
        setSelectedItem={setSelectedItemSpy}
      >
        <div>Sample Children Props</div>
      </Autocomplete>
    );

    expect(queryAllByTestId(/autocomplete-item/)).toHaveLength(6);
    expect(queryByTestId(/autocomplete-reset/)).not.toBeInTheDocument();

    /**
     * Simulate Click Autocomplete Item
     */
    act(() => {
      fireEvent.click(queryAllByTestId(/autocomplete-item/)[0]);
    });

    expect(setSelectedItemSpy).toHaveBeenCalledWith({
      country: `US`,
      id: `Bay Minette`,
      lat: `30.88296`,
      lng: `-87.77305`,
      name: `Bay Minette`
    });
  });

  it(`Simulate user click reset button`, () => {
    const resetSelectedItemSpy = jest.fn();
    const setKeywordSpy = jest.fn();
    const setSelectedItemSpy = jest.fn();

    const {
      getAllByTestId,
      getByTestId,
      queryAllByTestId,
      queryByTestId
    } = render(
      <Autocomplete
        items={MOCK_ITEM}
        keyword=""
        selectedItem={MOCK_ITEM[0]}
        resetSelectedItem={resetSelectedItemSpy}
        setKeyword={setKeywordSpy}
        setSelectedItem={setSelectedItemSpy}
      >
        <div>Sample Children Props</div>
      </Autocomplete>
    );

    expect(queryAllByTestId(/autocomplete-item/)).toHaveLength(6);
    expect(queryByTestId(/autocomplete-reset/)).toBeInTheDocument();
    const [firstElement, secondElement] = getAllByTestId(/autocomplete-item/);

    expect(firstElement).toHaveClass(`autocomplete__content-item--active`);
    expect(secondElement).not.toHaveClass(`autocomplete__content-item--active`);

    /**
     * Simulate Reset Autocomplete
     */
    fireEvent.click(getByTestId(/autocomplete-reset/));
    expect(resetSelectedItemSpy).toHaveBeenCalled();
  });

  afterEach(() => {
    consoleSpy.mockClear();
  });
});
