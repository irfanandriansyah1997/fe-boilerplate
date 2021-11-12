describe(`Testing Context Sidebar`, () => {
  describe(`Desktop Site Testing`, () => {
    beforeEach(() => {
      cy.viewport(`macbook-15`).visit(
        `${Cypress.env(`CONTEXT_PAGE_URL`)}/part-1`
      );
    });

    it(`Should Be Rendered 6 Sidebar Links & Assert Each Url`, () => {
      const EXPECTED_URLS: string[] = [
        `#/context/part-1`,
        `#/context/part-2`,
        `#/context/part-3`,
        `#/context/part-4`,
        `#/context/part-5`,
        `#/context/part-6`
      ];

      cy.assertSidebarLinkOnDesktopSite(6).assertSidebarLinkURLOnDesktopSite(
        EXPECTED_URLS
      );
    });

    it(`Assert URL Redirect When User Click Sidebar Item`, () => {
      /**
       * Simulate Redirect To Part 2
       */
      cy.doClickSidebarItemOnDekstopSite({
        expectedURL: `${Cypress.env(`CONTEXT_PAGE_URL`)}/part-2`,
        selector: /^Separate Context Value$/i
      });

      cy.findByTestId(/context-2/).should(`exist`);

      /**
       * Simulate Redirect To Part 3
       */
      cy.doClickSidebarItemOnDekstopSite({
        expectedURL: `${Cypress.env(`CONTEXT_PAGE_URL`)}/part-3`,
        selector: /^Colocate State$/i
      });

      cy.findByTestId(/context-3/).should(`exist`);

      /**
       * Simulate Redirect To Part 4
       */
      cy.doClickSidebarItemOnDekstopSite({
        expectedURL: `${Cypress.env(`CONTEXT_PAGE_URL`)}/part-4`,
        selector: /^Separate Context Dog Name$/i
      });

      cy.findByTestId(/context-4/).should(`exist`);

      /**
       * Simulate Redirect To Part 5
       */
      cy.doClickSidebarItemOnDekstopSite({
        expectedURL: `${Cypress.env(`CONTEXT_PAGE_URL`)}/part-5`,
        selector: /^Memoized Cell Component$/i
      });

      cy.findByTestId(/context-5/).should(`exist`);

      /**
       * Simulate Redirect To Part 6
       */
      cy.doClickSidebarItemOnDekstopSite({
        expectedURL: `${Cypress.env(`CONTEXT_PAGE_URL`)}/part-6`,
        selector: /^Refactor To Recoil$/i
      });

      cy.findByTestId(/context-6/).should(`exist`);

      /**
       * Simulate Redirect To Part 1
       */
      cy.doClickSidebarItemOnDekstopSite({
        expectedURL: `${Cypress.env(`CONTEXT_PAGE_URL`)}/part-1`,
        selector: /^Wrap Use Memo$/i
      });

      cy.findByTestId(/context-1/).should(`exist`);
    });
  });

  describe(`Mobile Site Testing`, () => {
    beforeEach(() => {
      cy.viewport(`iphone-x`).visit(
        `${Cypress.env(`CONTEXT_PAGE_URL`)}/part-1`
      );
    });

    it(`Should Be Rendered 6 Sidebar Links & Assert Each Url`, () => {
      const EXPECTED_URLS: string[] = [
        `#/context/part-1`,
        `#/context/part-2`,
        `#/context/part-3`,
        `#/context/part-4`,
        `#/context/part-5`,
        `#/context/part-6`
      ];

      cy.assertSidebarLinkOnMobileSite(6).assertSidebarLinkURLOnMobileSite(
        EXPECTED_URLS
      );
    });

    it(`Assert URL Redirect When User Click Sidebar Item`, () => {
      /**
       * Simulate Redirect To Part 2
       */
      cy.doClickSidebarItemOnMobileSite({
        expectedURL: `${Cypress.env(`CONTEXT_PAGE_URL`)}/part-2`,
        selector: /^Separate Context Value$/i
      });

      cy.findByTestId(/context-2/).should(`exist`);

      /**
       * Simulate Redirect To Part 3
       */
      cy.doClickSidebarItemOnMobileSite({
        expectedURL: `${Cypress.env(`CONTEXT_PAGE_URL`)}/part-3`,
        selector: /^Colocate State$/i
      });

      cy.findByTestId(/context-3/).should(`exist`);

      /**
       * Simulate Redirect To Part 4
       */
      cy.doClickSidebarItemOnMobileSite({
        expectedURL: `${Cypress.env(`CONTEXT_PAGE_URL`)}/part-4`,
        selector: /^Separate Context Dog Name$/i
      });

      cy.findByTestId(/context-4/).should(`exist`);

      /**
       * Simulate Redirect To Part 5
       */
      cy.doClickSidebarItemOnMobileSite({
        expectedURL: `${Cypress.env(`CONTEXT_PAGE_URL`)}/part-5`,
        selector: /^Memoized Cell Component$/i
      });

      cy.findByTestId(/context-5/).should(`exist`);

      /**
       * Simulate Redirect To Part 6
       */
      cy.doClickSidebarItemOnMobileSite({
        expectedURL: `${Cypress.env(`CONTEXT_PAGE_URL`)}/part-6`,
        selector: /^Refactor To Recoil$/i
      });

      cy.findByTestId(/context-6/).should(`exist`);

      /**
       * Simulate Redirect To Part 1
       */
      cy.doClickSidebarItemOnMobileSite({
        expectedURL: `${Cypress.env(`CONTEXT_PAGE_URL`)}/part-1`,
        selector: /^Wrap Use Memo$/i
      });

      cy.findByTestId(/context-1/).should(`exist`);
    });
  });
});
