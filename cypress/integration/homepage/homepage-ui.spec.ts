describe(`Testing Homepage UI`, () => {
  describe(`Testing Element On Title & Content Section`, () => {
    beforeEach(() => {
      cy.viewport(`macbook-15`).visit(Cypress.env(`HOME_PAGE_URL`));
    });

    it(`Testing Title & Description Must Be Correct`, () => {
      cy.findByTestId(/homepage-title/).should(
        `have.text`,
        `React.js cheatsheet`
      );
      cy.findByTestId(/homepage-description/).should(
        `have.text`,
        `React is a JavaScript library for building user interfaces. This guide targets React v15 to v16.`
      );
    });

    it(`Just Only One Section Will Be Displayed On Browser`, () => {
      cy.findByTestId(/homepage-section/).should(`have.length`, 1);
      cy.findByTestId(/homepage-section/)
        .eq(0)
        .find(`> h2`)
        .should(`have.text`, `Performance`);
    });
  });

  describe(`Testing Homepage Card On Performace Section`, () => {
    beforeEach(() => {
      cy.viewport(`macbook-15`).visit(Cypress.env(`HOME_PAGE_URL`));
    });

    it(`Must Be Render 3 Card On Performance Section`, () => {
      cy.findAllByTestId(`homepage-card`).should(`have.length`, 3);

      /**
       * Check How Many Link On Card 1
       */
      cy.findAllByTestId(`homepage-card`)
        .eq(0)
        .findAllByTestId(/homepage-card-link/)
        .should(`have.length`, 3);

      /**
       * Check How Many Link On Card 2
       */
      cy.findAllByTestId(`homepage-card`)
        .eq(1)
        .findAllByTestId(/homepage-card-link/)
        .should(`have.length`, 3);

      /**
       * Check How Many Link On Card 3
       */
      cy.findAllByTestId(`homepage-card`)
        .eq(2)
        .findAllByTestId(/homepage-card-link/)
        .should(`have.length`, 6);
    });

    it(`Render Code Splitting Card On Browser`, () => {
      cy.findAllByTestId(`homepage-card`)
        .should(`have.length`, 3)
        .assertInformationHomepageCard({
          description: `Cheat Sheet Implement Code Splitting On React JS`,
          elementIndex: 0,
          title: `⏳ Code Splitting`
        });

      /**
       * Check How Many Link On Card 0
       */
      cy.assertAllHomepageCardLink({
        elementIndex: 0,
        links: [
          `#/code-splitting/part-1`,
          `#/code-splitting/part-2`,
          `#/code-splitting/part-3`
        ]
      });
    });

    it(`Render Use Memo Card On Browser`, () => {
      cy.findAllByTestId(`homepage-card`)
        .should(`have.length`, 3)
        .assertInformationHomepageCard({
          description: `Reduce High Calculation With Use Memo`,
          elementIndex: 1,
          title: `🧮 High Calculate With Use Memo`
        });

      /**
       * Check How Many Link On Card 1
       */
      cy.assertAllHomepageCardLink({
        elementIndex: 1,
        links: [`#/use-memo/part-1`, `#/use-memo/part-2`, `#/use-memo/part-3`]
      });
    });

    it(`Render Optimize Context Card On Browser`, () => {
      cy.findAllByTestId(`homepage-card`)
        .should(`have.length`, 3)
        .assertInformationHomepageCard({
          description: `Cheat Sheet Optimize Context Value Prevent Unused Re-render`,
          elementIndex: 2,
          title: `🎩 Optimize Context Value`
        });

      /**
       * Check How Many Link On Card 2
       */
      cy.assertAllHomepageCardLink({
        elementIndex: 2,
        links: [
          `#/context/part-1`,
          `#/context/part-2`,
          `#/context/part-3`,
          `#/context/part-4`,
          `#/context/part-5`,
          `#/context/part-6`
        ]
      });
    });
  });
});
