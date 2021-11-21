import { fireEvent, render } from '@testing-library/react';

import NavbarToggle from '..';

describe(`Testing Navbar Toggle Component`, () => {
  it(`Snapshot Testing`, () => {
    const onFocusSpy = jest.fn();
    const onMouseOverSpy = jest.fn();
    const onToggleSpy = jest.fn();
    const { getByTestId, queryByTestId } = render(
      <NavbarToggle
        active
        onToggle={onToggleSpy}
        onFocus={onFocusSpy}
        onMouseOver={onMouseOverSpy}
      />
    );

    expect(queryByTestId(/^navbar-toggle$/i)).toBeInTheDocument();
    expect(getByTestId(/^navbar-toggle$/i)).toMatchSnapshot();
  });

  it(`Simulate User Focus On Button Active`, () => {
    const onFocusSpy = jest.fn();
    const onMouseOverSpy = jest.fn();
    const onToggleSpy = jest.fn();
    const { getByTestId } = render(
      <NavbarToggle
        active
        onToggle={onToggleSpy}
        onFocus={onFocusSpy}
        onMouseOver={onMouseOverSpy}
      />
    );

    fireEvent.focus(getByTestId(/navbar-toggle-button-active/));
    expect(onFocusSpy).toHaveBeenCalled();
  });

  it(`Simulate User Mouse Over On Button Inactive`, () => {
    const onFocusSpy = jest.fn();
    const onMouseOverSpy = jest.fn();
    const onToggleSpy = jest.fn();
    const { getByTestId } = render(
      <NavbarToggle
        active
        onToggle={onToggleSpy}
        onFocus={onFocusSpy}
        onMouseOver={onMouseOverSpy}
      />
    );

    fireEvent.mouseOver(getByTestId(/navbar-toggle-button-inactive/));
    expect(onMouseOverSpy).toHaveBeenCalled();
  });

  it(`Simulate User Set Active And Inactive Props`, () => {
    const onFocusSpy = jest.fn();
    const onMouseOverSpy = jest.fn();
    const onToggleSpy = jest.fn();
    const { getByTestId, rerender } = render(
      <NavbarToggle
        active={false}
        onToggle={onToggleSpy}
        onFocus={onFocusSpy}
        onMouseOver={onMouseOverSpy}
      />
    );

    expect(getByTestId(/navbar-toggle-button-inactive/)).toHaveClass(
      `navbar-toggle__button--active`
    );
    expect(getByTestId(/navbar-toggle-button-active/)).not.toHaveClass(
      `navbar-toggle__button--active`
    );

    fireEvent.click(getByTestId(/navbar-toggle-button-active/));
    expect(onToggleSpy).toHaveBeenCalledWith(true);

    /**
     * Simulate With Change Props Active Is True
     */
    rerender(
      <NavbarToggle
        active
        onToggle={onToggleSpy}
        onFocus={onFocusSpy}
        onMouseOver={onMouseOverSpy}
      />
    );

    expect(getByTestId(/navbar-toggle-button-inactive/)).not.toHaveClass(
      `navbar-toggle__button--active`
    );
    expect(getByTestId(/navbar-toggle-button-active/)).toHaveClass(
      `navbar-toggle__button--active`
    );

    fireEvent.click(getByTestId(/navbar-toggle-button-inactive/));
    expect(onToggleSpy).toHaveBeenCalledWith(false);
  });
});
