import { act, render } from '@testing-library/react';
import { FC } from 'react';

import { simulateResize } from '../../../../helper';
import { IMasonryItem } from '../interface';
import MasonryLayout from '..';

/**
 * Sample Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.11.05
 */
const SampleComponent: FC = () => (
  <div data-testid="masonry-item">Hello World</div>
);

const MOCK_ITEM: IMasonryItem[] = Array.from({
  length: 8
}).map(
  (_, index): IMasonryItem => ({
    item: {
      name: `name-${index}`,
      no: index
    },
    key: `name-${index}`
  })
);

describe(`Testing Masonry Layout Componet`, () => {
  it(`Snapshot Testing`, async () => {
    const { findByTestId } = render(
      <MasonryLayout component={SampleComponent} item={MOCK_ITEM} maxGrid={4} />
    );

    await act(simulateResize(1366));
    expect(await findByTestId(/masonry-container/)).toBeInTheDocument();
    expect(await findByTestId(/masonry-container/)).toMatchSnapshot();
  });

  describe(`Testing Simulate Render`, () => {
    it(`Testing Render On Desktop & Small Desktop Site`, async () => {
      const { findByTestId, getAllByTestId, getByTestId } = render(
        <MasonryLayout
          component={SampleComponent}
          item={MOCK_ITEM}
          maxGrid={4}
        />
      );

      /**
       * Simulate Resize Desktop Size
       */
      await act(simulateResize(1366));

      expect(await findByTestId(/masonry-container/)).toBeInTheDocument();
      expect(getByTestId(/masonry-container/)).toHaveStyle({
        'grid-template-columns': `repeat(4, 1fr)`
      });
      expect(getAllByTestId(/masonry-column/).length).toBe(4);

      /**
       * Simulate Resize Small Desktop Size
       */
      await act(simulateResize(1200));

      expect(await findByTestId(/masonry-container/)).toBeInTheDocument();
      expect(getByTestId(/masonry-container/)).toHaveStyle({
        'grid-template-columns': `repeat(4, 1fr)`
      });
      expect(getAllByTestId(/masonry-column/).length).toBe(4);
    });

    it(`Testing Render On Tablet & Mobile Site`, async () => {
      const { findByTestId, getAllByTestId, getByTestId } = render(
        <MasonryLayout
          component={SampleComponent}
          item={MOCK_ITEM}
          maxGrid={4}
        />
      );

      /**
       * Simulate Resize Tablet
       */
      await act(simulateResize(1024));

      expect(await findByTestId(/masonry-container/)).toBeInTheDocument();
      expect(getByTestId(/masonry-container/)).toHaveStyle({
        'grid-template-columns': `repeat(2, 1fr)`
      });
      expect(getAllByTestId(/masonry-column/).length).toBe(2);

      /**
       * Simulate Resize Small Desktop Size
       */
      await act(simulateResize(366));

      expect(await findByTestId(/masonry-container/)).toBeInTheDocument();
      expect(getByTestId(/masonry-container/)).toHaveStyle({
        'grid-template-columns': `repeat(1, 1fr)`
      });
      expect(getAllByTestId(/masonry-column/).length).toBe(1);
    });
  });
});
