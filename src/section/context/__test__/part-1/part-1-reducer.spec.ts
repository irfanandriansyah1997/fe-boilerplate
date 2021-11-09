import { DEFAULT_GRID_VALUE } from '../../../../constant';
import {
  ACTION_SET_TEXT,
  ACTION_UPDATE_GRID,
  ACTION_UPDATE_GRID_CELL
} from '../../constant';
import { AppReducersPart1 } from '../../part-1';

jest.mock(`../../../../constant`, () => ({
  ...jest.requireActual(`../../../../constant`),
  DEFAULT_COLUMN: 2,
  DEFAULT_GRID_VALUE: Array.from({ length: 2 }, () =>
    Array.from({ length: 2 }, () => 58)
  ),
  DEFAULT_ROW: 2
}));

describe(`Testing App Reducer Part 1`, () => {
  let mathFloorSpy: jest.SpyInstance;
  let mathRandomnrSpy: jest.SpyInstance;

  beforeEach(() => {
    mathFloorSpy = jest.spyOn(global.Math, `floor`).mockReturnValue(13);
    mathRandomnrSpy = jest
      .spyOn(global.Math, `random`)
      .mockReturnValue(13 / 100);
  });

  it(`Simulate Set Dog Name`, () => {
    const { dogName } = AppReducersPart1(
      {
        dogName: ``,
        grid: DEFAULT_GRID_VALUE
      },
      {
        payload: `sample dog name`,
        type: ACTION_SET_TEXT
      }
    );

    expect(dogName).toMatchInlineSnapshot(`"sample dog name"`);
  });

  it(`Simulate Update Grid Value`, () => {
    const { grid } = AppReducersPart1(
      {
        dogName: ``,
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
    const { grid } = AppReducersPart1(
      {
        dogName: ``,
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
    const state = AppReducersPart1(
      {
        dogName: ``,
        grid: DEFAULT_GRID_VALUE
      },
      {
        type: `sample-type` as any
      }
    );

    expect(state).toStrictEqual({
      dogName: ``,
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
