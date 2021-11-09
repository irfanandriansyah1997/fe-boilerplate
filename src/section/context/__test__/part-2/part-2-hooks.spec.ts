import { renderHook } from '@testing-library/react-hooks';

import { useAppDispatch, useAppState } from '../../part-2';

describe(`Testing Part 2 React Hooks`, () => {
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

  describe(`Testing Use App Dispatch Hooks`, () => {
    it(`Testing With App Context Is Undefined`, () => {
      const { result } = renderHook(() => useAppDispatch());

      expect(result.error).not.toBeUndefined();
      expect(result.error).toBeInstanceOf(Error);
      expect(result.error?.message).toBe(
        `useAppDispatch must be used within the AppProvider`
      );
    });
  });
});
