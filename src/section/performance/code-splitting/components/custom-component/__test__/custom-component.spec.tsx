import { render } from '@testing-library/react';

import CustomComponent from '..';

describe(`Testing Custom Component`, () => {
  it(`Snapshot Testing`, () => {
    const { getByTestId } = render(<CustomComponent />);

    expect(getByTestId(/custom-component/)).toMatchSnapshot();
  });

  it(`Cross Check Content Custom Component`, () => {
    const { getByTestId, queryByTestId } = render(<CustomComponent />);

    expect(queryByTestId(/custom-component/)).toBeInTheDocument();
    expect(getByTestId(/custom-component/).textContent).toBe(
      `This Is Sample Custom Component`
    );
  });
});
