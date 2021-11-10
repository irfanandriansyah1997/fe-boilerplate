import { renderHook } from '@testing-library/react-hooks';

import { useAppState } from '../../part-1';

describe(`Testing Part 1 React Hooks`, () => {
  describe(`Testing Use App State Hooks`, () => {
    it(`Testing With App Context Is Undefined`, () => {
      const { result } = renderHook(() => useAppState());

      expect(result.error).not.toBeUndefined();
      expect(result.error).toBeInstanceOf(Error);
      expect(result.error?.message).toBe(
        `useAppState must be used within the AppProvider`
      );
    });
  });
});
