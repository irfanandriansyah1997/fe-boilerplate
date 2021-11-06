describe(`Testing Homepage`, () => {
  describe(`Testing Element On Title & Content Section`, () => {
    beforeEach(() => {
      cy.viewport(`macbook-15`).visit(Cypress.env(`HOME_PAGE_URL`));
    });

    it(`Testing Title & Description Must Be Correct`, () => {
      cy.get(`[data-testid="homepage-title"]`).contains(`React.js cheatsheet`);
      cy.get(`[data-testid="homepage-description"]`).contains(
        `React is a JavaScript library for building user interfaces. This guide targets React v15 to v16.`
      );
    });

    it(`Just Only One Section Will Be Displayed On Browser`, () => {
      cy.get(`[data-testid="homepage-section"]`).should(`have.length`, 1);
      cy.get(`[data-testid="homepage-section"]`)
        .eq(0)
        .find(`> h2`)
        .contains(`Performance`);
    });
  });

  describe(`Testing Homepage Card On Performace Section`, () => {
    beforeEach(() => {
      cy.viewport(`macbook-15`).visit(Cypress.env(`HOME_PAGE_URL`));
    });

    it(`Must Be Render 3 Card On Performance Section`, () => {
      cy.get(`[data-testid="homepage-card"`).should(`have.length`, 3);

      /**
       * Check How Many Link On Card 1
       */
      cy.get(`[data-testid="homepage-card"`)
        .eq(0)
        .find(`[data-testid="homepage-card-link"]`)
        .should(`have.length`, 3);

      /**
       * Check How Many Link On Card 2
       */
      cy.get(`[data-testid="homepage-card"`)
        .eq(1)
        .find(`[data-testid="homepage-card-link"]`)
        .should(`have.length`, 3);

      /**
       * Check How Many Link On Card 3
       */
      cy.get(`[data-testid="homepage-card"`)
        .eq(2)
        .find(`[data-testid="homepage-card-link"]`)
        .should(`have.length`, 6);
    });

    it(`Render Code Splitting Card On Browser`, () => {
      cy.get(`[data-testid="homepage-card"`).should(`have.length`, 3);

      cy.get(`[data-testid="homepage-card"`)
        .eq(0)
        .find(`> h6`)
        .contains(`⏳ Code Splitting`);

      cy.get(`[data-testid="homepage-card"`)
        .eq(0)
        .find(`p`)
        .eq(0)
        .contains(`Cheat Sheet Implement Code Splitting On React JS`);

      const EXPECTED_URL: string[] = [
        `#/code-splitting/part-1`,
        `#/code-splitting/part-2`,
        `#/code-splitting/part-3`
      ];

      /**
       * Check How Many Link On Card 0
       */
      cy.get(`[data-testid="homepage-card"`)
        .eq(0)
        .find(`[data-testid="homepage-card-link"]`)
        .each((element, index) => {
          expect(element.attr(`href`)).to.equal(EXPECTED_URL[index]);
        });
    });

    it(`Render Use Memo Card On Browser`, () => {
      cy.get(`[data-testid="homepage-card"`).should(`have.length`, 3);

      cy.get(`[data-testid="homepage-card"`)
        .eq(1)
        .find(`> h6`)
        .contains(`🧮 High Calculate With Use Memo`);

      cy.get(`[data-testid="homepage-card"`)
        .eq(1)
        .find(`p`)
        .eq(0)
        .contains(`Reduce High Calculation With Use Memo`);

      const EXPECTED_URL: string[] = [
        `#/use-memo/part-1`,
        `#/use-memo/part-2`,
        `#/use-memo/part-3`
      ];

      /**
       * Check How Many Link On Card 1
       */
      cy.get(`[data-testid="homepage-card"`)
        .eq(1)
        .find(`[data-testid="homepage-card-link"]`)
        .each((element, index) => {
          expect(element.attr(`href`)).to.equal(EXPECTED_URL[index]);
        });
    });

    it(`Render Optimize Context Card On Browser`, () => {
      cy.get(`[data-testid="homepage-card"`).should(`have.length`, 3);

      cy.get(`[data-testid="homepage-card"`)
        .eq(2)
        .find(`> h6`)
        .contains(`🎩 Optimize Context Value`);

      cy.get(`[data-testid="homepage-card"`)
        .eq(2)
        .find(`p`)
        .eq(0)
        .contains(
          `Cheat Sheet Optimize Context Value Prevent Unused Re-render`
        );

      const EXPECTED_URL: string[] = [
        `#/context/part-1`,
        `#/context/part-2`,
        `#/context/part-3`,
        `#/context/part-4`,
        `#/context/part-5`,
        `#/context/part-6`
      ];

      /**
       * Check How Many Link On Card 2
       */
      cy.get(`[data-testid="homepage-card"`)
        .eq(2)
        .find(`[data-testid="homepage-card-link"]`)
        .each((element, index) => {
          expect(element.attr(`href`)).to.equal(EXPECTED_URL[index]);
        });
    });
  });
});
