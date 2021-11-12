describe(`Testing Context Section Part 3`, () => {
  describe(`Desktop Site Testing`, () => {
    beforeEach(() => {
      cy.viewport(`macbook-15`).visit(
        `${Cypress.env(`CONTEXT_PAGE_URL`)}/part-3`
      );
    });

    it(`Should Be Render Context Part 3 Section`, () => {
      cy.findByTestId(/context-3/).should(`exist`);
    });

    it(`Simulate User Set Dog Name On Input`, () => {
      cy.findByLabelText(/Dog Name/)
        .should(`exist`)
        .type(`Sample Dog Name`);

      cy.findByText(/^Sample Dog Name$/i).should(`exist`);
    });

    it(`Should Cell Item Updated When User Click \`Update Cells\` Button`, () => {
      cy.getGridCellByIndex(0).then((firstRender) => {
        const firstText = firstRender.text();

        /**
         * Simulate Click Update Cells Button
         */
        cy.findByText(/Update Cells/)
          .should(`exist`)
          .click();

        cy.getGridCellByIndex(0).then((secondRender) => {
          const secondText = secondRender.text();

          expect(secondText).not.equal(firstText);
        });
      });
    });

    it(`Should Cell Item Updated When User Click \`Cell Items\``, () => {
      cy.getGridCellByIndex(0).then((firstRender) => {
        const firstText = firstRender.text();

        /**
         * Simulate Click Grid Cell
         */
        cy.getGridCellByIndex(0)
          .click()
          .then((secondRender) => {
            const secondText = secondRender.text();

            expect(secondText).not.equal(firstText);
          });
      });
    });

    it(`Simulate User Click Force Re-Render`, () => {
      cy.getGridCellByIndex(0).then((firstRender) => {
        const firstText = firstRender.text();

        /**
         * Simulate Click Force Re Render
         */
        cy.findByText(/^Force Re-render$/i).click();

        cy.getGridCellByIndex(0).then((secondRender) => {
          const secondText = secondRender.text();

          expect(secondText).equal(firstText);
        });
      });
    });
  });

  describe(`Mobile Site Testing`, () => {
    beforeEach(() => {
      cy.viewport(`iphone-x`).visit(
        `${Cypress.env(`CONTEXT_PAGE_URL`)}/part-3`
      );
    });

    it(`Should Be Render Context Part 3 Section`, () => {
      cy.findByTestId(/context-3/).should(`exist`);
    });

    it(`Simulate User Set Dog Name On Input`, () => {
      cy.findByLabelText(/Dog Name/)
        .should(`exist`)
        .type(`Sample Dog Name`);

      cy.findByText(/^Sample Dog Name$/i).should(`exist`);
    });

    it(`Should Cell Item Updated When User Click \`Update Cells\` Button`, () => {
      cy.getGridCellByIndex(0).then((firstRender) => {
        const firstText = firstRender.text();

        /**
         * Simulate Click Update Cells Button
         */
        cy.findByText(/Update Cells/)
          .should(`exist`)
          .click();

        cy.getGridCellByIndex(0).then((secondRender) => {
          const secondText = secondRender.text();

          expect(secondText).not.equal(firstText);
        });
      });
    });

    it(`Should Cell Item Updated When User Click \`Cell Items\``, () => {
      cy.getGridCellByIndex(0).then((firstRender) => {
        const firstText = firstRender.text();

        /**
         * Simulate Click Grid Cell
         */
        cy.getGridCellByIndex(0)
          .click()
          .then((secondRender) => {
            const secondText = secondRender.text();

            expect(secondText).not.equal(firstText);
          });
      });
    });

    it(`Simulate User Click Force Re-Render`, () => {
      cy.getGridCellByIndex(0).then((firstRender) => {
        const firstText = firstRender.text();

        /**
         * Simulate Click Force Re Render
         */
        cy.findByText(/^Force Re-render$/i).click();

        cy.getGridCellByIndex(0).then((secondRender) => {
          const secondText = secondRender.text();

          expect(secondText).equal(firstText);
        });
      });
    });
  });
});
