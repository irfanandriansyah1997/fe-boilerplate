import { act } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';

import { simulateResize } from '../../../../helper';
import { useMasonry } from '../hooks';
import { IMasonryItem } from '../interface';

const MOCK_ITEM: IMasonryItem[] = Array.from({
  length: 8
}).map(
  (_, index): IMasonryItem => ({
    item: {
      name: `name-${index}`,
      no: index
    },
    key: `name-${index}`
  })
);

describe(`Testing Masonry Layout Hooks`, () => {
  it(`Testing Simulate Render useMasonry Hooks On Desktop Site`, async () => {
    const { result } = renderHook(() => useMasonry(MOCK_ITEM, 4));

    await act(simulateResize(1366));
    expect(result.current.gridCount).toBe(4);
    expect(result.current.item).toStrictEqual([
      {
        item: [
          { item: { name: `name-0`, no: 0 }, key: `name-0` },
          { item: { name: `name-4`, no: 4 }, key: `name-4` }
        ],
        key: `name-0-name-4`
      },
      {
        item: [
          { item: { name: `name-1`, no: 1 }, key: `name-1` },
          { item: { name: `name-5`, no: 5 }, key: `name-5` }
        ],
        key: `name-1-name-5`
      },
      {
        item: [
          { item: { name: `name-2`, no: 2 }, key: `name-2` },
          { item: { name: `name-6`, no: 6 }, key: `name-6` }
        ],
        key: `name-2-name-6`
      },
      {
        item: [
          { item: { name: `name-3`, no: 3 }, key: `name-3` },
          { item: { name: `name-7`, no: 7 }, key: `name-7` }
        ],
        key: `name-3-name-7`
      }
    ]);
  });

  it(`Testing Simulate Render useMasonry Hooks On Mobile Desktop Site`, async () => {
    const { result } = renderHook(() => useMasonry(MOCK_ITEM, 4));

    await act(simulateResize(1200));
    expect(result.current.gridCount).toBe(4);
    expect(result.current.item).toStrictEqual([
      {
        item: [
          { item: { name: `name-0`, no: 0 }, key: `name-0` },
          { item: { name: `name-4`, no: 4 }, key: `name-4` }
        ],
        key: `name-0-name-4`
      },
      {
        item: [
          { item: { name: `name-1`, no: 1 }, key: `name-1` },
          { item: { name: `name-5`, no: 5 }, key: `name-5` }
        ],
        key: `name-1-name-5`
      },
      {
        item: [
          { item: { name: `name-2`, no: 2 }, key: `name-2` },
          { item: { name: `name-6`, no: 6 }, key: `name-6` }
        ],
        key: `name-2-name-6`
      },
      {
        item: [
          { item: { name: `name-3`, no: 3 }, key: `name-3` },
          { item: { name: `name-7`, no: 7 }, key: `name-7` }
        ],
        key: `name-3-name-7`
      }
    ]);
  });

  it(`Testing Simulate Render useMasonry Hooks On Tablet Site`, async () => {
    const { result } = renderHook(() => useMasonry(MOCK_ITEM, 4));

    await act(simulateResize(1024));
    expect(result.current.gridCount).toBe(2);
    expect(result.current.item).toStrictEqual([
      {
        item: [
          { item: { name: `name-0`, no: 0 }, key: `name-0` },
          { item: { name: `name-2`, no: 2 }, key: `name-2` },
          { item: { name: `name-4`, no: 4 }, key: `name-4` },
          { item: { name: `name-6`, no: 6 }, key: `name-6` }
        ],
        key: `name-0-name-2-name-4-name-6`
      },
      {
        item: [
          { item: { name: `name-1`, no: 1 }, key: `name-1` },
          { item: { name: `name-3`, no: 3 }, key: `name-3` },
          { item: { name: `name-5`, no: 5 }, key: `name-5` },
          { item: { name: `name-7`, no: 7 }, key: `name-7` }
        ],
        key: `name-1-name-3-name-5-name-7`
      }
    ]);
  });

  it(`Testing Simulate Render useMasonry Hooks On Mobile Site`, async () => {
    const { result } = renderHook(() => useMasonry(MOCK_ITEM, 4));

    await act(simulateResize(366));
    expect(result.current.gridCount).toBe(1);
    expect(result.current.item).toStrictEqual([
      {
        item: [
          { item: { name: `name-0`, no: 0 }, key: `name-0` },
          { item: { name: `name-1`, no: 1 }, key: `name-1` },
          { item: { name: `name-2`, no: 2 }, key: `name-2` },
          { item: { name: `name-3`, no: 3 }, key: `name-3` },
          { item: { name: `name-4`, no: 4 }, key: `name-4` },
          { item: { name: `name-5`, no: 5 }, key: `name-5` },
          { item: { name: `name-6`, no: 6 }, key: `name-6` },
          { item: { name: `name-7`, no: 7 }, key: `name-7` }
        ],
        key: `name-0-name-1-name-2-name-3-name-4-name-5-name-6-name-7`
      }
    ]);
  });
});
