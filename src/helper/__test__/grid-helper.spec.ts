import { updateGridCellState, updateGridState } from '..';

const MOCK_VALUE = [10, 24, 56, 32];
const MOCK_PARAMETER = [
  [1, 2],
  [3, 4]
];

describe(`Testing Grid Helper`, () => {
  beforeEach(() => {
    MOCK_VALUE.forEach((item) => {
      jest.spyOn(global.Math, `floor`).mockReturnValueOnce(item);
      jest.spyOn(global.Math, `random`).mockReturnValueOnce(item / 100);
    });
  });

  it(`Testing Simulate Update Grid State`, () => {
    expect(updateGridState(MOCK_PARAMETER)).toStrictEqual([
      [10, 24],
      [56, 32]
    ]);
  });

  it(`Testing Simulate Update Grid Cell State`, () => {
    expect(
      updateGridCellState(MOCK_PARAMETER, {
        column: 1,
        row: 0
      })
    ).toStrictEqual([
      [1, 10],
      [3, 4]
    ]);
  });

  afterEach(() => {
    jest.spyOn(global.Math, `floor`).mockRestore();
  });
});
