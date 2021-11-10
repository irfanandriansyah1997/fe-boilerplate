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

    it(`Should redirect to \`use-memo/part-1\``);
    it(`Should redirect to \`use-memo/part-2\``);
    it(`Should redirect to \`use-memo/part-3\``);
  });

  describe(`Assert Link On Optimize Context Value`, () => {
    beforeEach(() => {
      cy.viewport(`macbook-15`).visit(Cypress.env(`HOME_PAGE_URL`));
    });

    it(`Should redirect to \`context/part-1\``);
    it(`Should redirect to \`context/part-2\``);
    it(`Should redirect to \`context/part-3\``);
    it(`Should redirect to \`context/part-4\``);
    it(`Should redirect to \`context/part-5\``);
    it(`Should redirect to \`context/part-6\``);
  });
});
