// in cypress/support/index.ts
// load type definitions that come with Cypress module
/// <reference types="cypress" />

import {
  IAssertAllHomepageCardLink,
  IAssertInformationHomepage,
  IDoClickHomepageCardLinkItem
} from './interface';

// Must be declared global to be detected by typescript (allows import/export)
// eslint-disable @typescript/interface-name
declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface Chainable<Subject> {
      assertAllHomepageCardLink(
        value: IAssertAllHomepageCardLink
      ): Chainable<Element>;
      assertInformationHomepageCard(
        value: IAssertInformationHomepage
      ): Chainable<Element>;
      doClickHomepageCardLinkItem(
        value: IDoClickHomepageCardLinkItem
      ): Chainable<Element>;
    }
  }
}
