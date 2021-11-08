import { fireEvent, render } from '@testing-library/react';

import GridCell from '..';

describe(`Testing Grid Cell Component`, () => {
  describe(`Snapshot Testing`, () => {
    it(`Testing With Cell Props Greather 50`, () => {
      const onClickCellSpy = jest.fn();
      const { getByTestId, queryByTestId } = render(
        <GridCell cell={80} onClickCell={onClickCellSpy} />
      );

      expect(queryByTestId(/grid-cell/)).toBeInTheDocument();
      expect(getByTestId(/grid-cell/)).toMatchSnapshot();
    });

    it(`Testing With Cell Props Lower Then 50`, () => {
      const onClickCellSpy = jest.fn();
      const { getByTestId, queryByTestId } = render(
        <GridCell cell={15} onClickCell={onClickCellSpy} />
      );

      expect(queryByTestId(/grid-cell/)).toBeInTheDocument();
      expect(getByTestId(/grid-cell/)).toMatchSnapshot();
    });
  });

  it(`Simulate User Click Button Element`, () => {
    const onClickCellSpy = jest.fn();
    const { getByTestId } = render(
      <GridCell cell={15} onClickCell={onClickCellSpy} />
    );

    fireEvent.click(getByTestId(/grid-cell/));
    expect(onClickCellSpy).toHaveBeenCalled();
  });
});
