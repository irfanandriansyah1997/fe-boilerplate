/* eslint-disable no-console */
/* eslint-disable require-jsdoc-except/require-jsdoc */
import { isSameObject } from '../object.helper';

const MOCK_OBJECT_A = {
  age: 10,
  name: `John`
};

const MOCK_OBJECT_B = {
  age: 8,
  name: `Angeline`
};

describe(`Testing Object Helper`, () => {
  describe(`Testing Is Same Object Helper`, () => {
    it(`Testing Compare Variable Non Object & Array`, () => {
      expect(isSameObject(10, 10)).toBeTruthy();
      expect(isSameObject(`sample-text`, `sample-text`)).toBeTruthy();

      expect(isSameObject(10, 15)).toBeFalsy();
      expect(isSameObject(`sample-text`, `sample-wrong-text`)).toBeFalsy();
    });

    it(`Testing Compare Variable With Object`, () => {
      expect(isSameObject(MOCK_OBJECT_A, MOCK_OBJECT_A)).toBeTruthy();
      expect(isSameObject(MOCK_OBJECT_A, MOCK_OBJECT_B)).toBeFalsy();
    });

    it(`Testing Compare Variable With Array`, () => {
      const MOCK_ARRAY_A = [
        10,
        12,
        {
          ...MOCK_OBJECT_A
        }
      ];

      const MOCK_ARRAY_B = [
        10,
        `hello world`,
        {
          ...MOCK_OBJECT_A
        }
      ];

      expect(isSameObject(MOCK_ARRAY_A, MOCK_ARRAY_A)).toBeTruthy();
      expect(isSameObject(MOCK_ARRAY_A, MOCK_ARRAY_B)).toBeFalsy();
    });

    it(`Testing Compare Anonymous Function`, () => {
      const funcA = (): void => {
        console.debug(`Hello World`);
      };

      const funcB = (): void => {
        console.debug(`Hello World From Method Func B`);
      };

      expect(isSameObject(funcA, funcA)).toBeTruthy();
      expect(isSameObject(funcA, funcB)).toBeFalsy();
    });
  });
});
