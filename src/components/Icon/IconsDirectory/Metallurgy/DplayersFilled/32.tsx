import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconDplayersFilled32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 32 32" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M10.794 2a1 1 0 0 0-1 1v3.68L6.065 21H4c-.828 0-2 .5-2 2s1.172 2 2 2h2l1.579 4.342a1 1 0 0 0 .94.658H23.48a1 1 0 0 0 .94-.658L26 25h2c.828 0 2-.506 2-2s-1.172-2-2-2h-2.065l-3.73-14.32V3a1 1 0 0 0-1-1h-10.41Zm7.706 8a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h5Zm2.5 6.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v1Zm.5 7.5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h11Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconDplayersFilled32;
