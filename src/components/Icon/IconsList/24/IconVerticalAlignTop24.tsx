import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconVerticalAlignTop24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 5V3H20V5H4ZM11 11H8L12 7L16 11H13V21H11V11Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconVerticalAlignTop24;
