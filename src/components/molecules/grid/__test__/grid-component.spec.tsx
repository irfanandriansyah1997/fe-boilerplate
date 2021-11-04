import { render } from '@testing-library/react';

import Grid from '..';

describe(`Testing Grid Component`, () => {
  it(`Snapshot Testing`, () => {
    const { queryAllByTestId } = render(
      <Grid Cell={() => <div>Cell</div>} row={3} column={4} />
    );
    const container = queryAllByTestId(/grid-container/);

    expect(container).toMatchSnapshot();
  });

  it(`Testing Render Grid Component`, () => {
    const { queryAllByTestId } = render(
      <Grid Cell={() => <div>Cell</div>} row={3} column={4} />
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
});
