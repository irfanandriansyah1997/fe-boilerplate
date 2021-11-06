import { fireEvent, render } from '@testing-library/react';
import { ReactNode } from 'react';
import { MemoryRouter } from 'react-router-dom';
import {
  TransitionProps,
  TransitionStatus
} from 'react-transition-group/Transition';

import { IMenuItem } from '../../../../interface/component';
import SidebarMobileLayout from '../section/mobile-layout.component';

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

// Tell Jest to mock all timeout functions
jest.useFakeTimers();

jest.mock(`react-transition-group`, () => ({
  Transition: ({
    children,
    in: show,
    onExited
  }: TransitionProps<HTMLElement>) => {
    const fn = children as (status: TransitionStatus) => ReactNode;

    if (!show && onExited) onExited();

    return <div>{show ? fn(`entered`) : null}</div>;
  }
}));

describe(`Testing Sidebar On Mobile Site`, () => {
  describe(`Snapshot Testing`, () => {
    it(`Testing when at the start of rendering`, () => {
      const onClickBackSpy = jest.fn();
      const onClickItemSpy = jest.fn();
      const { getByTestId } = render(
        <SidebarMobileLayout
          onClickBack={onClickBackSpy}
          onClickItem={onClickItemSpy}
          subtitle="Sample Subtitle Course"
          title="Title Course"
          menu={MOCK_MENU}
        />
      );

      expect(getByTestId(/^sidebar-msite$/i)).toBeInTheDocument();
      expect(getByTestId(/sidebar-msite-navbar-title/).textContent).toBe(
        `Title Course`
      );

      expect(getByTestId(/^sidebar-msite$/i)).toMatchSnapshot();
    });

    it(`Testing when user click toggle button`, () => {
      const onClickBackSpy = jest.fn();
      const onClickItemSpy = jest.fn();
      const { getByTestId, queryByTestId } = render(
        <MemoryRouter initialEntries={[`/context/part-1`]}>
          <SidebarMobileLayout
            onClickBack={onClickBackSpy}
            onClickItem={onClickItemSpy}
            subtitle="Sample Subtitle Course"
            title="Title Course"
            menu={MOCK_MENU}
          />
        </MemoryRouter>
      );

      expect(queryByTestId(/^sidebar-msite-dialog$/i)).not.toBeInTheDocument();
      expect(getByTestId(/^sidebar-msite$/i)).toBeInTheDocument();
      expect(getByTestId(/sidebar-msite-navbar-title/).textContent).toBe(
        `Title Course`
      );

      const button = getByTestId(/sidebar-msite-navbar-button/);

      fireEvent.click(button);
      expect(getByTestId(/^sidebar-msite-dialog$/i)).toBeInTheDocument();

      expect(getByTestId(/^sidebar-msite$/i)).toMatchSnapshot();
      expect(getByTestId(/^sidebar-msite-dialog$/i)).toMatchSnapshot();
    });
  });

  describe(`Testing simulate user scrolling browser`, () => {
    let addEventListenerSpy: jest.SpyInstance;
    let removeEventListenerSpy: jest.SpyInstance;

    beforeEach(() => {
      addEventListenerSpy = jest.spyOn(window, `addEventListener`);
      removeEventListenerSpy = jest.spyOn(window, `removeEventListener`);
    });

    it(`Testing component`, () => {
      const onClickBackSpy = jest.fn();
      const onClickItemSpy = jest.fn();
      const { getByTestId, unmount } = render(
        <MemoryRouter initialEntries={[`/context/part-1`]}>
          <SidebarMobileLayout
            onClickBack={onClickBackSpy}
            onClickItem={onClickItemSpy}
            subtitle="Sample Subtitle Course"
            title="Title Course"
            menu={MOCK_MENU}
          />
        </MemoryRouter>
      );

      /**
       * Check When First Render Is Called Add Event Listener
       */
      expect(window.addEventListener).toHaveBeenCalledWith(
        `scroll`,
        expect.any(Function)
      );

      expect(getByTestId(/^sidebar-msite$/i)).toBeInTheDocument();
      expect(getByTestId(/^sidebar-msite-navbar$/i)).toBeInTheDocument();
      expect(getByTestId(/^sidebar-msite-navbar$/i).className).not.toContain(
        `o-sidebar-mobile__navbar--scrolled`
      );

      fireEvent.scroll(window, { target: { scrollY: 30 } });
      expect(getByTestId(/^sidebar-msite-navbar$/i).className).toContain(
        `o-sidebar-mobile__navbar--scrolled`
      );

      /**
       * Simulate Unmount Component
       */
      unmount();
      expect(window.removeEventListener).toHaveBeenCalledWith(
        `scroll`,
        expect.any(Function)
      );
    });

    afterEach(() => {
      addEventListenerSpy.mockClear();
      removeEventListenerSpy.mockClear();
    });
  });

  it(`Simulate user click back to homepage button`, () => {
    const onClickBackSpy = jest.fn();
    const onClickItemSpy = jest.fn();
    const { getByTestId, getByText, queryByTestId } = render(
      <MemoryRouter initialEntries={[`/context/part-1`]}>
        <SidebarMobileLayout
          onClickBack={onClickBackSpy}
          onClickItem={onClickItemSpy}
          subtitle="Sample Subtitle Course"
          title="Title Course"
          menu={MOCK_MENU}
        />
      </MemoryRouter>
    );

    expect(queryByTestId(/^sidebar-msite-dialog$/i)).not.toBeInTheDocument();

    const button = getByTestId(/sidebar-msite-navbar-button/);
    fireEvent.click(button);
    expect(getByTestId(/^sidebar-msite-dialog$/i)).toBeInTheDocument();

    const buttonBackToHomepage = getByText(/Back To Homepage/);
    fireEvent.click(buttonBackToHomepage);

    // Fast-forward time
    jest.runAllTimers();
    expect(onClickBackSpy).toHaveBeenCalled();
  });

  it(`Simulate user click back each of menu item`, async () => {
    const onClickBackSpy = jest.fn();
    const onClickItemSpy = jest.fn();
    const { findAllByTestId, getByTestId, queryByTestId } = render(
      <MemoryRouter initialEntries={[`/context/part-1`]}>
        <SidebarMobileLayout
          onClickBack={onClickBackSpy}
          onClickItem={onClickItemSpy}
          subtitle="Sample Subtitle Course"
          title="Title Course"
          menu={MOCK_MENU}
        />
      </MemoryRouter>
    );

    expect(queryByTestId(/^sidebar-msite-dialog$/i)).not.toBeInTheDocument();

    const button = getByTestId(/sidebar-msite-navbar-button/);
    fireEvent.click(button);
    expect(getByTestId(/^sidebar-msite-dialog$/i)).toBeInTheDocument();

    const element = await findAllByTestId(/sidebar-msite-dialog-menu-item/);
    expect(element.length).toBe(3);

    /**
     * Simulate User Click Sidebar Item
     */
    fireEvent.click(element[1]);
    expect(onClickItemSpy).not.toHaveBeenCalledWith({});
  });

  it(`Simulate user click icon close on sidebar dialog`, async () => {
    const onClickBackSpy = jest.fn();
    const onClickItemSpy = jest.fn();
    const { getByTestId, getByText, queryByTestId } = render(
      <MemoryRouter initialEntries={[`/context/part-1`]}>
        <SidebarMobileLayout
          onClickBack={onClickBackSpy}
          onClickItem={onClickItemSpy}
          subtitle="Sample Subtitle Course"
          title="Title Course"
          menu={MOCK_MENU}
        />
      </MemoryRouter>
    );

    expect(queryByTestId(/^sidebar-msite-dialog$/i)).not.toBeInTheDocument();

    const button = getByTestId(/sidebar-msite-navbar-button/);
    fireEvent.click(button);
    expect(getByTestId(/^sidebar-msite-dialog$/i)).toBeInTheDocument();

    const backButton = await getByText(/arrow_back/);
    fireEvent.click(backButton);

    expect(queryByTestId(/^sidebar-msite-dialog$/i)).not.toBeInTheDocument();
  });

  afterAll(() => {
    jest.clearAllMocks();
  });
});
