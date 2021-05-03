import { IBaseActionType } from '@/library/store/base/interface';
import { CreateAction } from '@/modules/redux';

/**
 * Base Reducer Public Action
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.02.15
 */
export const BasePublicAction = {
  getToken: () => CreateAction(IBaseActionType.GET_TOKEN)
};

/**
 * Base Reducer Public Action
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.02.15
 */
export const BaseReducerAction = {
  setToken: (payload: string) =>
    CreateAction(IBaseActionType.SET_TOKEN, payload)
};
