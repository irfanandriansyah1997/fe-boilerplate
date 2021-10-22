import { FC } from 'react';
import { useHistory } from 'react-router-dom';

import { IMenu } from '../../../interface/component';
import Sidebar from '../../organisms/sidebar';

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
      <div>
        <Sidebar {...sidebar} onClickBack={(): void => history.push(`/`)} />
        <Component {...props} />
      </div>
    );
  };

  return InnerComponentTemplates;
};

export default SectionTemplates;
