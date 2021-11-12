// eslint-disable-next-line import/no-extraneous-dependencies
import { Matcher } from '@testing-library/cypress/node_modules/@testing-library/dom/types/matches';

/**
 * Do Click Sidebar Item On Desktop Site Param Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.11.12
 */
export interface IDoClickSidebarItem {
  expectedURL: string;
  selector: Matcher;
}
