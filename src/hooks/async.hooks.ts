import { useCallback, useLayoutEffect, useReducer, useRef } from 'react';

import { NullAble } from '../interface/general';
import {
  IAsyncHooks,
  IAsyncHooksState,
  IAsyncReducers,
  IAsyncStatusEnum
} from './interface';

/**
 * Use Safe Dispatch
 * @param {(...args: any) => void} fn - dispatch function
 * @returns {(...args: any) => void}
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.10.29
 */
export function useSafeDispatch<T>(fn: (args: T) => void): (args: T) => void {
  const mounted = useRef(false);

  useLayoutEffect(() => {
    mounted.current = true;

    return () => {
      mounted.current = false;
    };
  }, []);

  return useCallback(
    (args): void => {
      if (mounted.current) fn(args);
    },
    [fn]
  );
}

/**
 * Use Async Hooks
 * @param {IAsyncHooksState<T>} initialState - initial data for default value reducers
 * @returns {IAsyncHooks<T>}
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.10.30
 */
export function useAsync<T = any>(
  initialState: IAsyncHooksState<T>
): IAsyncHooks<T> {
  const initialRef = useRef<IAsyncHooksState<T>>({
    ...initialState
  });

  const [{ data, error, status }, setState] = useReducer<IAsyncReducers<T>>(
    (s, a) => ({
      ...s,
      ...a
    }),
    initialRef.current
  );

  const safeDispatch = useSafeDispatch(setState);

  /**
   * Reset Reducers State
   * @author Irfan Andriansyah <irfan@99.co>
   * @since 2021.10.30
   */
  const reset = useCallback((): void => safeDispatch(initialRef.current), [
    safeDispatch
  ]);

  /**
   * Run Promise
   * @param {Promise<T>} promise - promise function will be execute on this method
   * @returns {Promise<T | Error>}
   * @author Irfan Andriansyah <irfan@99.co>
   * @since 2021.10.30
   */
  const run = useCallback(
    (promise: Promise<T>): Promise<T | Error> => {
      if (!promise || !promise.then) {
        throw new Error(`The parameter must be promise`);
      }

      safeDispatch({
        status: IAsyncStatusEnum.pending
      });

      return promise
        .then((data) => {
          safeDispatch({
            data,
            status: IAsyncStatusEnum.resolved
          });

          return data;
        })
        .catch((error: Error) => {
          safeDispatch({
            error,
            status: IAsyncStatusEnum.rejected
          });

          return error;
        });
    },
    [safeDispatch]
  );

  /**
   * Setter Data To reducers
   * @param {T} data - data will be saved on reducers
   * @author Irfan Andriansyah <irfan@99.co>
   * @since 2021.10.30
   */
  const setData = useCallback((data: T): void => safeDispatch({ data }), [
    safeDispatch
  ]);

  /**
   * Setter Error To reducers
   * @param {NullAble<Error>} error - the parameter will be saved as error attribute value
   * @returns {void}
   * @author Irfan Andriansyah <irfan@99.co>
   * @since 2021.10.30
   */
  const setError = useCallback(
    (error: NullAble<Error>): void => safeDispatch({ error }),
    [safeDispatch]
  );

  return {
    data,
    error,
    isError: status === IAsyncStatusEnum.rejected,
    isIdle: status === IAsyncStatusEnum.iddle,
    isLoading: status === IAsyncStatusEnum.pending,
    isSuccess: status === IAsyncStatusEnum.resolved,
    reset,
    run,
    setData,
    setError,
    status
  };
}
