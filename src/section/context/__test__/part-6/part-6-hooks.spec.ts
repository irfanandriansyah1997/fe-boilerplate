import { renderHook } from '@testing-library/react-hooks';

import { useDogState } from '../../part-6';

describe(`Testing Part 6 React Hooks`, () => {
  describe(`Testing Use Dog Dispatch Hooks`, () => {
    it(`Testing With Dog Context Is Undefined`, () => {
      const { result } = renderHook(() => useDogState());

      expect(result.error).not.toBeUndefined();
      expect(result.error).toBeInstanceOf(Error);
      expect(result.error?.message).toBe(
        `useDogState must be used within the DogProvider`
      );
    });
  });
});
