import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { IAppMenuList } from '../interface';
import Homepage from '..';

jest.mock(`../helper/index`, () => ({
  generateAppMenu: jest.fn().mockImplementation(
    (): IAppMenuList => ({
      section: [
        {
          dataTestID: `homepage-section`,
          item: [
            {
              item: {
                menu: [
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
                ],
                subtitle: `Sample Subtitle Course`,
                title: `Title Course`
              },
              key: `key 1`
            }
          ],
          label: `Performance`
        }
      ]
    })
  )
}));

describe(`Testing Homepage Section`, () => {
  it(`Snapshot Testing`, () => {
    const { container } = render(
      <MemoryRouter>
        <Homepage />
      </MemoryRouter>
    );

    expect(container).toMatchSnapshot();
  });

  it(`Should be rendered title and description on homepage`, () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <Homepage />
      </MemoryRouter>
    );

    expect(getByTestId(/homepage-title/)).toHaveTextContent(
      `React.js cheatsheet`
    );
    expect(getByTestId(/homepage-description/)).toHaveTextContent(
      `React is a JavaScript library for building user interfaces. This guide targets React v15 to v16.`
    );
  });

  it(`Should be rendered one card on homepage`, () => {
    const { getAllByTestId, queryAllByTestId, queryByText } = render(
      <MemoryRouter>
        <Homepage />
      </MemoryRouter>
    );

    expect(getAllByTestId(/^homepage-card$/i)).toHaveLength(1);
    expect(queryByText(/^Title Course$/i)).toBeInTheDocument();
    expect(queryByText(/^Sample Subtitle Course$/i)).toBeInTheDocument();

    expect(queryAllByTestId(/homepage-card-link/)).toHaveLength(3);
    const [firstElement, secondElement, thirdElement] = queryAllByTestId(
      /homepage-card-link/
    );

    /**
     * Check Attribute First Item
     */
    expect(firstElement).toHaveTextContent(`sticky_note_2Wrap Use Memo`);
    expect(firstElement).toHaveAttribute(`href`, `/context/part-1`);

    /**
     * Check Attribute Second Item
     */
    expect(secondElement).toHaveTextContent(
      `sticky_note_2Separate Context Value`
    );
    expect(secondElement).toHaveAttribute(`href`, `/context/part-2`);

    /**
     * Check Attribute Third Item
     */
    expect(thirdElement).toHaveTextContent(`sticky_note_2Colocate State`);
    expect(thirdElement).toHaveAttribute(`href`, `/context/part-3`);
  });
});
