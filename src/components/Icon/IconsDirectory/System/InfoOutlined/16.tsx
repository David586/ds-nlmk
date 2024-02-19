import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconInfoOutlined16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M7.993 1A6.997 6.997 0 0 0 1 8c0 3.864 3.129 7 6.993 7A7.004 7.004 0 0 0 15 8c0-3.864-3.136-7-7.007-7ZM8.7 5.9H7.3V4.5h1.4v1.4Zm0 5.599H7.3v-4.2h1.4v4.2Zm-6.3-3.5c0 3.094 2.506 5.6 5.6 5.6s5.6-2.506 5.6-5.6S11.094 2.4 8 2.4A5.598 5.598 0 0 0 2.4 8Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconInfoOutlined16;
