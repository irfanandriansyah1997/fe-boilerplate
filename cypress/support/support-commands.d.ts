// in cypress/support/index.ts
// load type definitions that come with Cypress module
/// <reference types="cypress" />

import {
  IAssertAllHomepageCardLink,
  IAssertInformationHomepage,
  IDoClickHomepageCardLinkItem
} from './homepage-commands/interface';
import { IDoClickSidebarItem } from './sidebar-commands/interface';

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
      assertSidebarLinkOnDesktopSite(
        length: number
      ): Chainable<JQuery<HTMLElement>>;
      assertSidebarLinkOnMobileSite(
        length: number
      ): Chainable<JQuery<HTMLElement>>;
      assertSidebarLinkURLOnDesktopSite(
        urls: string[]
      ): Chainable<JQuery<HTMLElement>>;
      assertSidebarLinkURLOnMobileSite(
        urls: string[]
      ): Chainable<JQuery<HTMLElement>>;
      doClickHomepageCardLinkItem(
        value: IDoClickHomepageCardLinkItem
      ): Chainable<JQuery<HTMLElement>>;
      doClickSidebarItemOnDekstopSite(
        value: IDoClickSidebarItem
      ): Chainable<JQuery<HTMLElement>>;
      doClickSidebarItemOnMobileSite(
        value: IDoClickSidebarItem
      ): Chainable<JQuery<HTMLElement>>;
      getGridCellByIndex(position: number): Chainable<JQuery<HTMLElement>>;
      getGridCells(): Chainable<JQuery<HTMLElement>>;
      getSidebarLinkOnDesktopSite(
        position: number
      ): Chainable<JQuery<HTMLElement>>;
      getSidebarLinkOnMobileSite(
        position: number
      ): Chainable<JQuery<HTMLElement>>;
      getSidebarLinksOnDesktopSite(): Chainable<JQuery<HTMLElement>>;
      getSidebarLinksOnMobileSite(): Chainable<JQuery<HTMLElement>>;
    }
  }
}
