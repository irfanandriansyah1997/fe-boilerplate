import {
  ChangeEventHandler,
  createContext,
  FC,
  memo,
  MouseEventHandler,
  useCallback,
  useContext,
  useReducer,
  useState
} from 'react';

import AppGrid from '../../../components/organisms/app-grid';
import {
  DEFAULT_COLUMN,
  DEFAULT_GRID_VALUE,
  DEFAULT_ROW
} from '../../../constant';
import {
  updateGridCellState,
  updateGridState
} from '../../../helper/grid.helper';
import { useForceRerender } from '../../../hooks/render.hooks';
import { IGrid } from '../../../interface/component';
import { NullAble } from '../../../interface/general';
import { GenReducer } from '../../../interface/reducers';
import DogNameInput from './components/dog-input';
import GridCell from './components/grid-cell';
import {
  IAppReducerPart3 as Reducer,
  IAppReducerPart3ActionType as Action
} from './interface/part-3.interface';
import { ACTION_UPDATE_GRID, ACTION_UPDATE_GRID_CELL } from './constant';

const AppStateContext = createContext<NullAble<Reducer>>(undefined);
const AppDispatchContext = createContext<NullAble<React.Dispatch<Action>>>(
  undefined
);

/**
 * App Reducers
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.10.30
 */
export const AppReducersPart3: GenReducer<Reducer, Action> = (
  state,
  { payload, type }
): Reducer => {
  switch (type) {
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
  const [state, dispatch] = useReducer(AppReducersPart3, {
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
 * Cell Part 3 Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.10.31
 */
let CellPart3: FC<IGrid> = ({ column, row }) => {
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

CellPart3 = memo(CellPart3);

/**
 * Grid Part 3 Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.10.31
 */
let GridPart3: FC = () => {
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
      Cell={CellPart3}
      column={DEFAULT_COLUMN}
      row={DEFAULT_ROW}
      onUpdateGrid={onUpdateGridLayout}
      onForceRerender={forceRendered}
    />
  );
};

GridPart3 = memo(GridPart3);

/**
 * Dog Name Input Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.10.31
 */
const DogNameInputPart3: FC = () => {
  const [dogName, setDogName] = useState(``);

  /**
   * On Change Value Input
   * @author Irfan Andriansyah <irfan@99.co>
   * @description Event handler useful for change dogname on app reducers via dispatch variable
   * @since 2021.10.31
   */
  const onChangeValue: ChangeEventHandler<HTMLInputElement> = useCallback(
    ({ target: { value } }): void => {
      setDogName(value);
    },
    []
  );

  return <DogNameInput dogName={dogName} onChangeDogName={onChangeValue} />;
};

/**
 * Part 3 Apps
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.10.31
 */
const Part3: FC = () => (
  <div data-testid="context-3">
    <AppProvider>
      <DogNameInputPart3 />
      <GridPart3 />
    </AppProvider>
  </div>
);

export default Part3;
