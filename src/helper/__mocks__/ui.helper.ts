/**
 * Debounce Helper Mocks
 * @returns {[(...args: any[]) => Promise<R>, () => void]}
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.10.29
 */
export function mockDebounce<R = void>(
  simulateSpy: jest.Mock,
  removeTimerSpy: jest.Mock
) {
  /**
   * Mock Function
   */
  return function hof(
    func: (...args: any[]) => R
  ): [(...args: any[]) => Promise<R>, () => void] {
    /**
     * Simulate Method
     * @author Irfan Andriansyah <irfan@99.co>
     * @since 2021.11.04
     */
    const simulate = (...args: any[]): Promise<any> =>
      new Promise((resolve) => {
        simulateSpy(func(...args));
        resolve(func(...args));
      });

    return [simulate, removeTimerSpy];
  };
}
