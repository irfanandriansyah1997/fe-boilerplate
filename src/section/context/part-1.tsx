import {
  ChangeEventHandler,
  createContext,
  FC,
  memo,
  MouseEventHandler,
  useCallback,
  useContext,
  useMemo,
  useReducer
} from 'react';

import AppGrid from '../../components/organisms/app-grid';
import { DEFAULT_GRID_VALUE } from '../../constant';
import { updateGridCellState, updateGridState } from '../../helper/grid.helper';
import { useForceRerender } from '../../hooks/render.hooks';
import { IGrid } from '../../interface/component';
import { NullAble } from '../../interface/general';
import { GenReducer } from '../../interface/reducers';
import DogNameInput from './components/dog-input';
import GridCell from './components/grid-cell';
import {
  IAppReducerPart1 as Reducer,
  IAppReducerPart1ActionType as Action
} from './interface/part-1.interface';
import {
  ACTION_SET_TEXT,
  ACTION_UPDATE_GRID,
  ACTION_UPDATE_GRID_CELL
} from './constant';

const AppContext = createContext<NullAble<[Reducer, React.Dispatch<Action>]>>(
  undefined
);

/**
 * App Reducers
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.10.30
 */
export const AppReducersPart1: GenReducer<Reducer, Action> = (
  state,
  { payload, type }
): Reducer => {
  switch (type) {
    case ACTION_SET_TEXT:
      return {
        ...state,
        dogName: payload as string
      };

    case ACTION_UPDATE_GRID:
      return {
        ...state,
        grid: updateGridState(state.grid)
      };

    case ACTION_UPDATE_GRID_CELL:
      return {
        ...state,
        grid: updateGridCellState(state.grid, payload as IGrid)
      };

    default:
      return state;
  }
};

/**
 * App Provider Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.10.31
 */
export const AppProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducersPart1, {
    dogName: ``,
    grid: DEFAULT_GRID_VALUE
  });
  const value: [Reducer, React.Dispatch<Action>] = useMemo(
    () => [state, dispatch],
    [state, dispatch]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

/**
 * Use App State
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.10.31
 */
export const useAppState = (): [Reducer, React.Dispatch<Action>] => {
  const contextValue = useContext(AppContext);

  if (contextValue === undefined)
    throw new Error(`useAppState must be used within the AppProvider`);

  return contextValue;
};

/**
 * Cell Part 1 Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.10.31
 */
let CellPart1: FC<IGrid> = ({ column, row }) => {
  const [{ grid }, dispatch] = useAppState();
  const cell = grid[row][column];

  /**
   * Event handler force update cell value
   * @author Irfan Andriansyah <irfan@99.co>
   * @since 2021.10.31
   */
  const onUpdateGridCellValue: MouseEventHandler<HTMLButtonElement> = useCallback(
    (e): void => {
      e.preventDefault();
      dispatch({
        payload: {
          column,
          row
        },
        type: `UPDATE_GRID_CELL`
      });
    },
    [column, dispatch, row]
  );

  return <GridCell cell={cell} onClickCell={onUpdateGridCellValue} />;
};

CellPart1 = memo(CellPart1);

/**
 * Grid Part 1 Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.10.31
 */
let GridPart1: FC = () => {
  const [, dispatch] = useAppState();
  const forceRendered = useForceRerender();

  /**
   * On Update Grid Layout Event Handler
   * @author Irfan Andriansyah <irfan@99.co>
   * @since 2021.10.31
   */
  const onUpdateGridLayout = (): void =>
    dispatch({
      type: `UPDATE_GRID`
    });

  return (
    <AppGrid
      Cell={CellPart1}
      onUpdateGrid={onUpdateGridLayout}
      onForceRerender={forceRendered}
    />
  );
};

GridPart1 = memo(GridPart1);

/**
 * Dog Name Input Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.10.31
 */
const DogNameInputPart1: FC = () => {
  const [{ dogName }, dispatch] = useAppState();

  /**
   * On Change Value Input
   * @author Irfan Andriansyah <irfan@99.co>
   * @description Event handler useful for change dogname on app reducers via dispatch variable
   * @since 2021.10.31
   */
  const onChangeValue: ChangeEventHandler<HTMLInputElement> = useCallback(
    ({ target: { value } }): void => {
      dispatch({
        payload: value,
        type: `TYPE_DOG_INPUT`
      });
    },
    [dispatch]
  );

  return <DogNameInput dogName={dogName} onChangeDogName={onChangeValue} />;
};

/**
 * Part 1 Apps
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.10.31
 */
const Part1: FC = () => (
  <div>
    <AppProvider>
      <DogNameInputPart1 />
      <GridPart1 />
    </AppProvider>
  </div>
);

export default Part1;
