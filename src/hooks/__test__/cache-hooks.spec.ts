import { act, renderHook } from '@testing-library/react-hooks';

import { appsCache } from '../cache.hooks';

describe(`Testing Apps Cache`, () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(global.console, `error`).mockImplementation();
  });

  it(`Testing Simulate Save Cache`, async () => {
    const {
      result: {
        current: { saveCache }
      }
    } = renderHook(() => appsCache());

    await act(async () => {
      await saveCache(`data`, `hello world`);
    });

    expect(localStorage.setItem).toHaveBeenCalledWith(`data`, `hello world`);
  });

  it(`Testing Simulate Get Cache With Exist Data`, async () => {
    const {
      result: {
        current: { getCache }
      }
    } = renderHook(() => appsCache());

    await act(async () => {
      const response = await getCache(`data`);

      expect(response).toBe(`hello world`);
    });

    expect(localStorage.getItem).toHaveBeenCalledWith(`data`);
  });

  it(`Testing Simulate Get Cache With Wrong Key`, async () => {
    const {
      result: {
        current: { getCache }
      }
    } = renderHook(() => appsCache());

    await act(async () => {
      const response = await getCache(`wrong-key`);

      expect(response).toBeUndefined();
    });

    expect(localStorage.getItem).toHaveBeenCalledWith(`wrong-key`);
  });

  it(`Testing Simulate Delete Cache`, async () => {
    const {
      result: {
        current: { deleteCache, getCache }
      }
    } = renderHook(() => appsCache());

    await act(async () => {
      await deleteCache(`data`);
      const response = await getCache(`data`);

      expect(response).toBeUndefined();
    });
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });
});
