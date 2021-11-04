import { renderHook } from '@testing-library/react-hooks';
import React, { useCallback } from 'react';

import { useForceRerender } from '../render.hooks';

describe(`Testing Use Force Renderer Hooks`, () => {
  const dispatchSpy = jest.fn();
  let useReducerSpy: jest.SpyInstance;

  beforeEach(() => {
    useReducerSpy = jest
      .spyOn(React, `useReducer`)
      .mockImplementation((fn: any): any => {
        if (typeof fn === `function`) fn();

        const simulateDispatch = useCallback((): void => {
          dispatchSpy();
        }, []);

        return [1, simulateDispatch];
      });
  });

  it(`Testing Simulate Force Re-Render`, () => {
    const { result } = renderHook(() => useForceRerender());
    expect(dispatchSpy).not.toHaveBeenCalled();

    result.current();
    expect(dispatchSpy).toHaveBeenCalled();
  });

  afterEach(() => {
    useReducerSpy.mockClear();
  });
});
