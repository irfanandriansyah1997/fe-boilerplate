// eslint-disable-next-line import/no-extraneous-dependencies
import { Matcher } from '@testing-library/cypress/node_modules/@testing-library/dom/types/matches';

/**
 * Assert Information Homepage Parameter Commands Param Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.11.10
 */
export interface IAssertInformationHomepage {
  description: string;
  elementIndex: number;
  title: string;
}

/**
 * Assert All Homepage Card Link Commands Param Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.11.10
 */
export interface IAssertAllHomepageCardLink {
  elementIndex: number;
  links: string[];
}

/**
 * Do Click Homepage Card Link Item Commands Param Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.11.10
 */
export interface IDoClickHomepageCardLinkItem {
  elementIndex: number;
  expectedURL: string;
  linkSelector: Matcher;
}
