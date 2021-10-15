import { IMenuItem } from '../../../../interface/component';

export const DEFAULT_HEADER: IMenuItem[] = [
  {
    isPrimary: true,
    text: `Homepage`,
    to: `/`
  },
  {
    text: `Code Spliting`,
    to: `/code-splitting`
  },
  {
    text: `React Pattern`,
    to: `/react-pattern`
  }
];
