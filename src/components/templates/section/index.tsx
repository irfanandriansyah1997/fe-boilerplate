import { FC } from 'react';
import { useHistory } from 'react-router-dom';

import { IMenu } from '../../../interface/component';
import Sidebar from '../../organisms/sidebar';
import SectionItem from '../section-item';
import { SectionProvider } from './context';

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
