import { checkSizeBrowser } from '..';

describe(`Testing UI Helper`, () => {
  describe(`Testing Check Size Browser`, () => {
    describe(`Testing Simulate With Window Is Undefined`, () => {
      beforeEach(() => {
        (global.window as any) = undefined;
      });

      it(`Testing Method`, () => {
        expect(checkSizeBrowser()).toStrictEqual([0, 0]);
      });

      afterEach(() => {
        jest.clearAllMocks();
      });
    });
  });
});
