import {
  ChangeEventHandler,
  createContext,
  FC,
  MouseEventHandler,
  useCallback,
  useContext,
  useReducer
} from 'react';
import {
  atomFamily,
  RecoilRoot,
  useRecoilCallback,
  useRecoilState
} from 'recoil';

import AppGrid from '../../components/organisms/app-grid';
import {
  DEFAULT_COLUMN,
  DEFAULT_GRID_VALUE,
  DEFAULT_ROW
} from '../../constant';
import { useForceRerender } from '../../hooks/render.hooks';
import { IGrid } from '../../interface/component';
import { NullAble } from '../../interface/general';
import { GenRecoilType } from '../../interface/recoil';
import { GenReducer } from '../../interface/reducers';
import DogNameInput from './components/dog-input';
import GridCell from './components/grid-cell';
import {
  IDogReducerPart4 as DogReducer,
  IDogReducerPart4ActionType as DogAction
} from './interface/part-4.interface';
import { ACTION_SET_TEXT } from './constant';

const DogContext = createContext<
  NullAble<[DogReducer, React.Dispatch<DogAction>]>
>(undefined);

const cellAtoms = atomFamily<number, GenRecoilType<IGrid>>({
  default: ({ column, row }) => DEFAULT_GRID_VALUE[row][column],
  key: `cells`
});

/**
 * Use Update Grid Data
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.10.31
 */
export const useUpdateGrid = () =>
  useRecoilCallback(({ set }) => () => {
    for (let indexRow = 0; indexRow < 30; indexRow += 1) {
      for (let indexColumn = 0; indexColumn < 30; indexColumn += 1) {
        set(
          cellAtoms({ column: indexColumn, row: indexRow }),
          Math.floor(Math.random() * 100)
        );
      }
    }
  });

/**
 * Dog Reducers
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.10.31
 */
export const DogReducerPart6: GenReducer<DogReducer, DogAction> = (
  state,
  { payload, type }
) => {
  switch (type) {
    case ACTION_SET_TEXT:
      return {
        ...state,
        dogName: payload
      };

    default:
      return state;
  }
};

/**
 * Dog Provider Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.10.31
 */
export const DogProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(DogReducerPart6, {
    dogName: ``
  });
  const value: [DogReducer, React.Dispatch<DogAction>] = [state, dispatch];

  return <DogContext.Provider value={value}>{children}</DogContext.Provider>;
};

/**
 * Use Dog State
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.10.31
 */
export const useDogState = (): [DogReducer, React.Dispatch<DogAction>] => {
  const contextValue = useContext(DogContext);

  if (contextValue === undefined)
    throw new Error(`useDogState must be used within the DogProvider`);

  return contextValue;
};

/**
 * Cell Part 6 Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.10.31
 */
const CellPart6: FC<IGrid> = ({ column, row }) => {
  const [cell, setCell] = useRecoilState(cellAtoms({ column, row }));

  /**
   * Event handler force update cell value
   * @author Irfan Andriansyah <irfan@99.co>
   * @since 2021.10.31
   */
  const onUpdateGridCellValue: MouseEventHandler<HTMLButtonElement> = (
    e
  ): void => {
    e.preventDefault();
    setCell(Math.floor(Math.random() * 100));
  };

  return <GridCell cell={cell} onClickCell={onUpdateGridCellValue} />;
};

/**
 * Grid Part 6 Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.10.31
 */
const GridPart6: FC = () => {
  const onUpdateGridLayout = useUpdateGrid();
  const forceRendered = useForceRerender();

  return (
    <AppGrid
      Cell={CellPart6 as FC<IGrid>}
      row={DEFAULT_ROW}
      column={DEFAULT_COLUMN}
      onUpdateGrid={onUpdateGridLayout}
      onForceRerender={forceRendered}
    />
  );
};

/**
 * Dog Name Input Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.10.31
 */
const DogNameInputPart6: FC = () => {
  const [{ dogName }, dispatch] = useDogState();

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
 * Part 6 Apps
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.10.31
 */
const Part6: FC = () => (
  <div data-testid="context-6">
    <RecoilRoot>
      <DogProvider>
        <DogNameInputPart6 />
      </DogProvider>
      <GridPart6 />
    </RecoilRoot>
  </div>
);

export default Part6;
