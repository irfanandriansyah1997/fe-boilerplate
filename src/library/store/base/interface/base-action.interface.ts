import { BaseReducerAction } from '@/library/store/base/action';
import { IActionsUnion } from '@/modules/redux/interface';

/**
 * Base Action Type
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.02.17
 */
export enum IBaseActionType {
  SET_TOKEN = `base-reducers/SET_TOKEN`,
  GET_TOKEN = `base-reducers/GET_TOKEN`
}

/**
 * Base Action Union
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.02.17
 */
export type IBaseActionsUnion = IActionsUnion<typeof BaseReducerAction>;
