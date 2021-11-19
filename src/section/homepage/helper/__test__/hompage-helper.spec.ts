import { generateAppMenu } from '..';

test(`Testing Generate Sample Link`, () => {
  expect(generateAppMenu()).toStrictEqual({
    section: [
      {
        dataTestID: `homepage-section`,
        item: [
          {
            item: {
              menu: [
                {
                  text: `Basic Code Splitting`,
                  to: `/code-splitting/part-1`
                },
                {
                  text: `Eager Load Code Splitting`,
                  to: `/code-splitting/part-2`
                },
                {
                  text: `Webpack Magic Comment`,
                  to: `/code-splitting/part-3`
                }
              ],
              subtitle: `Cheat Sheet Implement Code Splitting On React JS`,
              title: `⏳ Code Splitting`
            },
            key: `home-page-item-0`
          },
          {
            item: {
              menu: [
                {
                  text: `Wrap Function in Use Memo`,
                  to: `/use-memo/part-1`
                },
                {
                  text: `Implement Web Worker`,
                  to: `/use-memo/part-2`
                },
                {
                  text: `Window Large List Render`,
                  to: `/use-memo/part-3`
                }
              ],
              subtitle: `Reduce High Calculation With Use Memo`,
              title: `🧮 High Calculate With Use Memo`
            },
            key: `home-page-item-1`
          },
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
                },
                {
                  text: `Separate Context Dog Name`,
                  to: `/context/part-4`
                },
                {
                  text: `Memoized Cell Component`,
                  to: `/context/part-5`
                },
                {
                  text: `Refactor To Recoil`,
                  to: `/context/part-6`
                }
              ],
              subtitle: `Cheat Sheet Optimize Context Value Prevent Unused Re-render`,
              title: `🎩 Optimize Context Value`
            },
            key: `home-page-item-2`
          }
        ],
        label: `Performance`
      },
      {
        dataTestID: `react-suspense-section`,
        item: [
          {
            item: {
              menu: [
                {
                  text: `Simple Fetch `,
                  to: `/suspense-fetch/part-1`
                },
                {
                  text: `Error Handling Fetch API`,
                  to: `/suspense-fetch/part-2`
                },
                {
                  text: `Encapsulate To More Generic Method`,
                  to: `/suspense-fetch/part-3`
                }
              ],
              subtitle: `lorem ipsum dolor sim amet`,
              title: `✨ React Suspense & Fetch API`
            },
            key: `react-suspense-0`
          }
        ],
        label: `React Suspense`
      }
    ]
  });
});
