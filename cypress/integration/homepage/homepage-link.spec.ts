describe(`Testing Homepage Link`, () => {
  describe(`Assert Link On Code Splitting Card`, () => {
    beforeEach(() => {
      cy.viewport(`macbook-15`).visit(Cypress.env(`HOME_PAGE_URL`));
    });

    it(`Should redirect to \`code-splitting/part-1\``, () => {
      cy.doClickHomepageCardLinkItem({
        elementIndex: 0,
        expectedURL: `${Cypress.env(`CODE_SPLITTING_PAGE_URL`)}/part-1`,
        linkSelector: /^Basic Code Splitting$/i
      });

      cy.findByTestId(/code-splitting-1/).should(`exist`);
      cy.findByTestId(/code-splitting-2/).should(`not.exist`);
      cy.findByTestId(/code-splitting-3/).should(`not.exist`);
    });

    it(`Should redirect to \`code-splitting/part-2\``, () => {
      cy.doClickHomepageCardLinkItem({
        elementIndex: 0,
        expectedURL: `${Cypress.env(`CODE_SPLITTING_PAGE_URL`)}/part-2`,
        linkSelector: /^Eager Load Code Splitting$/i
      });

      cy.findByTestId(/code-splitting-1/).should(`not.exist`);
      cy.findByTestId(/code-splitting-2/).should(`exist`);
      cy.findByTestId(/code-splitting-3/).should(`not.exist`);
    });

    it(`Should redirect to \`code-splitting/part-3\``, () => {
      cy.doClickHomepageCardLinkItem({
        elementIndex: 0,
        expectedURL: `${Cypress.env(`CODE_SPLITTING_PAGE_URL`)}/part-3`,
        linkSelector: /^Webpack Magic Comment$/i
      });

      cy.findByTestId(/code-splitting-1/).should(`not.exist`);
      cy.findByTestId(/code-splitting-2/).should(`not.exist`);
      cy.findByTestId(/code-splitting-3/).should(`exist`);
    });
  });

  describe(`Assert Link On Use Memo Card`, () => {
    beforeEach(() => {
      cy.viewport(`macbook-15`).visit(Cypress.env(`HOME_PAGE_URL`));
    });

    it(`Should redirect to \`use-memo/part-1\``, () => {
      cy.doClickHomepageCardLinkItem({
        elementIndex: 1,
        expectedURL: `${Cypress.env(`USE_MEMO_PAGE_URL`)}/part-1`,
        linkSelector: /^Wrap Function in Use Memo$/i
      });

      cy.findByTestId(/use-memo-1/).should(`exist`);
      cy.findByTestId(/use-memo-2/).should(`not.exist`);
      cy.findByTestId(/use-memo-3/).should(`not.exist`);
    });

    it(`Should redirect to \`use-memo/part-2\``, () => {
      cy.doClickHomepageCardLinkItem({
        elementIndex: 1,
        expectedURL: `${Cypress.env(`USE_MEMO_PAGE_URL`)}/part-2`,
        linkSelector: /^Implement Web Worker$/i
      });

      cy.findByTestId(/use-memo-1/).should(`not.exist`);
      cy.findByTestId(/use-memo-2/).should(`exist`);
      cy.findByTestId(/use-memo-3/).should(`not.exist`);
    });

    it(`Should redirect to \`use-memo/part-3\``, () => {
      cy.doClickHomepageCardLinkItem({
        elementIndex: 1,
        expectedURL: `${Cypress.env(`USE_MEMO_PAGE_URL`)}/part-3`,
        linkSelector: /^Window Large List Render$/i
      });

      cy.findByTestId(/use-memo-1/).should(`not.exist`);
      cy.findByTestId(/use-memo-2/).should(`not.exist`);
      cy.findByTestId(/use-memo-3/).should(`exist`);
    });
  });

  describe(`Assert Link On Optimize Context Value`, () => {
    beforeEach(() => {
      cy.viewport(`macbook-15`).visit(Cypress.env(`HOME_PAGE_URL`));
    });

    it(`Should redirect to \`context/part-1\``, () => {
      cy.doClickHomepageCardLinkItem({
        elementIndex: 2,
        expectedURL: `${Cypress.env(`CONTEXT_PAGE_URL`)}/part-1`,
        linkSelector: /^Wrap Use Memo$/i
      });

      cy.findByTestId(/context-1/).should(`exist`);
      cy.findByTestId(/context-2/).should(`not.exist`);
      cy.findByTestId(/context-3/).should(`not.exist`);
      cy.findByTestId(/context-4/).should(`not.exist`);
      cy.findByTestId(/context-5/).should(`not.exist`);
      cy.findByTestId(/context-6/).should(`not.exist`);
    });

    it(`Should redirect to \`context/part-2\``, () => {
      cy.doClickHomepageCardLinkItem({
        elementIndex: 2,
        expectedURL: `${Cypress.env(`CONTEXT_PAGE_URL`)}/part-2`,
        linkSelector: /^Separate Context Value$/i
      });

      cy.findByTestId(/context-1/).should(`not.exist`);
      cy.findByTestId(/context-2/).should(`exist`);
      cy.findByTestId(/context-3/).should(`not.exist`);
      cy.findByTestId(/context-4/).should(`not.exist`);
      cy.findByTestId(/context-5/).should(`not.exist`);
      cy.findByTestId(/context-6/).should(`not.exist`);
    });

    it(`Should redirect to \`context/part-3\``, () => {
      cy.doClickHomepageCardLinkItem({
        elementIndex: 2,
        expectedURL: `${Cypress.env(`CONTEXT_PAGE_URL`)}/part-3`,
        linkSelector: /^Colocate State$/i
      });

      cy.findByTestId(/context-1/).should(`not.exist`);
      cy.findByTestId(/context-2/).should(`not.exist`);
      cy.findByTestId(/context-3/).should(`exist`);
      cy.findByTestId(/context-4/).should(`not.exist`);
      cy.findByTestId(/context-5/).should(`not.exist`);
      cy.findByTestId(/context-6/).should(`not.exist`);
    });

    it(`Should redirect to \`context/part-4\``, () => {
      cy.doClickHomepageCardLinkItem({
        elementIndex: 2,
        expectedURL: `${Cypress.env(`CONTEXT_PAGE_URL`)}/part-4`,
        linkSelector: /^Separate Context Dog Name$/i
      });

      cy.findByTestId(/context-1/).should(`not.exist`);
      cy.findByTestId(/context-2/).should(`not.exist`);
      cy.findByTestId(/context-3/).should(`not.exist`);
      cy.findByTestId(/context-4/).should(`exist`);
      cy.findByTestId(/context-5/).should(`not.exist`);
      cy.findByTestId(/context-6/).should(`not.exist`);
    });

    it(`Should redirect to \`context/part-5\``, () => {
      cy.doClickHomepageCardLinkItem({
        elementIndex: 2,
        expectedURL: `${Cypress.env(`CONTEXT_PAGE_URL`)}/part-5`,
        linkSelector: /^Memoized Cell Component$/i
      });

      cy.findByTestId(/context-1/).should(`not.exist`);
      cy.findByTestId(/context-2/).should(`not.exist`);
      cy.findByTestId(/context-3/).should(`not.exist`);
      cy.findByTestId(/context-4/).should(`not.exist`);
      cy.findByTestId(/context-5/).should(`exist`);
      cy.findByTestId(/context-6/).should(`not.exist`);
    });

    it(`Should redirect to \`context/part-6\``, () => {
      cy.doClickHomepageCardLinkItem({
        elementIndex: 2,
        expectedURL: `${Cypress.env(`CONTEXT_PAGE_URL`)}/part-6`,
        linkSelector: /^Refactor To Recoil$/i
      });

      cy.findByTestId(/context-1/).should(`not.exist`);
      cy.findByTestId(/context-2/).should(`not.exist`);
      cy.findByTestId(/context-3/).should(`not.exist`);
      cy.findByTestId(/context-4/).should(`not.exist`);
      cy.findByTestId(/context-5/).should(`not.exist`);
      cy.findByTestId(/context-6/).should(`exist`);
    });
  });
});
