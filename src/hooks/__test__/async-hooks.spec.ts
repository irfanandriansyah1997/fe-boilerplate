import { act, cleanup, renderHook } from '@testing-library/react-hooks';

import { useAsync, useSafeDispatch } from '../async.hooks';
import {
  IAsyncHooks,
  IAsyncStatusEnum,
  IAsyncStatusIndicator
} from '../interface';

/**
 * Generate Value From Use Async Hooks
 * @param {IAsyncHooks<T>} param - use async payload
 * @returns {IAsyncStatusIndicator<T>}
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.11.03
 */
export function getValue<T>({
  data,
  isError,
  isIdle,
  isLoading,
  isSuccess
}: IAsyncHooks<T>): IAsyncStatusIndicator<T> {
  return {
    data,
    isError,
    isIdle,
    isLoading,
    isSuccess
  };
}

describe(`Testing Async Hooks`, () => {
  it(`Testing Hooks Use Safe Dispatch`, () => {
    const fnSpy = jest.fn((param) => param);

    const { result, unmount } = renderHook(() => useSafeDispatch(fnSpy));

    result.current(`sample parameter`);
    expect(fnSpy).toHaveBeenCalledTimes(1);
    expect(fnSpy).toHaveBeenLastCalledWith(`sample parameter`);

    unmount();

    result.current(`sample parameter 2`);
    expect(fnSpy).toHaveBeenCalledTimes(1);
  });

  describe(`Testing Hooks Use Async`, () => {
    let consoleSpy: jest.SpyInstance;

    beforeEach(() => {
      consoleSpy = jest.spyOn(global.console, `error`).mockImplementation();
    });

    it(`Testing With Success Promise`, async () => {
      const MOCK_SUCCESS_PROMISE = new Promise<number>((resolve) => {
        resolve(2021);
      });
      const { result } = renderHook(() =>
        useAsync<number>({
          data: 1997,
          status: IAsyncStatusEnum.iddle
        })
      );
      const { run } = result.current;

      expect(getValue(result.current)).toStrictEqual({
        data: 1997,
        isError: false,
        isIdle: true,
        isLoading: false,
        isSuccess: false
      });

      await act(async () => {
        await run(MOCK_SUCCESS_PROMISE);
      });

      expect(getValue(result.current)).toStrictEqual({
        data: 2021,
        isError: false,
        isIdle: false,
        isLoading: false,
        isSuccess: true
      });
    });

    it(`Testing With Error Promise`, async () => {
      const MOCK_SUCCESS_PROMISE = new Promise<number>(() => {
        throw new Error(`[ERROR] sample error message`);
      });
      const { result } = renderHook(() =>
        useAsync<number>({
          data: 1997,
          status: IAsyncStatusEnum.iddle
        })
      );
      const { run } = result.current;

      expect(result.current.error).toBeUndefined();
      expect(getValue(result.current)).toStrictEqual({
        data: 1997,
        isError: false,
        isIdle: true,
        isLoading: false,
        isSuccess: false
      });

      await act(async () => {
        const response = await run(MOCK_SUCCESS_PROMISE);

        expect(response).toBeInstanceOf(Error);
        expect((response as Error).message).toBe(
          `[ERROR] sample error message`
        );
      });

      expect(result.current.error).not.toBeUndefined();
      expect(result.current.error).toBeInstanceOf(Error);
      expect((result.current.error as Error).message).toBe(
        `[ERROR] sample error message`
      );
      expect(getValue(result.current)).toStrictEqual({
        data: 1997,
        isError: true,
        isIdle: false,
        isLoading: false,
        isSuccess: false
      });
    });

    it(`Testing With Wrong Promise`, async () => {
      const { result } = renderHook(() =>
        useAsync<number>({
          data: 1997,
          status: IAsyncStatusEnum.iddle
        })
      );
      const { run } = result.current;

      await act(async () => {
        try {
          await run((undefined as unknown) as Promise<number>);
        } catch (e) {
          expect(e).toBeInstanceOf(Error);
          expect((e as Error).message).toBe(`The parameter must be promise`);
        }
      });
    });

    it(`Testing Simulate Invoke Set Data & Reset Method`, () => {
      const { result } = renderHook(() =>
        useAsync<number>({
          data: 1997,
          status: IAsyncStatusEnum.iddle
        })
      );
      const {
        current: { reset, setData }
      } = result;

      expect(getValue(result.current).data).toBe(1997);

      act(() => setData(10));
      expect(getValue(result.current).data).toBe(10);

      act(() => reset());
      expect(getValue(result.current).data).toBe(1997);
    });

    it(`Testing Simulate Invoke Set Error Method`, () => {
      const { result } = renderHook(() =>
        useAsync<number>({
          data: 1997,
          status: IAsyncStatusEnum.iddle
        })
      );
      const {
        current: { setError }
      } = result;

      act(() => setError(new Error(`[ERROR] sample error message`)));
      expect(result.current.error).not.toBeUndefined();
      expect(result.current.error).toBeInstanceOf(Error);
      expect((result.current.error as Error).message).toBe(
        `[ERROR] sample error message`
      );
    });

    afterEach(() => {
      consoleSpy.mockRestore();
      cleanup();
    });
  });
});
