import { IGrid } from '../../../../interface/component';
import { GenActionMap } from '../../../../interface/reducers';
import {
  ACTION_SET_TEXT,
  ACTION_UPDATE_GRID,
  ACTION_UPDATE_GRID_CELL
} from '../constant';

/**
 * App Reducers Part 4 Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.10.30
 */
export interface IAppReducerPart4 {
  grid: number[][];
}

/**
 * App Reducer Part 4 Payload Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.10.30
 */
export interface IAppReducerPart4Payload {
  [ACTION_UPDATE_GRID]: undefined;
  [ACTION_UPDATE_GRID_CELL]: IGrid;
}

export type IAppReducerPart4ActionType = GenActionMap<IAppReducerPart4Payload>[keyof GenActionMap<IAppReducerPart4Payload>];

/**
 * Dog Reducer Part 4 Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.10.31
 */
export interface IDogReducerPart4 {
  dogName: string;
}

/**
 * Dog Reducer Part 4 Payload Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.10.30
 */
export interface IDogReducerPart4Payload {
  [ACTION_SET_TEXT]: string;
}

export type IDogReducerPart4ActionType = GenActionMap<IDogReducerPart4Payload>[keyof GenActionMap<IDogReducerPart4Payload>];
