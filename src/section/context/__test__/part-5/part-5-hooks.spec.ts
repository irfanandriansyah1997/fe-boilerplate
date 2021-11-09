import { renderHook } from '@testing-library/react-hooks';

import { useAppDispatch, useAppState, useDogState } from '../../part-5';

describe(`Testing Part 5 React Hooks`, () => {
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
