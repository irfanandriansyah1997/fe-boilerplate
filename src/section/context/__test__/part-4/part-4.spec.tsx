import { fireEvent, render, waitFor } from '@testing-library/react';

import ContextPart4 from '../../part-4';

jest.mock(`../../../../constant`, () => ({
  ...jest.requireActual(`../../../../constant`),
  DEFAULT_COLUMN: 3,
  DEFAULT_GRID_VALUE: Array.from({ length: 3 }, () =>
    Array.from({ length: 3 }, () => 58)
  ),
  DEFAULT_ROW: 3
}));

describe(`Testing Part 4 Context Section`, () => {
  let mathFloorSpy: jest.SpyInstance;
  let mathRandomnrSpy: jest.SpyInstance;

  beforeEach(() => {
    mathFloorSpy = jest.spyOn(global.Math, `floor`).mockReturnValue(58);
    mathRandomnrSpy = jest
      .spyOn(global.Math, `random`)
      .mockReturnValue(58 / 100);
  });

  it(`Snapshot Testing`, async () => {
    const { container } = render(<ContextPart4 />);

    expect(container).toMatchSnapshot();
  });

  it(`Cell Item Should Be Updated`, async () => {
    const { getAllByTestId } = render(<ContextPart4 />);

    expect(getAllByTestId(/grid-cell/)).toHaveLength(9);
    expect(getAllByTestId(/grid-cell/)[0]).toHaveTextContent(`58`);
    expect(getAllByTestId(/grid-cell/)[1]).toHaveTextContent(`58`);

    /**
     * Simulate Click One Cell
     */
    mathFloorSpy = jest.spyOn(global.Math, `floor`).mockReturnValue(85);
    fireEvent.click(getAllByTestId(/grid-cell/)[0]);

    expect(getAllByTestId(/grid-cell/)).toHaveLength(9);
    expect(getAllByTestId(/grid-cell/)[0]).toHaveTextContent(`85`);
    expect(getAllByTestId(/grid-cell/)[1]).toHaveTextContent(`58`);
  });

  it(`All Cell Item Should Be Updated`, async () => {
    const { findByText, getAllByTestId } = render(<ContextPart4 />);

    expect(getAllByTestId(/grid-cell/)).toHaveLength(9);
    expect(getAllByTestId(/grid-cell/)[0]).toHaveTextContent(`58`);

    /**
     * Simulate Click Update Cells
     */
    mathFloorSpy = jest.spyOn(global.Math, `floor`).mockReturnValue(85);
    fireEvent.click(await findByText(/Update Cells/));

    expect(getAllByTestId(/grid-cell/)).toHaveLength(9);
    expect(getAllByTestId(/grid-cell/)[0]).toHaveTextContent(`85`);
  });

  it(`Simulate dog name updated`, async () => {
    const { getByLabelText, queryByLabelText, queryByText } = render(
      <ContextPart4 />
    );

    expect(queryByLabelText(/^Dog Name$/i)).toBeInTheDocument();
    fireEvent.change(getByLabelText(/^Dog Name$/i), {
      target: {
        value: `sample hello world`
      }
    });

    /**
     * Simulate Click Update Cells
     */
    await waitFor(() => {
      expect(queryByText(/this is your dog name:/i)).toBeInTheDocument();
      expect(queryByText(/^sample hello world$/i)).toBeInTheDocument();
    });
  });

  afterEach(() => {
    mathFloorSpy.mockClear();
    mathRandomnrSpy.mockClear();
  });
});
