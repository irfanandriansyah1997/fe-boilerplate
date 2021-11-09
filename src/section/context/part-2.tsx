import {
  ChangeEventHandler,
  createContext,
  FC,
  memo,
  MouseEventHandler,
  useCallback,
  useContext,
  useReducer
} from 'react';

import AppGrid from '../../components/organisms/app-grid';
import {
  DEFAULT_COLUMN,
  DEFAULT_GRID_VALUE,
  DEFAULT_ROW
} from '../../constant';
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

const AppStateContext = createContext<NullAble<Reducer>>(undefined);
const AppDispatchContext = createContext<NullAble<React.Dispatch<Action>>>(
  undefined
);

/**
 * App Reducers
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.10.30
 */
export const AppReducersPart2: GenReducer<Reducer, Action> = (
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
  const [state, dispatch] = useReducer(AppReducersPart2, {
    dogName: ``,
    grid: DEFAULT_GRID_VALUE
  });

  return (
    <AppStateContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>
        {children}
      </AppDispatchContext.Provider>
    </AppStateContext.Provider>
  );
};

/**
 * Use App State
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.10.31
 */
export const useAppState = (): Reducer => {
  const contextValue = useContext(AppStateContext);

  if (contextValue === undefined)
    throw new Error(`useAppState must be used within the AppProvider`);

  return contextValue;
};

/**
 * Use App Dispatch
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.10.31
 */
export const useAppDispatch = (): React.Dispatch<Action> => {
  const contextValue = useContext(AppDispatchContext);

  if (contextValue === undefined)
    throw new Error(`useAppDispatch must be used within the AppProvider`);

  return contextValue;
};

/**
 * Cell Part 2 Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.10.31
 */
let CellPart2: FC<IGrid> = ({ column, row }) => {
  const dispatch = useAppDispatch();
  const { grid } = useAppState();
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

CellPart2 = memo(CellPart2);

/**
 * Grid Part 2 Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.10.31
 */
let GridPart2: FC = () => {
  const dispatch = useAppDispatch();
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
      Cell={CellPart2}
      column={DEFAULT_COLUMN}
      row={DEFAULT_ROW}
      onUpdateGrid={onUpdateGridLayout}
      onForceRerender={forceRendered}
    />
  );
};

GridPart2 = memo(GridPart2);

/**
 * Dog Name Input Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.10.31
 */
const DogNameInputPart2: FC = () => {
  const dispatch = useAppDispatch();
  const { dogName } = useAppState();

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
 * Part 2 Apps
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.10.31
 */
const ContextPart2: FC = () => (
  <div data-testid="context-2">
    <AppProvider>
      <DogNameInputPart2 />
      <GridPart2 />
    </AppProvider>
  </div>
);

export default ContextPart2;
