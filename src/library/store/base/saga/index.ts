import { put, takeLatest } from 'redux-saga/effects';

import { BaseReducerAction } from '@/library/store/base/action';
import { IBaseActionType } from '@/library/store/base/interface';

/**
 * Load Get Token Worker
 * @returns {Generator}
 */
function* loadGetTokenWorker() {
  yield put(BaseReducerAction.setToken(`${Math.random() * 10000}`));
}

/**
 * Load Token
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.02.15
 */
export function* loadToken() {
  yield takeLatest(IBaseActionType.GET_TOKEN, loadGetTokenWorker);
}
