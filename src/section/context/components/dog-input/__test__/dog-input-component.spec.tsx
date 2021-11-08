import { fireEvent, render, waitFor } from '@testing-library/react';

import DogNameInput from '..';

describe(`Testing Dog Input Component`, () => {
  describe(`Snapshot Testing`, () => {
    it(`Without Set Dogname Props`, () => {
      const onChangeDogNameSpy = jest.fn();
      const { getByTestId, queryByTestId } = render(
        <DogNameInput dogName="" onChangeDogName={onChangeDogNameSpy} />
      );

      expect(queryByTestId(/^dog-form$/i)).toBeInTheDocument();
      expect(getByTestId(/^dog-form$/i)).toMatchSnapshot();
    });

    it(`With Set Dogname Props`, () => {
      const onChangeDogNameSpy = jest.fn();
      const { getByTestId, queryByTestId, queryByText } = render(
        <DogNameInput
          dogName="sample dog name"
          onChangeDogName={onChangeDogNameSpy}
        />
      );

      expect(queryByTestId(/^dog-form$/i)).toBeInTheDocument();
      expect(queryByText(/sample dog name/)).toBeInTheDocument();
      expect(getByTestId(/^dog-form$/i)).toMatchSnapshot();
    });
  });

  it(`Simulate User Change Value Input`, () => {
    const onChangeDogNameSpy = jest.fn((param) => param.target.value);
    const { getByLabelText, queryByLabelText } = render(
      <DogNameInput
        dogName="sample dog name"
        onChangeDogName={onChangeDogNameSpy}
      />
    );

    expect(queryByLabelText(/^Dog Name$/i)).toBeInTheDocument();
    fireEvent.change(getByLabelText(/^Dog Name$/i), {
      target: {
        value: `hello world`
      }
    });

    expect(onChangeDogNameSpy).toHaveBeenCalled();
    expect(onChangeDogNameSpy.mock.results[0].value).toBe(`hello world`);
  });

  it(`Testing When Dog Name Props Is Empty String`, async () => {
    const onChangeDogNameSpy = jest.fn((param) => param.target.value);
    const { queryByText, rerender } = render(
      <DogNameInput dogName="" onChangeDogName={onChangeDogNameSpy} />
    );

    expect(queryByText(/this is your dog name:/i)).not.toBeInTheDocument();

    rerender(
      <DogNameInput
        dogName="sample dog name"
        onChangeDogName={onChangeDogNameSpy}
      />
    );

    await waitFor(() => {
      expect(queryByText(/this is your dog name:/i)).toBeInTheDocument();
    });
  });
});
