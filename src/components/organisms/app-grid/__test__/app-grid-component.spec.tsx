import { fireEvent, render } from '@testing-library/react';

import AppGrid from '..';

describe(`Testing App Grid Testing`, () => {
  it(`Snapshot Testing`, () => {
    const onForceRenderedSpy = jest.fn();
    const onUpdateGridSpy = jest.fn();
    const { getByTestId } = render(
      <AppGrid
        Cell={() => <div>Cell</div>}
        row={3}
        column={4}
        onForceRerender={onForceRenderedSpy}
        onUpdateGrid={onUpdateGridSpy}
      />
    );

    expect(getByTestId(/app-grid/)).toMatchSnapshot();
  });

  it(`Testing Render Grid Component`, () => {
    const onForceRenderedSpy = jest.fn();
    const onUpdateGridSpy = jest.fn();
    const { queryAllByTestId } = render(
      <AppGrid
        Cell={() => <div>Cell</div>}
        row={3}
        column={4}
        onForceRerender={onForceRenderedSpy}
        onUpdateGrid={onUpdateGridSpy}
      />
    );

    const item = queryAllByTestId(/grid-item/);
    const row = queryAllByTestId(/grid-row/);
    const [firstRow] = row;

    expect(row.length).toBe(3);
    expect(firstRow.querySelectorAll(`[data-testid='grid-item']`).length).toBe(
      4
    );
    expect(item.length).toBe(12);
  });

  it(`Testing Simulate Click Button Re-Render & Update Cell`, async () => {
    const onForceRenderedSpy = jest.fn();
    const onUpdateGridSpy = jest.fn();
    const { findByText } = render(
      <AppGrid
        Cell={() => <div>Cell</div>}
        row={3}
        column={4}
        onForceRerender={onForceRenderedSpy}
        onUpdateGrid={onUpdateGridSpy}
      />
    );

    /**
     * Simulate Click Force Re-render
     */
    fireEvent.click(await findByText(/Force Re-render/));
    expect(onUpdateGridSpy).not.toHaveBeenCalled();
    expect(onForceRenderedSpy).toHaveBeenCalled();
    onForceRenderedSpy.mockClear();

    /**
     * Simulate Click Update Cells
     */
    fireEvent.click(await findByText(/Update Cells/));
    expect(onUpdateGridSpy).toHaveBeenCalled();
    expect(onForceRenderedSpy).not.toHaveBeenCalled();
    onForceRenderedSpy.mockClear();
  });
});
