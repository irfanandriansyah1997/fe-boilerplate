import { Action } from 'redux';

/**
 * Action Param Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.02.08
 */
export interface IAction<T> extends Action<T> {
  meta?: Record<string, string>;
}

/**
 * Action Creator Payload
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.02.18
 */
export type IActionCreatorPayload<P> = {
  payload: P;
};

/**
 * Action Creator Instance
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.02.08
 */
export type IActionCreatorResponse<P> = {
  meta?: Record<string, string>;
  payload?: P;
  type: string;
};

/**
 * Action With Payload Param Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.02.08
 */
export interface IActionWithPayload<T extends string, P> extends IAction<T> {
  payload: P;
}

/**
 * Action Creator Map Object
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.02.08
 */
type IActionsCreatorsMapObject = {
  [actionCreator: string]: (...args: any[]) => any;
};

/**
 * For get all return every method object
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.02.08
 */
export type IActionsUnion<A extends IActionsCreatorsMapObject> = ReturnType<
  A[keyof A]
>;
