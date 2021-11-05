import { fireEvent, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { IMenuItem } from '../../../../interface/component';
import SidebarDesktopLayout from '../section/desktop-layout.component';

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

describe(`Testing Sidebar On Desktop Site`, () => {
  it(`Snapshot Testing`, () => {
    const onClickBackSpy = jest.fn();
    const onClickItemSpy = jest.fn();
    const { getByTestId } = render(
      <MemoryRouter initialEntries={[`/context/part-1`]}>
        <SidebarDesktopLayout
          onClickBack={onClickBackSpy}
          onClickItem={onClickItemSpy}
          subtitle="Sample Subtitle Course"
          title="Title Course"
          menu={MOCK_MENU}
        />
      </MemoryRouter>
    );

    expect(getByTestId(/^sidebar-dsite$/i)).toBeInTheDocument();
    expect(getByTestId(/^sidebar-dsite$/i)).toMatchSnapshot();
  });

  it(`Testing Element HTML On Sidebar Desktop Layout`, async () => {
    const onClickBackSpy = jest.fn();
    const onClickItemSpy = jest.fn();
    const { findAllByTestId, getByText } = render(
      <MemoryRouter initialEntries={[`/context/part-1`]}>
        <SidebarDesktopLayout
          onClickBack={onClickBackSpy}
          onClickItem={onClickItemSpy}
          subtitle="Sample Subtitle Course"
          title="Title Course"
          menu={MOCK_MENU}
        />
      </MemoryRouter>
    );

    expect(getByText(/Title Course/)).toBeInTheDocument();
    expect(getByText(/Sample Subtitle Course/)).toBeInTheDocument();

    const element = await findAllByTestId(/sidebar-dsite-item/);
    expect(element.length).toBe(3);

    expect(element[0].textContent).toBe(`doneWrap Use Memo`);
    expect(element[1].textContent).toBe(`doneSeparate Context Value`);
    expect(element[2].textContent).toBe(`doneColocate State`);
  });

  it(`Simulate User Click Back Button`, async () => {
    const onClickBackSpy = jest.fn();
    const onClickItemSpy = jest.fn();
    const { getByTestId } = render(
      <MemoryRouter initialEntries={[`/context/part-1`]}>
        <SidebarDesktopLayout
          onClickBack={onClickBackSpy}
          onClickItem={onClickItemSpy}
          subtitle="Sample Subtitle Course"
          title="Title Course"
          menu={MOCK_MENU}
        />
      </MemoryRouter>
    );

    /**
     * Simulate User Click Back Button
     */
    expect(getByTestId(/sidebar-dsite-click-back/)).toBeInTheDocument();
    fireEvent.click(getByTestId(/sidebar-dsite-click-back/));
    expect(onClickBackSpy).toHaveBeenCalled();
  });

  it(`Simulate User Click Sidebar Item`, async () => {
    const onClickBackSpy = jest.fn();
    const onClickItemSpy = jest.fn();
    const { findAllByTestId } = render(
      <MemoryRouter initialEntries={[`/context/part-1`]}>
        <SidebarDesktopLayout
          onClickBack={onClickBackSpy}
          onClickItem={onClickItemSpy}
          subtitle="Sample Subtitle Course"
          title="Title Course"
          menu={MOCK_MENU}
        />
      </MemoryRouter>
    );

    const element = await findAllByTestId(/sidebar-dsite-item/);
    expect(element.length).toBe(3);

    /**
     * Simulate User Click Sidebar Item
     */
    fireEvent.click(element[1]);
    expect(onClickItemSpy).toHaveBeenCalledWith({
      isPrimary: undefined,
      text: `Separate Context Value`,
      to: `/context/part-2`
    });
  });

  it(`Simulate User Click Sidebar Item With OnClickItem Props Is Undefined`, async () => {
    const onClickBackSpy = jest.fn();
    const onClickItemSpy = jest.fn();
    const { findAllByTestId } = render(
      <MemoryRouter initialEntries={[`/context/part-1`]}>
        <SidebarDesktopLayout
          onClickBack={onClickBackSpy}
          subtitle="Sample Subtitle Course"
          title="Title Course"
          menu={MOCK_MENU}
        />
      </MemoryRouter>
    );

    const element = await findAllByTestId(/sidebar-dsite-item/);
    expect(element.length).toBe(3);

    /**
     * Simulate User Click Sidebar Item
     */
    fireEvent.click(element[1]);
    expect(onClickItemSpy).not.toHaveBeenCalled();
  });
});
