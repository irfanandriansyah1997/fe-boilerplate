Cypress.Commands.add(`getGridCellByIndex`, (position: number) => {
  cy.getGridCells().eq(position);
});

Cypress.Commands.add(`getGridCells`, () => {
  cy.findAllByTestId(/grid-cell/).should(`have.length`, 900);
});
