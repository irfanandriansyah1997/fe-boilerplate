it.todo(`Skip Its Just Mocked File`);

jest.mock(`react-markdown`, () => ({
  __esModule: true,
  default: jest.fn(({ children }: any) => <div>{children}</div>)
}));

jest.mock(`react-syntax-highlighter/dist/esm/languages/prism/jsx`, () => ({
  __esModule: true,
  default: `prism theme`
}));

jest.mock(`react-syntax-highlighter/dist/esm/prism-light`, () => ({
  __esModule: true,
  default: {
    registerLanguage: jest.fn()
  }
}));

jest.mock(
  `react-syntax-highlighter/dist/esm/styles/prism/material-oceanic`,
  () => ({
    __esModule: true,
    default: `theme`
  })
);

jest.mock(`remark-gfm`, () => ({
  __esModule: true,
  default: jest.fn()
}));

export {};
