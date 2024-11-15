import React from 'react';

import { Badge } from '@components/Badge';
import Chip from '@components/Chip';
import { IChipProps } from '@components/Chip/types';

import styles from './Chip.module.scss';

import { argsTypes } from './argsTypes';

const withPadding = (Story: () => any) => <div style={{ minHeight: 80 }}>{<Story/>}</div>;

export default {
  title: 'Components/Chip/Stories',
  component: Badge,
  decorators: [withPadding],
  argTypes: argsTypes
};

export const ChipDefault = (argsTypes: IChipProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.row}>
        <Chip {...argsTypes} children={argsTypes.children} />
      </div>
    </div>
  );
};
ChipDefault.storyName = 'Chip по умолчанию';
ChipDefault.args = {
  children: '1234'
};
