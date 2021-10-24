import { objToString, verifiedIsNotEmpty } from '@99/helper';
import { FC } from 'react';

import MarkdownReader from '../../organisms/markdown-reader';
import style from './style/style.module.scss';

/**
 * Section Item Templates
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.10.14
 */
const SectionItemTemplates = (
  Component: FC,
  markdown: string | undefined = undefined
) => {
  /**
   * Inner Component
   * @author Irfan Andriansyah <irfan@99.co>
   * @since 2021.10.14
   */
  const InnerComponentTemplates: FC = (props) => (
    <div
      className={objToString({
        [style[`t-section-item`]]: true,
        [style[`t-section-item--with-markdown`]]: verifiedIsNotEmpty(markdown)
      })}
    >
      <div className={style[`t-section-item__content`]}>
        <Component {...props} />
      </div>
      {verifiedIsNotEmpty(markdown) && (
        <div className={style[`t-section-item__markdown`]}>
          <MarkdownReader markdownUrl={markdown as string} />
        </div>
      )}
    </div>
  );

  return InnerComponentTemplates;
};

export default SectionItemTemplates;
