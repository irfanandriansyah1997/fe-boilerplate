import { Reducer } from 'react';

import { NullAble } from '../../interface/general';

/**
 * Async Status Enum
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.10.30
 */
export enum IAsyncStatusEnum {
  iddle = `iddle`,
  pending = `pending`,
  rejected = `rejected`,
  resolved = `resolved`
}

/**
 * Async Hooks State Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.10.30
 */
export interface IAsyncHooksState<T> {
  data: T;
  error?: Error;
  status: IAsyncStatusEnum;
}

/**
 * Aync Status Indicator Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.10.30
 */
export interface IAsyncStatusIndicator<T> {
  data: T;
  isError: boolean;
  isIdle: boolean;
  isLoading: boolean;
  isSuccess: boolean;
}

/**
 * Async Hooks Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.10.30
 */
export interface IAsyncHooks<T> extends IAsyncStatusIndicator<T> {
  error?: Error;
  reset(): void;
  run(fn: Promise<T>): Promise<T | Error>;
  setData(param: T): void;
  setError(error: NullAble<Error>): void;
  status: IAsyncStatusEnum;
}

/**
 * Async Reducers Contract Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.10.30
 */
export type IAsyncReducers<T> = Reducer<
  IAsyncHooksState<T>,
  Partial<IAsyncHooksState<T>>
>;
