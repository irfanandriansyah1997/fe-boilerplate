import { act, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { simulateResize } from '../../../../helper';
import { IMenuItem } from '../../../../interface/component';
import Sidebar from '..';

const MOCK_MENU: IMenuItem[] = [
  {
    text: `Wrap Use Memo`,
    to: `/context/part-1`
  },
  {
    text: `Separate Context Value`,
    to: `/context/part-2`
  },
  {
    text: `Colocate State`,
    to: `/context/part-3`
  }
];

describe(`Testing Sidebar Component`, () => {
  it(`Testing Render On Desktop Site`, async () => {
    const onClickBackSpy = jest.fn();
    const onClickItemSpy = jest.fn();
    const { getByTestId, queryByTestId } = render(
      <MemoryRouter initialEntries={[`/context/part-1`]}>
        <Sidebar
          onClickBack={onClickBackSpy}
          onClickItem={onClickItemSpy}
          subtitle="Sample Subtitle Course"
          title="Title Course"
          menu={MOCK_MENU}
        />
      </MemoryRouter>
    );

    /**
     * Simulate Resize Desktop Size
     */
    await act(simulateResize(1366));

    expect(getByTestId(/^sidebar-dsite$/i)).toBeInTheDocument();
    expect(queryByTestId(/^sidebar-msite$/i)).not.toBeInTheDocument();

    /**
     * Simulate Resize Small Dekstop Size
     */
    await act(simulateResize(1200));

    expect(queryByTestId(/^sidebar-dsite$/i)).not.toBeInTheDocument();
    expect(getByTestId(/^sidebar-msite$/i)).toBeInTheDocument();
  });

  it(`Testing Render On Tablet And Mobile Site`, async () => {
    const onClickBackSpy = jest.fn();
    const onClickItemSpy = jest.fn();
    const { getByTestId, queryByTestId } = render(
      <MemoryRouter initialEntries={[`/context/part-1`]}>
        <Sidebar
          onClickBack={onClickBackSpy}
          onClickItem={onClickItemSpy}
          subtitle="Sample Subtitle Course"
          title="Title Course"
          menu={MOCK_MENU}
        />
      </MemoryRouter>
    );

    /**
     * Simulate Resize Tablet Size
     */
    await act(simulateResize(1024));

    expect(queryByTestId(/^sidebar-dsite$/i)).not.toBeInTheDocument();
    expect(getByTestId(/^sidebar-msite$/i)).toBeInTheDocument();

    /**
     * Simulate Resize Mobile Size
     */
    await act(simulateResize(350));

    expect(queryByTestId(/^sidebar-dsite$/i)).not.toBeInTheDocument();
    expect(getByTestId(/^sidebar-msite$/i)).toBeInTheDocument();
  });
});
