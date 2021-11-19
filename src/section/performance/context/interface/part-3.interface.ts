import { IGrid } from '../../../../interface/component';
import { GenActionMap } from '../../../../interface/reducers';
import { ACTION_UPDATE_GRID, ACTION_UPDATE_GRID_CELL } from '../constant';

/**
 * App Reducers Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.10.30
 */
export interface IAppReducerPart3 {
  grid: number[][];
}

/**
 * App Reducer Part 3 Payload Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.10.30
 */
export interface IAppReducerPart3Payload {
  [ACTION_UPDATE_GRID]: undefined;
  [ACTION_UPDATE_GRID_CELL]: IGrid;
}

export type IAppReducerPart3ActionType = GenActionMap<IAppReducerPart3Payload>[keyof GenActionMap<IAppReducerPart3Payload>];
