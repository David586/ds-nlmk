import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconDesktop24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={classes}
    >
      <path
        d="M21 2H3C1.9 2 1 2.9 1 4V16C1 17.1 1.9 18 3 18H10V20H8V22H16V20H14V18H21C22.1 18 23 17.1 23 16V4C23 2.9 22.1 2 21 2ZM21 16H3V4H21V16Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconDesktop24;
