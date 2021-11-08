import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { IMenuItem } from '../../../../../interface/component';
import HomepageCard from '..';

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

describe(`Testing Homepage Card`, () => {
  it(`Snapshot Testing`, () => {
    const { getByTestId, queryByTestId } = render(
      <MemoryRouter>
        <HomepageCard
          menu={MOCK_MENU}
          subtitle="Sample Subtitle Course"
          title="Title Course"
        />
      </MemoryRouter>
    );

    expect(queryByTestId(/^homepage-card$/i)).toBeInTheDocument();
    expect(getByTestId(/^homepage-card$/i)).toMatchSnapshot();
  });

  it(`Should Render Title & Subtitle On Homepage Card`, () => {
    const { queryByText } = render(
      <MemoryRouter>
        <HomepageCard
          menu={MOCK_MENU}
          subtitle="Sample Subtitle Course"
          title="Title Course"
        />
      </MemoryRouter>
    );

    expect(queryByText(/^Title Course$/i)).toBeInTheDocument();
    expect(queryByText(/^Sample Subtitle Course$/i)).toBeInTheDocument();
  });

  it(`Should Render 3 Navlink On Homepage Card`, () => {
    const { queryAllByTestId } = render(
      <MemoryRouter>
        <HomepageCard
          menu={MOCK_MENU}
          subtitle="Sample Subtitle Course"
          title="Title Course"
        />
      </MemoryRouter>
    );

    expect(queryAllByTestId(/homepage-card-link/)).toHaveLength(3);
    const [firstElement, secondElement, thirdElement] = queryAllByTestId(
      /homepage-card-link/
    );

    /**
     * Check Attribute First Item
     */
    expect(firstElement.textContent).toBe(`sticky_note_2Wrap Use Memo`);
    expect(firstElement).toHaveAttribute(`href`, `/context/part-1`);

    /**
     * Check Attribute Second Item
     */
    expect(secondElement.textContent).toBe(
      `sticky_note_2Separate Context Value`
    );
    expect(secondElement).toHaveAttribute(`href`, `/context/part-2`);

    /**
     * Check Attribute Third Item
     */
    expect(thirdElement.textContent).toBe(`sticky_note_2Colocate State`);
    expect(thirdElement).toHaveAttribute(`href`, `/context/part-3`);
  });
});
