import { IAction, IActionWithPayload } from '@/modules/redux/interface';

export function CreateAction<T extends string>(type: T): IAction<T>;
export function CreateAction<T extends string, P>(
  type: T,
  payload: P,
  meta?: { [key: string]: string }
): IActionWithPayload<T, P>;

/**
 * Create Action Helper
 * @param {string} type - action type
 * @param {P} payload - payload action
 * @param {Record<string, string>} meta - meta info on action handler
 * @returns {IActionCreatorResponse<P>}
 */
export function CreateAction<P = any>(
  type: string,
  payload?: P,
  meta?: { [key: string]: string }
) {
  return {
    meta,
    payload,
    type
  };
}
