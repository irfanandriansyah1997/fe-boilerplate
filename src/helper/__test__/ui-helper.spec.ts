import { checkSizeBrowser, debounce } from '..';

// Tell Jest to mock all timeout functions
jest.useFakeTimers();

describe(`Testing UI Helper`, () => {
  describe(`Testing Check Size Browser`, () => {
    describe(`Testing Simulate With Window Is Defined`, () => {
      const { window } = global;

      beforeEach(() => {
        (global.window as any).innerWidth = 1360;
        (global.window as any).innerHeight = 768;
      });

      it(`Testing Method`, () => {
        expect(checkSizeBrowser()).toStrictEqual([1360, 768]);
      });

      afterEach(() => {
        global.window = window;
      });
    });
  });

  describe(`Testing Debounce Method`, () => {
    let clearTimeoutSpy: any;
    let setTimeoutSpy: any;

    beforeEach(() => {
      clearTimeoutSpy = jest.spyOn(global, `clearTimeout`);
      setTimeoutSpy = jest.spyOn(global, `setTimeout`);
    });

    it(`Testing Simulate Debounce & Remove Timer`, () => {
      const spy = jest.fn();

      const [simulate, removeTimer] = debounce(spy, 1000);
      simulate();

      // Fast-forward time
      jest.runAllTimers();

      expect(spy).toHaveBeenCalledTimes(1);
      expect(setTimeout).toHaveBeenCalledTimes(1);
      expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);

      removeTimer();
      expect(clearTimeout).toHaveBeenCalledTimes(1);
    });

    it(`Testing Remove Timer Debounce With Timer Is Undefined`, () => {
      const spy = jest.fn();

      const [, removeTimer] = debounce(spy, 1000);
      removeTimer();

      expect(spy).toHaveBeenCalledTimes(0);
      expect(clearTimeout).toHaveBeenCalledTimes(0);
    });

    afterEach(() => {
      clearTimeoutSpy.mockRestore();
      setTimeoutSpy.mockRestore();
    });
  });
});
