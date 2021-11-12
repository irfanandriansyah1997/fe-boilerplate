import { IDoClickSidebarItem } from './interface';

/**
 * Commands Desktop Site
 */
Cypress.Commands.add(`getSidebarLinksOnDesktopSite`, () => {
  cy.findAllByTestId(/sidebar-dsite-item/);
});

Cypress.Commands.add(`getSidebarLinkOnDesktopSite`, (position: number) => {
  cy.getSidebarLinksOnDesktopSite().eq(position);
});

Cypress.Commands.add(`assertSidebarLinkOnDesktopSite`, (length: number) => {
  cy.getSidebarLinksOnDesktopSite().should(`have.length`, length);
});

Cypress.Commands.add(`assertSidebarLinkURLOnDesktopSite`, (urls: string[]) => {
  cy.getSidebarLinksOnDesktopSite().each((item, index) => {
    expect(item).attr(`href`, urls[index]);
  });
});

Cypress.Commands.add(
  `doClickSidebarItemOnDekstopSite`,
  ({ expectedURL, selector }: IDoClickSidebarItem) => {
    cy.findByText(selector).click().url().should(`equals`, expectedURL);
  }
);

/**
 * Commands Mobile Site
 */
Cypress.Commands.add(`getSidebarLinksOnMobileSite`, () => {
  cy.findByTestId(/sidebar-msite-navbar-button/)
    .should(`exist`)
    .click();

  cy.findAllByTestId(/sidebar-msite-dialog-menu-item/);
});

Cypress.Commands.add(`getSidebarLinkOnMobileSite`, (position: number) => {
  cy.getSidebarLinksOnMobileSite().eq(position);
});

Cypress.Commands.add(`assertSidebarLinkOnMobileSite`, (length: number) => {
  cy.getSidebarLinksOnMobileSite().should(`have.length`, length);
});

Cypress.Commands.add(`assertSidebarLinkURLOnMobileSite`, (urls: string[]) => {
  cy.getSidebarLinksOnMobileSite().each((item, index) => {
    expect(item).attr(`href`, urls[index]);
  });
});

Cypress.Commands.add(
  `doClickSidebarItemOnMobileSite`,
  ({ expectedURL, selector }: IDoClickSidebarItem) => {
    /**
     * Simulate Open Sidebar Dialog
     */
    cy.getSidebarLinksOnMobileSite();

    cy.findByText(selector).click().url().should(`equals`, expectedURL);
  }
);
