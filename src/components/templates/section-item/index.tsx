import { objToString, verifiedIsNotEmpty } from '@99/helper';
import { FC } from 'react';

import MarkdownReader from '../../organisms/markdown-reader';
import { useSectionContext } from '../section/hooks/section.hook';
import style from './style/style.module.scss';

/**
 * Section Item Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.10.14
 */
const SectionItem: FC = ({ children }) => {
  const {
    state: { markdownURL }
  } = useSectionContext();

  return (
    <div
      className={objToString({
        [style[`t-section-item`]]: true,
        [style[`t-section-item--with-markdown`]]: verifiedIsNotEmpty(
          markdownURL
        )
      })}
    >
      <div className={style[`t-section-item__content`]}>{children}</div>
      {verifiedIsNotEmpty(markdownURL) && (
        <div className={style[`t-section-item__markdown`]}>
          <MarkdownReader markdownUrl={markdownURL as string} />
        </div>
      )}
    </div>
  );
};

export default SectionItem;
