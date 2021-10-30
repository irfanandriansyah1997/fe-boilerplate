import { objToString, verifiedIsNotEmpty } from '@99/helper';
import { FC } from 'react';
import { useHistory } from 'react-router-dom';

import { IMenu } from '../../../interface/component';
import MarkdownReader from '../../organisms/markdown-reader';
import Sidebar from '../../organisms/sidebar';
import { useSectionContext } from './hooks/section.hook';
import style from './style/style.module.scss';
import { SectionProvider } from './context';

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

/**
 * Section Templates
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.10.14
 */
const SectionTemplates = (Component: FC, sidebar: IMenu) => {
  /**
   * Inner Component
   * @author Irfan Andriansyah <irfan@99.co>
   * @since 2021.10.14
   */
  const InnerComponentTemplates: FC = (props) => {
    const history = useHistory();

    return (
      <SectionProvider>
        <Sidebar {...sidebar} onClickBack={(): void => history.push(`/`)} />
        <SectionItem>
          <Component {...props} />
        </SectionItem>
      </SectionProvider>
    );
  };

  return InnerComponentTemplates;
};

export default SectionTemplates;
