import { act, fireEvent, render } from '@testing-library/react';
import { createRef, LegacyRef } from 'react';
import { VirtualItem } from 'react-virtual/types';

import { ICityV2 } from '../../../interface';
import Autocomplete from '..';

const MOCK_ITEM: ICityV2[] = [
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
  }
];

const MOCK_ITEM_SELECTED: ICityV2[] = [...MOCK_ITEM].map(
  (item, index): ICityV2 => {
    if (index === 0) return { ...item, isActive: true };
    return item;
  }
);

const MOCK_VIRTUAL_ITEM: VirtualItem[] = [
  {
    end: 0,
    index: 0,
    key: 0,
    measureRef: jest.fn(),
    size: 60,
    start: 0
  },
  {
    end: 1,
    index: 1,
    key: 1,
    measureRef: jest.fn(),
    size: 60,
    start: 60
  },
  {
    end: 2,
    index: 2,
    key: 2,
    measureRef: jest.fn(),
    size: 60,
    start: 120
  },
  {
    end: 3,
    index: 3,
    key: 3,
    measureRef: jest.fn(),
    size: 60,
    start: 180
  }
];

// Tell Jest to mock all timeout functions
jest.useFakeTimers();

describe(`Testing Autocomplete Virtual Scroll Component`, () => {
  let consoleSpy: jest.SpyInstance;
  const ref = createRef<HTMLDivElement>();

  beforeEach(() => {
    consoleSpy = jest.spyOn(global.console, `error`).mockImplementation();
  });

  it(`Snapshot Testing`, () => {
    const resetSelectedItemSpy = jest.fn();
    const setKeywordSpy = jest.fn();
    const setSelectedItemSpy = jest.fn();

    const { getByTestId, queryByTestId } = render(
      <Autocomplete
        items={MOCK_ITEM}
        listRef={ref as LegacyRef<HTMLDivElement>}
        totalItems={3000}
        virtualItems={MOCK_VIRTUAL_ITEM}
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

  it(`\`setKeyword\` props should be called when user typing`, () => {
    const resetSelectedItemSpy = jest.fn();
    const setKeywordSpy = jest.fn();
    const setSelectedItemSpy = jest.fn();

    const { getByLabelText } = render(
      <Autocomplete
        items={MOCK_ITEM}
        keyword=""
        listRef={ref as LegacyRef<HTMLDivElement>}
        totalItems={3000}
        virtualItems={MOCK_VIRTUAL_ITEM}
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
        listRef={ref as LegacyRef<HTMLDivElement>}
        totalItems={3000}
        virtualItems={MOCK_VIRTUAL_ITEM}
        resetSelectedItem={resetSelectedItemSpy}
        setKeyword={setKeywordSpy}
        setSelectedItem={setSelectedItemSpy}
      >
        <div>Sample Children Props</div>
      </Autocomplete>
    );

    expect(queryAllByTestId(/autocomplete-item/)).toHaveLength(3);
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
      isActive: true,
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
        items={MOCK_ITEM_SELECTED}
        keyword=""
        listRef={ref as LegacyRef<HTMLDivElement>}
        totalItems={3000}
        virtualItems={MOCK_VIRTUAL_ITEM}
        resetSelectedItem={resetSelectedItemSpy}
        setKeyword={setKeywordSpy}
        setSelectedItem={setSelectedItemSpy}
      >
        <div>Sample Children Props</div>
      </Autocomplete>
    );

    expect(queryAllByTestId(/autocomplete-item/)).toHaveLength(3);
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
