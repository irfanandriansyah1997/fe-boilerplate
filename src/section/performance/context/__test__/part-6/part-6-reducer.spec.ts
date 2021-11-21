import { ACTION_SET_TEXT } from '../../constant';
import { DogReducerPart6 } from '../../part-6';

jest.mock(`../../../../../constant`, () => ({
  ...jest.requireActual(`../../../../../constant`),
  DEFAULT_COLUMN: 2,
  DEFAULT_GRID_VALUE: Array.from({ length: 2 }, () =>
    Array.from({ length: 2 }, () => 58)
  ),
  DEFAULT_ROW: 2
}));

describe(`Part 6 Reducer`, () => {
  describe(`Testing Dog Reducer Part 6`, () => {
    it(`Simulate Update Grid Value`, () => {
      const { dogName } = DogReducerPart6(
        {
          dogName: ``
        },
        {
          payload: `Sample Dog Name`,
          type: ACTION_SET_TEXT
        }
      );

      expect(dogName).toBe(`Sample Dog Name`);
    });

    it(`Simulate Dispatch Action With Random Type`, () => {
      const state = DogReducerPart6(
        {
          dogName: ``
        },
        {
          type: `sample-type`
        } as any
      );

      expect(state).toStrictEqual({
        dogName: ``
      });
    });
  });
});
