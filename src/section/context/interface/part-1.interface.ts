import { IGrid } from '../../../interface/component';
import { GenActionMap } from '../../../interface/reducers';
import {
  ACTION_SET_TEXT,
  ACTION_UPDATE_GRID,
  ACTION_UPDATE_GRID_CELL
} from '../constant';

/**
 * App Reducers Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.10.30
 */
export interface IAppReducerPart1 {
  dogName: string;
  grid: number[][];
}

/**
 * App Reducer Part 1 Payload Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.10.30
 */
export interface IAppReducerPart1Payload {
  [ACTION_SET_TEXT]: string;
  [ACTION_UPDATE_GRID]: undefined;
  [ACTION_UPDATE_GRID_CELL]: IGrid;
}

export type IAppReducerPart1ActionType = GenActionMap<IAppReducerPart1Payload>[keyof GenActionMap<IAppReducerPart1Payload>];
