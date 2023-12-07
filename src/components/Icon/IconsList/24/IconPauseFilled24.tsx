import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

export const IconPauseFilled24: FC<IIconsProps> = ({
  color = 'inherit',
  htmlColor
}) => {
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
        d="M4 21H9.14286V3H4V21ZM14.2857 3V21H19.4286V3H14.2857Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconPauseFilled24;
