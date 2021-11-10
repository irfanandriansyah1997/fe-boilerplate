import {
  IAssertAllHomepageCardLink,
  IAssertInformationHomepage,
  IDoClickHomepageCardLinkItem
} from './interface';

Cypress.Commands.add(
  `assertInformationHomepageCard`,
  ({ description, elementIndex, title }: IAssertInformationHomepage) => {
    /**
     * Checking Homepage Card Title
     */
    cy.findAllByTestId(`homepage-card`)
      .eq(elementIndex)
      .find(`> h6`)
      .should(`have.text`, title);

    /**
     * Checking Homepage Card Description
     */
    cy.findAllByTestId(`homepage-card`)
      .eq(elementIndex)
      .find(`p`)
      .eq(0)
      .should(`have.text`, description);
  }
);

Cypress.Commands.add(
  `assertAllHomepageCardLink`,
  ({ elementIndex, links }: IAssertAllHomepageCardLink) => {
    /**
     * Check How Many Link On Homepage Card
     */
    cy.findAllByTestId(`homepage-card`)
      .eq(elementIndex)
      .findAllByTestId(/homepage-card-link/)
      .each((element, index) => {
        expect(element.attr(`href`)).to.equal(links[index]);
      });
  }
);

Cypress.Commands.add(
  `doClickHomepageCardLinkItem`,
  ({
    elementIndex,
    expectedURL,
    linkSelector
  }: IDoClickHomepageCardLinkItem) => {
    cy.findAllByTestId(`homepage-card`)
      .eq(elementIndex)
      .findByText(linkSelector)
      .click()
      .url()
      .should(`equal`, expectedURL);
  }
);
