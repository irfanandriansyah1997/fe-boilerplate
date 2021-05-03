import { Immutable } from 'immer';

import { BASE_REDUCER_NAME } from '@/library/store/base/constant';

/**
 * Base Reducer
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.02.28
 */
export interface IBaseReducer {
  token: string;
}

/**
 * Base Reducer State
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.02.28
 */
export type IBaseReducerState = Immutable<{
  [BASE_REDUCER_NAME]: IBaseReducer;
}>;
