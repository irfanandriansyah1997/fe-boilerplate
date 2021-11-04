import { act, renderHook } from '@testing-library/react-hooks';

import { mockDebounce } from '../../helper/__mocks__/ui.helper';
import * as helper from '../../helper/ui.helper';
import { useDebounce, useLayout } from '../layout.hooks';

/**
 * Mock Function
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.11.04
 */
const MOCK_FUNCTION = () =>
  new Promise<string>((resolve) => resolve(`It's Payload`));

/**
 * Simulate Browser Resize
 * @param {number} pixel - pixel browser width
 * @returns {void}
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.11.04
 */
const simulateResize = (
  pixel: number
): (() => Promise<void>) => async (): Promise<void> => {
  global.innerWidth = pixel;
  global.dispatchEvent(new Event(`resize`));
};

describe(`Testing Layout Hooks`, () => {
  describe(`Testing Hooks Use Layout`, () => {
    let addEventSpy: jest.SpyInstance;
    let removeEventSpy: jest.SpyInstance;

    beforeEach(() => {
      addEventSpy = jest.spyOn(global.window, `addEventListener`);
      removeEventSpy = jest.spyOn(global.window, `removeEventListener`);
    });

    it(`Testing On Desktop Layout Resize Until Mobile Site Layout`, async () => {
      const { result, unmount } = renderHook(() => useLayout());

      expect(window.addEventListener).toHaveBeenCalledWith(
        `resize`,
        expect.any(Function)
      );

      await act(simulateResize(1366));
      expect(result.current).toBe(`desktop`);

      await act(simulateResize(1199));
      expect(result.current).toBe(`small-desktop`);

      await act(simulateResize(1024));
      expect(result.current).toBe(`tablet`);

      await act(simulateResize(360));
      expect(result.current).toBe(`mobile`);

      /**
       * Simulate Unmount Hooks
       */
      unmount();
      expect(window.removeEventListener).toHaveBeenCalledWith(
        `resize`,
        expect.any(Function)
      );
    });

    afterEach(() => {
      addEventSpy.mockClear();
      removeEventSpy.mockClear();
    });
  });

  describe(`Testing Hooks Use Debounce`, () => {
    let debounceSpy: jest.SpyInstance;
    const simulateSpy = jest.fn();
    const removeTimerSpy = jest.fn();

    beforeEach(() => {
      debounceSpy = jest
        .spyOn(helper, `debounce`)
        .mockImplementation(mockDebounce(simulateSpy, removeTimerSpy));
    });

    it(`Simulate Testing Use Debounce`, async () => {
      const { result, unmount } = renderHook(() =>
        useDebounce(MOCK_FUNCTION, 500)
      );

      await act(async () => {
        expect(await result.current()).toBe(`It's Payload`);
      });

      expect(simulateSpy).toHaveBeenCalled();
      expect(removeTimerSpy).not.toHaveBeenCalled();
      simulateSpy.mockClear();

      /**
       * Simulate Unmount Hooks
       */
      unmount();
      expect(simulateSpy).not.toHaveBeenCalled();
      expect(removeTimerSpy).toHaveBeenCalled();
    });

    afterEach(() => {
      debounceSpy.mockClear();
    });
  });
});
