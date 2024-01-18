import React, { FC } from 'react';

import { IIconsProps } from '@components/Icon/types';
import clsx from 'clsx';

import styles from '@components/Icon/IconsList/IconsList.module.scss';

export const IconDeleteBinOutlined16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M11.5 3.8H15v1.4h-1.4v9.1a.7.7 0 0 1-.7.7H3.1a.7.7 0 0 1-.7-.7V5.2H1V3.8h3.5V1.7a.7.7 0 0 1 .7-.7h5.6a.7.7 0 0 1 .7.7v2.1Zm.7 1.4H3.8v8.4h8.4V5.2ZM5.9 2.4v1.4h4.2V2.4H5.9Z"
      />
      <path
        fill={htmlColor || 'currentColor'}
        d="M5.9 6.367v6.066h.7V6.367h-.7Zm1.867 0v6.066h.7V6.367h-.7Zm1.866 0v6.066h.7V6.367h-.7Z"
      />
    </svg>
  );
};

export default IconDeleteBinOutlined16;
