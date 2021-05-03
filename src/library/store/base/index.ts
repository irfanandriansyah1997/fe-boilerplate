import { ISagaModule } from 'redux-dynamic-modules-saga';

import { BasePublicAction } from './action/base.action-creator';
import { BASE_REDUCER_NAME } from './constant';
import { IBaseReducerState } from './interface';
import { BaseReducer } from './reducer';
import { loadToken } from './saga';

/**
 * Base Reducer Module
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.02.28
 */
export const BaseReducerModule = (): ISagaModule<IBaseReducerState> => ({
  id: BASE_REDUCER_NAME,
  initialActions: [BasePublicAction.getToken()],
  reducerMap: {
    [BASE_REDUCER_NAME]: BaseReducer
  } as any,
  sagas: [loadToken]
});
