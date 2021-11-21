import { DEFAULT_GRID_VALUE } from '../../../../../constant';
import { ACTION_UPDATE_GRID, ACTION_UPDATE_GRID_CELL } from '../../constant';
import { AppReducersPart3 } from '../../part-3';

jest.mock(`../../../../../constant`, () => ({
  ...jest.requireActual(`../../../../../constant`),
  DEFAULT_COLUMN: 2,
  DEFAULT_GRID_VALUE: Array.from({ length: 2 }, () =>
    Array.from({ length: 2 }, () => 58)
  ),
  DEFAULT_ROW: 2
}));

describe(`Testing App Reducer Part 3`, () => {
  let mathFloorSpy: jest.SpyInstance;
  let mathRandomnrSpy: jest.SpyInstance;

  beforeEach(() => {
    mathFloorSpy = jest.spyOn(global.Math, `floor`).mockReturnValue(13);
    mathRandomnrSpy = jest
      .spyOn(global.Math, `random`)
      .mockReturnValue(13 / 100);
  });

  it(`Simulate Update Grid Value`, () => {
    const { grid } = AppReducersPart3(
      {
        grid: DEFAULT_GRID_VALUE
      },
      {
        type: ACTION_UPDATE_GRID
      }
    );

    expect(grid).toStrictEqual([
      [13, 13],
      [13, 13]
    ]);
  });

  it(`Simulate Update Grid Cell Value`, () => {
    const { grid } = AppReducersPart3(
      {
        grid: DEFAULT_GRID_VALUE
      },
      {
        payload: {
          column: 0,
          row: 1
        },
        type: ACTION_UPDATE_GRID_CELL
      }
    );

    expect(grid).toStrictEqual([
      [58, 58],
      [13, 58]
    ]);
  });

  it(`Simulate Dispatch Action With Random Type`, () => {
    const state = AppReducersPart3(
      {
        grid: DEFAULT_GRID_VALUE
      },
      {
        type: `sample-type` as any
      }
    );

    expect(state).toStrictEqual({
      grid: [
        [58, 58],
        [58, 58]
      ]
    });
  });

  afterEach(() => {
    mathFloorSpy.mockClear();
    mathRandomnrSpy.mockClear();
    jest.clearAllMocks();
  });
});
