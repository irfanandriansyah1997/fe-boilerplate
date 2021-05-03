/* eslint-disable no-param-reassign */
import produce, { Draft } from 'immer';

import { BASE_REDUCER_INITAL_STATE } from '@/library/store/base/constant';
import {
  IBaseActionsUnion,
  IBaseActionType,
  IBaseReducer
} from '@/library/store/base/interface';

/**
 * Base Reducer
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.02.18
 */
export const BaseReducer = (
  state = BASE_REDUCER_INITAL_STATE,
  action: IBaseActionsUnion
) =>
  produce(state, (draft: Draft<IBaseReducer>) => {
    switch (action.type) {
      case IBaseActionType.SET_TOKEN:
        draft.token = action.payload;

        break;
    }
  });
