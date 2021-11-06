import { act } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';

import { useSection, useSectionContext } from '../hooks/section.hook';

describe(`Testing Section Hooks`, () => {
  describe(`Testing Use Section Hooks`, () => {
    it(`Simulate Change Markdown Value`, () => {
      const { result } = renderHook(() => useSection());

      const [, dispatch] = result.current;

      expect(result.current[0]).toBeUndefined();

      /**
       * Simulate Change Mardown URL With String
       */
      act(() => dispatch(`sample markdown`));
      expect(result.current[0]).toBe(`sample markdown`);

      /**
       * Simulate Change Mardown URL With Function
       */
      act(() => dispatch((param): string => `${param} updated`));
      expect(result.current[0]).toBe(`sample markdown updated`);
    });
  });

  it(`Must throw error if execute \`useSectionContext\``, () => {
    try {
      const { result } = renderHook(() => useSectionContext());

      // eslint-disable-next-line no-unused-expressions
      result.current;
    } catch (e: any) {
      expect(e).toBeInstanceOf(Error);
      expect(e.message).toBe(`[ERROR] section context is undefined`);
    }
  });
});
