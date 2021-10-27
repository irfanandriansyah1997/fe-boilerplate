import { NullAble } from '../../../../interface/general';

/**
 * Section Hooks Dispatch Parameter Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.10.27
 */
export type ISectionHooksDispatchParameter =
  | NullAble<string>
  | ((param: NullAble<string>) => NullAble<string>);

/**
 * Section Hooks Dispatch Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.10.27
 */
export type ISectionHooksDispatch = (
  param: ISectionHooksDispatchParameter
) => void;

/**
 * Section Hooks Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.10.27
 */
export type ISectionHooks = [NullAble<string>, ISectionHooksDispatch];
